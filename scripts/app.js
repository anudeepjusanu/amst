(function() {
    'use strict';

    angular
        .module('app', ['ngSanitize', 'ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            });
    }

    function run($rootScope, $window) {
        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }
})();