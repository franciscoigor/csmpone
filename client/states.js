angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.lowscore', {
        views: {
            app: {
                controller: 'app_lowscore',
                templateProvider: function (app) {
                    return app.templateProvider('app.lowscore');
                }
            }
        }
    }).state('app.allsurveys', {
        views: {
            app: {
                controller: 'app_allsurveys',
                templateProvider: function (app) {
                    return app.templateProvider('app.allsurveys');
                }
            }
        }
    }).state('app.survey', {
        views: {
            app: {
                controller: 'app_survey',
                templateProvider: function (app) {
                    return app.templateProvider('app.survey');
                }
            }
        }
    }).state('app.logintest', {
        views: {
            app: {
                controller: 'app_logintest',
                templateProvider: function (app) {
                    return app.templateProvider('app.logintest');
                }
            }
        }
    });
});