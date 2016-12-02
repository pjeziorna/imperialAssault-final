'use strict';

class MessageController {
    constructor ($rootScope, $timeout, MessagesService) {
        this.rootScope = $rootScope;
        this.timeout = $timeout;
        this.messagesService = MessagesService;
    }

    getMessages () {
        return this.messagesService.getMessages();
    }

    closeMessage (index) {
        this.messagesService.removeMessage(index);
    }
}

angular.module('imperialAssaultApp.messages')
.controller('MessageController', MessageController);
