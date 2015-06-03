RCycle.controller('HomeController', ['$scope', '$filter', '$rootScope', '$aside','$timeout', function ($scope,$filter,$rootScope, $aside,$timeout) {


    $scope.newComes = 99;


    //
    //Users.query(function(data){
    //	$scope.users = data._embedded.users;
    //});
    //
    $scope.slides = [
        'Apil 6 jd MTP',
        'Phoenix Gain Baby at March',
        'Do not drive after wine'
    ];

    $scope.showDetails = function (s) {
        alert(s);
    }

    /*
     ******************************    Side bar controller     ***********************
     */

    $scope.openAside = function openAside(position) {
        $aside.open({
            placement: position,
            templateUrl: 'partials/quickKeys.html',
            size: 'sm'
        });
    };

    /*
     ******************************    Links controller     ***********************
     */

    $scope.links = [
        {linkName: 'Jdtalkweb Jenkins', link: 'http://ci-1397529242145-243081.slc01.dev.ebayc3.com/job/jdbuild/'},
        {
            linkName: 'JDtalk PRO Deployment',
            link: 'https://cmpaas.vip.ebay.com/dashboard/appservice.jsp?method=overview&appserviceid=/ENVi4cbdwx1dbg5o/jdtalk-app__ENVi4cbdwx1dbg5o'
        },
        {
            linkName: 'JDtalk Dev Deployment',
            link: 'https://cmpaas.vip.ebay.com/dashboard/appservice.jsp?method=overview&appserviceid=/ENVi3kr8osv39drgx/jdtalk-app__ENVi3kr8osv39drgx'
        },
        {
            linkName: 'JDtalk Stg Deployment',
            link: 'https://cmpaas.vip.ebay.com/dashboard/appservice.jsp?method=overview&appserviceid=/ENVf7jokk59vh/jdtalk-app__ENVf7jokk59vh'
        },
        {
            linkName: 'JDtalk Dev BeanConfig',
            link: 'http://phx5qa01c-f68b.stratus.phx.qa.ebay.com:8080/admin/v3console/ViewConfigCategoryXml?id=com.ebay.app.jdtalk.JDTalkConfigureBean'
        },
        {
            linkName: 'JDtalk PRO BeanConfig',
            link: 'http://chd1b02c-3d8a.stratus.phx.ebay.com:8080/admin/v3console/ViewConfigCategoryXml?id=com.ebay.app.jdtalk.JDTalkConfigureBean'
        },
    ];
    /*
     ******************************    Tasks controller     ***********************
     */

//dummy data
    $scope.newsCard = [
        {
            "id": 101,
            "title": "JD Order Cancellation flow",
            "text": "JD Order Cancellation flow in details",
            "target": "all",
            "area": "public",
            "postBy": "Phoenix",
            "createdBy": "yunjiang@ebay.com",
            "createdDate": "2015-02-20",
            "targetDate": "2015-02-28",
            "percentage": 80,
            "severity": "urgent",
            "collectionType": "Task",
            "assignee": "Raj",
            "messageType": "Action",
            "comment": ""
        },
        {
            "id": 102,
            "title": "Products Life Cycle",
            "text": "Products Life Cycle",
            "target": "all",
            "area": "public",
            "postBy": "Phoenix",
            "createdBy": "yunjiang@ebay.com",
            "createdDate": "2015-02-20",
            "targetDate": "2015-02-28",
            "percentage": 75,
            "severity": "low",
            "collectionType": "Task",
            "assignee": "Chen Yan",
            "messageType": "Action",
            "comment": ""
        },
        {
            "id": 103,
            "title": "Tracking Number",
            "text": "Tracking Number",
            "target": "all",
            "area": "public",
            "postBy": "Phoenix",
            "createdBy": "yunjiang@ebay.com",
            "createdDate": "2015-02-20",
            "targetDate": "2015-02-28",
            "percentage": 44,
            "severity": "high",
            "collectionType": "Task",
            "assignee": "Guenter",
            "messageType": "Action",
            "comment": ""
        }, {
            "id": 104,
            "title": "Brand Report",
            "text": "Brand Report",
            "target": "all",
            "area": "public",
            "postBy": "Phoenix",
            "createdBy": "yunjiang@ebay.com",
            "createdDate": "2015-02-20",
            "targetDate": "2015-02-28",
            "percentage": 92,
            "severity": "low",
            "collectionType": "Task",
            "assignee": "Phoenix",
            "messageType": "Action",
            "comment": ""
        }, {
            "id": 105,
            "title": "Attribute Report",
            "text": "Attribute Report",
            "target": "all",
            "area": "public",
            "postBy": "Phoenix",
            "createdBy": "yunjiang@ebay.com",
            "createdDate": "2015-02-20",
            "targetDate": "2015-02-28",
            "percentage": 46,
            "severity": "mid",
            "collectionType": "Task",
            "assignee": "Echo",
            "messageType": "Action",
            "comment": ""
        }];

    $scope.totalItems = $scope.newsCard.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 3;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;

    };

    $scope.pageChanged = function () {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
        $scope.newsCardFiltered = $scope.newsCard.slice(begin, end);

    };


    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        end = begin + $scope.itemsPerPage;
    $scope.newsCardFiltered = $scope.newsCard.slice(begin, end);

    $scope.cardDetails = function (card) {

        //$scope.selectedTask.push(card);
        $scope.taskTitle = card.title;
        $scope.assignee = card.assignee;
        $scope.messageType = card.messageType;
        $scope.createdBy = card.createdBy;
        $scope.targetDate = card.targetDate;
        $scope.percentage = card.percentage;
        $scope.isComplete = card.percentage == 100 ? true : false;
        //$scope.Keyword = $scope.Keyword == "" ? $scope.Keyword = cardName : "";

    };
    //****************
    // Task root scope functions
    //***********
    //$rootScope.taskTitle = card.title;
    //$rootScope.assignee = card.assignee;
    //$rootScope.messageType = card.messageType;
    //$rootScope.createdBy = card.createdBy;
    //$rootScope.targetDate = card.targetDate;
    //$rootScope.percentage = card.percentage;
    //$rootScope.isComplete = card.percentage==100?true:false;

    $scope.ChangeType = function (typeName) {
        $scope.messageType = typeName;
    };

    $scope.setTaskComplete = function () {
        $scope.percentage = 100;
    }


    /*
     ******************************    Post controller     ***********************
     */

    $scope.postType = [
        'Public Post',
        'Private Post',
        'Reminder Post'
    ];

    $scope.postContent = "Welcome to eBay Product Report System! \n ******************* \n Please make sure you have logged in to System! \n";
    $scope.sendString = '';

    $scope.PostRequest = function () {
        console.log();
    };

    $scope.cleanBoard = function () {
        console.log("Cleaned!");
    };

    $scope.send = function (loginInput, postBoardNotifier) {
        postBoardNotifier.notify('information', "Successfully send out the message: " + $scope.sendString);
        $scope.postContent += loginInput + ":\n" + $scope.sendString + "\n";
        $scope.sendString = '';
    }

    // Our server to connect to
    //var server = new ServerChannel('http://127.0.0.1:8002');
    $scope.side = 'left';
    $scope.avatarPic = "../../resources/pictures/NewRibbon.png";
    $scope.checkedPic = "../../resources/pictures/checked.png"
    // Messages, client info & sending
    $scope.messages = [
        //{
        //    title: "Test message:9127422368",
        //    postBy: "Phoenix",
        //    id: 101
        //}
        //{
        //    avatar: avatarPic,
        //    title: "Test message",
        //    postBy: "Johnson",
        //    side: side,
        //    id: 102
        //}
    ];

    $scope.alerts = [
        {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'}
    ];

    $scope.addAlert = function () {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.clearMessage = function(){
      $scope.messages.length = 0;
    };

    $scope.showError = function(){
        $filter('filter')($scope.messages, {status: 'ORDER_FAILED'})
    };

    $scope.showNotif = function (NotiObj) {
        if (NotiObj.avatar != $scope.checkedPic)
            NotiObj.avatar = $scope.checkedPic;
        $scope.alerts.splice(0, 1);
        $scope.alerts.push({type: 'success', msg: NotiObj.title});
        $scope.searchById = NotiObj.title.substring(NotiObj.title.indexOf(':')+1);
        $scope.$broadcast('notiSearch');
    };

    $scope.deleteNoti = function(me){
        var i = $scope.messages.indexOf(me);
        if(i != -1) {
            $scope.messages.splice(i, 1);
        }
    };


    $scope.ThemeChange = function(theme){

        switch(theme) {
            case "orange":
                $rootScope.myTheme = "zt-backgroundChangeToOrange";
                break;
            case "green":
                $rootScope.myTheme = "zt-backgroundChangeToGreen";
                break;
            case "purple":
                $rootScope.myTheme = "zt-backgroundChangeToPurple";
                break;
            case "lake":
                $rootScope.myTheme = "zt-backgroundChangeToLake";
                break;
            case "blue":
                $rootScope.myTheme = "zt-backgroundChangeToBlue";
                break;
            default:
                $rootScope.myTheme = "";
        }

    };


    $scope.itemTops = [];
    //
    //// Occurs when we receive chat messages
    //var ngChatMessagesInform = function (p) {
    //
    //
    //    // flip the side
    //    //side = side == 'left' ? 'right' : 'left';
    //};
    //
    //// Once connected, we need to join the chat
    //server.onConnect(function () {
    //    server.joinNgChat();
    //});

    /************************************************* Animation control  ********************************************/

        // grid(0), list (1)
    $scope.layoutMode = 0;
    $scope.list = [];
    $scope.isShow = true;
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


    $scope.switchGridMode = function () {
        $scope.layoutMode = 0;
    }

    $scope.switchListMode = function () {
        $scope.layoutMode = 1;
    }

    $scope.toggle = function () {
        $scope.isShow = !$scope.isShow;
    }

}]);
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};