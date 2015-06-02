/**
 * Created by phoenix on 14/11/7.
 */
var hostName = window.location.host;
var port = window.location.port;
console.log("hostname:" + hostName + "    portnumber   " + port);
PRM.constant('PRMconf',
    {
        //RESTAPIBASEURL: 'http://localhost:7879/phoenix/rest/'
        //RESTAPIBASEURL: 'http://localhost:8066/jdtalkweb/rest/',
        //RESTAPIBASEURL: 'http://chd1b02c-3d8a.stratus.phx.ebay.com:8080'+'/jdtalkweb/rest/'
        RESTAPIBASEURL: 'http://' + hostName + '/cycleService/rest/',
        BRANDSHIT_PAGE_SIZE: 10,
        PROJECT_NAME: "JDTalk",
        GET_FORMATED_DATE_TODAY: function () {
            var date = new Date();
            var result = parseInt(date.getTime());
            return result;
        },
        CUSTOMIZEFIELD:'CustomizeField'

    }
);
