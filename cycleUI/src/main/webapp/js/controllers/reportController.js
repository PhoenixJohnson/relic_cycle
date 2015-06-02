PRM.controller('reportCtrl', ['$scope',function($scope){

    $scope.reportNames = [
        
        'Brand Hit Rate',
        'Category Hit Rate',
        'Attributes Hit Rate'

    ];
    $scope.currentReportName = "brandsHitRateReport";

    $scope.getUrl = function () {
        return 'reports/' + $scope.currentReportName + '.html';
    };

    $scope.changeReport = function (rpName) {

        console.log(rpName);
        switch (rpName) {
            case ("Category Hit Rate"):

                 $scope.currentReportName = "categoryHitRateReport";
                break;

            case ("Brand Hit Rate"):

                $scope.currentReportName = "brandsHitRateReport";
                break;

            case ("Attributes Hit Rate"):

                $scope.currentReportName = "attributesHitRateReport";
                break;

            default :
                $scope.currentReportName = "brandsHitRateReport";

        }
    };
    
    
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Team WorkLoad Reports',
            subReports:[{
                title:'Person WorkLoad'
            },{
                title:'Task report'
            },{
                title:'Man day report'
            }]
        },  
        {
            title: 'JD-eBay talk Reports',
            subReports:[{
                title:'Brand Hit Rate'
            },{
                title:'Attributes Hit Rate'
            },{
                title:'Category Hit Rate'
            }
            ]
        }
        ];
//    $scope._BrandHit_Data =$.parseJSON(BrandsHit.data);
    //
	//$scope.searchReport=function(){
	//	Report.query({userId:$scope.userId,date:$scope.date},function(e){
	//		$scope.reportData=e.data.Report;
	//	});
	//}
}]);
