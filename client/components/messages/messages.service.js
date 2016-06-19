'use strict';

angular.module('imperialAssaultApp.messages')
    .service('messagesNotify', function ($timeout) {

        let message = {
                text: null,
                show: false
            },
            showHard = false;

        this.getMessage = () => {
            return message;
        }

        this.resetMessage = () => {
            if(message.show && !showHard) {
                _hideMessage();
            }
        }

        /**
         * Show message which will be closed after some time
         *
         * @param  {Object}   message  - text that should be shown
         * @param  {Object}   timeout  - time after which text should be closed (in seconds)
         */
        this.showMessageWithTimeout = (message, timeout) => {
            _showMessage(message);
            $timeout(() => {
                _hideMessage();
            }, parseInt(timeout * 1000, 10));
        }

        this.showConstantMessage = (message) => {
            _showMessage(message);
        }

        this.showHardConstantMessage = (message) => {
            _showHardMessage(message);
        }

        this.hideHardConstantMessage = () => {
            _hideHardMessage();
        }

        function _showMessage(_message) {
            message.text = _message;
            message.show = true;
        }

        function _showHardMessage(_message) {
            message.text = _message;
            message.show = true;
        }

        function _hideMessage() {
            message.text = null;
            message.show = false;
        }

        function _hideHardMessage() {
            showHard = false;
            _hideMessage();
        }
    });
