Cycle.controller('AuthCtrl', function ($scope, $http, $location) {
    $scope.authenticated = false;

    $scope.init = function () {
        $http.get('http://localhost:8080/api/users/current')
            .success(function (user) {
                console.log(user);
                if (user.name !== 'anonymousUser') {
                    $scope.authenticated = true;
                    $scope.username = user.username;
                }
            });
    };

    $scope.login = function () {
        $http.post('http://localhost:8080/api/login', {username: $scope.username, password: $scope.password})
            .success(function (result, status, headers) {
                if (status === 200) {
                    $scope.authenticated = true;
                }
                console.log(result);
                console.log(status);
                console.log(headers());
                $location.path('#/');
            });
    };

    $scope.logout = function () {
        $scope.authenticated = false;
    };
});