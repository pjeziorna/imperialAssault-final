'use strict';

class PopupController {
    constructor ($rootScope, PopupsService) {
        this.$rootScope = $rootScope;
        this.popupsService = PopupsService;
        this.message = this.popupsService.params().message || 'Are you sure?';
        this.cancelBtnText = this.popupsService.params().cancelBtn || 'Cancel';
        this.acceptBtnText = this.popupsService.params().acceptBtn || 'OK';
        this.show = false;
        this.close = this.popupsService.reject;
        this.$rootScope.$on('popup.open', () => {
            this.updateViewTexts(this.popupsService.params());
            this.show = true;
        });
        this.$rootScope.$on('popup.close', () => {
            this.updateViewTexts(this.popupsService.params());
            this.show = false;
        });
    }

    confirm () {
        this.popupsService.resolve('true');
    }

    updateViewTexts (params) {
        this.message = params.message || 'Are you sure?';
        this.cancelBtnText = params.cancelBtn || 'Cancel';
        this.acceptBtnText = params.acceptBtn || 'OK';
    }
}

angular.module('imperialAssaultApp.popups')
.controller('PopupController', PopupController);
