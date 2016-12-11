'use strict';

(function() {

    class AdminRebelionController{
        constructor($http, MessagesService) {
            this.$http = $http;
            this.messagesService = MessagesService;
            this.rebelionHero = {};
        }

        /**
        * hero cards public methods
        **/
        submitHeroCards(scope) {
            if(!scope.addHeroCards.$valid) {
                this.messagesService.addMessage('Form filled with errors.', 'error');
                return;
            }
            this.$http.post('/api/hero-cards', this.rebelionHero)
            .then(response => {
                this.messagesService.addMessage('Hero card added successfully.', 'success');
                this.clearForm(scope, scope.addHeroCards);
            });
        }
    }

    angular.module('imperialAssaultApp.admin')
    .controller('AdminRebelionController', AdminRebelionController);
})();
