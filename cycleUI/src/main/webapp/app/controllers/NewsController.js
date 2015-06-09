Cycle.controller('NewsController', ['$scope', '$filter', '$rootScope', '$timeout', function ($scope, $filter, $rootScope) {


    $scope.NewsList = [];

    for (var i = 1; i <= 24; i++) {
        $scope.NewsList.push({
            newsId:"001"+i,
            orgPic: "../img/photo-gallery/superbox-full-"+i+".jpg",
            thumbPic: "../img/photo-gallery/superbox-thumb-"+i+".jpg",
            title: "大新闻 NO."+i,
            shortDescription:"新闻简要内容"
        });
    }
}]);
