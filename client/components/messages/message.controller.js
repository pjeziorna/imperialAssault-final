'use strict';

class MessageController {
    constructor ($rootScope, $timeout, MessagesService) {
        this.rootScope = $rootScope;
        this.timeout = $timeout;
        this.messagesService = MessagesService;

        this._subscribe();
    }

    getMessages () {
        return this.messagesService.getMessages();
    }

    closeMessage (index) {
        this.messagesService.removeMessage(index);
    }

    _subscribe () {
        this.rootScope.$on('messageAdded', this._scrollToMessage.bind(this));
    }

    _scrollToMessage (event, data) {
        this.timeout(() => {
            let messages = document.getElementsByClassName('message-notify');
            window.scrollTo(0, messages[data.index].offsetTop - 80);
        }, 200);
    }
}

angular.module('imperialAssaultApp.messages')
.controller('MessageController', MessageController);
