'use strict';

angular.module('imperialAssaultApp.messages')
    .service('MessagesService', function ($rootScope) {

        /**
         * message = {type: String, text: String, id: Number}
         **/
        let messages = [];

        this.addMessage = (message, type) => {
            let _message = {
                id: messages.length,
                text: message,
                type: type
            };
            messages.push(_message);
            $rootScope.$emit('messageAdded', {index : messages.length - 1});
        };

        this.removeMessage = (index) => {
            messages.splice(index, 1);
        };

        this.getMessages = () => {
            return messages;
        };
    });
