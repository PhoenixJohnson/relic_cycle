/**
 * Created by phoenix on 14/11/7.
 */
var hostName = window.location.host;
var port = window.location.port;
console.log("hostname:" + hostName + "    portnumber   " + port);
RCycle.constant('PRMconf',
    {
        RESTAPIBASEURL: 'http://' + hostName + '/cycleService/rest/',
        BRANDSHIT_PAGE_SIZE: 10,
        PROJECT_NAME: "exMessage Cycle",
        CUSTOMIZEFIELD:'CustomizeField'

    }
);
