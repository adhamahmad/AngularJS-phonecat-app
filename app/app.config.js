angular
    .module('phonecatApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function config($stateProvider, $urlRouterProvider) {
            // Default fallback route
            $urlRouterProvider.otherwise('/phones');

            $stateProvider
                .state('phones', {
                    url: '/phones',
                    template: '<phone-list></phone-list>'
                })
                .state('phoneDetail', {
                    url: '/phones/:phoneId',
                    template: '<phone-detail></phone-detail>'
                });

        }
    ])