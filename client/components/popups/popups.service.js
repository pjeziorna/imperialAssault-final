'use strict';

angular.module('imperialAssaultApp.popups')
    .service('PopupsService', function ($rootScope, $q) {

        let modal = {
            deferred: null,
            params: null
        };

        this.open = (params) => {
            let previousDeferred = modal.deferred;
            modal.deferred = $q.defer();
            modal.params = params;

            // if (previousDeferred && pipeResponse) {
            //     modal.deferred.promise.then(previousDeferred.resolve, previousDeferred.reject);
            // } else if (previousDeferred) {
            //     previousDeferred.reject();
            // }
            $rootScope.$emit('popup.open');
            return modal.deferred.promise;
        };

        this.reject = (reason) => {
            if (!modal.deferred) {
                return;
            }
            modal.deferred.reject(reason);
            modal.deferred = modal.params = null;
            $rootScope.$emit('popup.close');
        };

        this.resolve = (response) => {
            if (!modal.deferred) {
                return;
            }
            modal.deferred.resolve(response);
            modal.deferred = modal.params = null;
            modal.visible = false;
            $rootScope.$emit('popup.close');
        };

        this.params = () => {
            return modal.params || {};
        };

        return {
            open: this.open,
            reject: this.reject,
            resolve: this.resolve,
            params: this.params
        };

    });
