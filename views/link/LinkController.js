(function() {
    angular.module('controllers')
        .controller('LinkController', [
            '$scope',
            '$rootScope',
            function($scope, $rootScope) {
                console.log('it works');
            }
        ]);
})();
