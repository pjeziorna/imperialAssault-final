'use strict';

(function() {

    class AdminController {
        constructor(User, MessagesService, $http, PopupsService) {
            // Use the User $resource to fetch all users
            this.users = User.query();
            this.messagesService = MessagesService;
            this.popupsService = PopupsService;
            this.$http = $http;
            this.gameSet = {};
            this.gameSets = [];
            this.$onInit();
        }

        $onInit() {
            this._getGameSets();
        }

        delete(user) {
            this.popupsService.open({
                message: `Are you sure you want to delete user ${user.name}?`
            })
            .then(() => {
                user.$remove();
                this.users.splice(this.users.indexOf(user), 1);
            });
        }

        range(n) {
            return new Array(n);
        }

        clearForm(scope, formName) {
            scope[formName.$name].$setPristine();
            scope[formName.$name].$setUntouched();
            switch (formName.$name) {
                case 'addSetForm':
                    this.gameSet = {};
                    break;
                default:

            }
        }

        submitSetName(scope) {
            if(!scope.addSetForm.$valid) {
                console.log('form not valid', this.messagesService);
                this.messagesService.addMessage('Form filled with errors.', 'error');
                return;
            }
            this.gameSet._id = this.gameSet.name.trim().replace(' ', '_').toUpperCase();
            this.$http.post('/api/game-sets', this.gameSet)
            .then(() => {
                this.messagesService.addMessage('Game set added successfully.', 'success');
                this.gameSets.push(angular.copy(this.gameSet));
                this.clearForm(scope, scope.addSetForm);
            })
            .catch(response => {
                if( response.data.code === 11000) {
                    this.messagesService.addMessage('This enter already exists.', 'error');
                    this.clearForm(scope, scope.addSetForm);
                }
            });
        }

        editGameSet(set) {
            set.edit = true;
        }

        cancelEditingSet(set) {
            delete set.edit;
        }

        updateGameSet(scope, set) {
            delete set.edit;
            this.$http.put('/api/game-sets/' + set._id, set)
            .then(response => {
                this.messagesService.addMessage('Game set name updated correctly.', 'success');
                let index = _.findIndex(this.gameSets, {_id: set._id});
                this.gameSets[index] = set;
            });
        }

        removeGameSet(set) {
            this.popupsService.open({
                message: `Are you sure you want to delet set ${set.name}?`
            })
            .then(() => {
                this.$http.delete('/api/game-sets/' + set._id)
                .then(() => {
                    this.messagesService.addMessage('Game set removed correctly.', 'success');
                    let index = _.findIndex(this.gameSets, {_id: set._id});
                    this.gameSets.splice(index, 1);
                });
            });
        }

        _getGameSets() {
            this.gameSets = [];
            this.$http.get('/api/game-sets')
            .then(response => {
                this.gameSets = response.data;
            });
        }
    }

    angular.module('imperialAssaultApp.admin')
    .controller('AdminController', AdminController);
})();
