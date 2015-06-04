Cycle.controller('HomeController', ['$scope', '$filter', '$rootScope','$timeout', function ($scope,$filter,$rootScope) {




    /*
     ******************************    Side bar controller     ***********************
     */

    /*
     ******************************    Links controller     ***********************
     */

    /*
     ******************************    Tasks controller     ***********************
     */

//dummy data
    $scope.messages=[
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:true,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:true,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:true,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:true,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        },
        {
            checked:false,
            picture:"../img/profile-pics/2.jpg",
            messageTitle:"头条都是假新闻",
            messageContent:"测试数据，请务必相信这个是假的",
            createdDate:"2017-9-5",
            messageType:"新闻",
            comments:Math.random()*350,
            copyRight:"是"

        }

    ];


    $scope.ThemeChange = function(theme){

        switch(theme) {
            case "violate":
                $rootScope.myTheme = "skin-blur-violate";
                break;
            case "lights":
                $rootScope.myTheme = "skin-blur-lights";
                break;
            case "city":
                $rootScope.myTheme = "skin-blur-city";
                break;
            case "greenish":
                $rootScope.myTheme = "skin-blur-greenish";
                break;
            case "night":
                $rootScope.myTheme = "skin-blur-night";
                break;
            case "sunny":
                $rootScope.myTheme = "skin-blur-sunny";
                break;
            case "blue":
                $rootScope.myTheme = "skin-blur-blue";
                break;
            case "chrome":
                $rootScope.myTheme = "skin-blur-chrome";
                break;
            case "ocean":
                $rootScope.myTheme = "skin-blur-ocean";
                break;
            case "sunset":
                $rootScope.myTheme = "skin-blur-sunset";
                break;
            case "yellow":
                $rootScope.myTheme = "skin-blur-yellow";
                break;
            case "kiwi":
                $rootScope.myTheme = "skin-blur-kiwi";
                break;
            case "nexus":
                $rootScope.myTheme = "skin-blur-nexus";
                break;
            default:
                $rootScope.myTheme = "skin-blur-city";
        }

    };


    $scope.animations = ["toggle",
        "spin-toggle",
        "scale-fade",
        "scale-fade-in",
        "bouncy-scale-in",
        "flip-in",
        "slide-left",
        "slide-right",
        "slide-top",
        "slide-down",
        "bouncy-slide-left",
        "bouncy-slide-right",
        "bouncy-slide-top",
        "bouncy-slide-down",
        "rotate-in"];
    $scope.animation = "scale-fade";


}]);
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};