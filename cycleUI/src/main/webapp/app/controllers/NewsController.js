Cycle.controller('NewsController', function ($scope,Lightbox) {


    $scope.NewsList = [];
    $scope.news=[];

    for (var i = 1; i <= 24; i++) {
        $scope.NewsList.push({
            newsId:"001"+i,
            publishTime:"2015/5/25 22:58",
            orgPic: "../img/photo-gallery/superbox-full-"+i+".jpg",
            thumbPic: "../img/photo-gallery/superbox-thumb-"+i+".jpg",
            title: "微新闻 NO."+i,
            shortDescription:"新闻简要内容"
        });
        $scope.news.push({
            url:"../img/photo-gallery/superbox-full-"+i+".jpg",
            title: "微新闻 NO."+i,
            publishTime:"2015/5/25 22:58",
            shortDescription:"新闻简要内容"
        })
    }

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.news, index);
    };
});
