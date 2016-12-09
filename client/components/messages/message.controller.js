'use strict';

class MessageController {
    constructor ($rootScope, MessagesService) {
        this.messagesService = MessagesService;
        this.messages = this.messagesService.getMessages();
        $rootScope.$on('message.added', this.getMessages.bind(this));
    }

    getMessages () {
        this.messages = this.messagesService.getMessages();
    }

    closeMessage (index) {
        this.messagesService.removeMessage(index);
    }
}

angular.module('imperialAssaultApp.messages')
.controller('MessageController', MessageController);
