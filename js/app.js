'use strict';
(function() {

    // load modules
    angular.module('demo', ['ui.router', 'controllers', 'services', 'filters'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/index');

            $stateProvider

                .state('index', {
                    url: '/index',
                    templateUrl: 'views/dash/dash.html'
                })

                .state('link', {
                    url: '/link',
                    templateUrl: 'views/link/link.html',
                    controller: 'LinkController'
                });
        });

    // angular bootstrap
    angular.bootstrap(document, ['demo']);

})();
