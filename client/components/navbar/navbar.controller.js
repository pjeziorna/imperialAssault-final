'use strict';

class NavbarController {
    //end-non-standard

    //start-non-standard
    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.isMenuOpen = false;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}

angular.module('imperialAssaultApp')
.controller('NavbarController', NavbarController);
