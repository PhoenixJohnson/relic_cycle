function fullpageChange(pageName){
    switch(pageName){
        case "friends":
            $.fn.fullpage.moveTo('cyclePage', 0);
            break;
        case "infoStation":
            $.fn.fullpage.moveTo('cyclePage', 1);
            break;
        default :
            $.fn.fullpage.moveTo('cyclePage', 0);
    }
}


Cycle.controller('HomeController', ['$scope', '$filter', '$rootScope','$timeout', function ($scope,$filter,$rootScope) {



    $scope.widgetPage = "../sections/Friends.html";

    $scope.pageName = "朋友圈";
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
    $scope.notis=[
        {
            picture:"",
            title:"A新闻中友人评论了你",
            type:"新闻",
            publishTime:"5 秒钟前",
            content:"和谐就是力量，和谐就是社会的发展动力。"
        },
        {
            picture:"",
            title:"信息站B发表了新的分享",
            type:"信息站",
            publishTime:"5 秒钟前",
            content:"和谐就是力量，和谐就是社会的发展动力。"
        }
        ,
        {
            picture:"",
            title:"你的朋友圈开始躁动了",
            type:"朋友圈",
            publishTime:"5 秒钟前",
            content:"和谐就是力量，和谐就是社会的发展动力。"
        }
        ,
        {
            picture:"",
            title:"归属圈B有人更新了新的动态",
            type:"归属圈",
            publishTime:"5 秒钟前",
            content:"和谐就是力量，和谐就是社会的发展动力。"
        }
    ];

    $scope.msgs=[
        {
            picture:"",
            title:"虚假信息，测试使用",
            shortContent:"你号你好你浩！阿里款到即发；流口水的减肥；阿里看的就是发斯蒂芬；垃圾可是对方； 阿斯蒂芬；进口拉丝的；法律框架阿斯顿；理发速度发来；卡就是的；分了就卡死地方",
            publishTime:"2 小时前",
            from:"Melania"

        },
        {
            picture:"",
            title:"你问我时谁，我问你是谁",
            shortContent:"你号你好你浩！",
            publishTime:"一天 2 小时前",
            from:"Melania"

        },
        {
            picture:"",
            title:"虚假信息，不要看太多哦",
            shortContent:"你号你好你浩！",
            publishTime:"2 小时前",
            from:"Melania"

        }
    ];

    $scope.records=[
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

    //$scope.changeWidgetPage = function(pageName){
    //    switch(pageName){
    //        case "infoStation":
    //            $scope.widgetPage="../sections/InfoStation.html";$scope.pageName="信息站";
    //            break;
    //        case "friends":
    //            $scope.widgetPage = "../sections/Friends.html";$scope.pageName = "朋友圈";
    //            break;
    //        default:
    //            $scope.widgetPage = "../sections/Friends.html";$scope.pageName = "朋友圈";
    //    }
    //
    //};

    $scope.pageControl = function(pageName){
        switch(pageName){
            case "infoStation":
                $scope.pageName="信息站";
                break;
            case "friends":
                $scope.pageName = "朋友圈";
                break;
            case "weiNews":
                $scope.pageName = "微新闻";
                break;
            default:
                $scope.pageName = "";
        }
        //fullpageChange(pageName);
    };

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