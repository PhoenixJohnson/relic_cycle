/**
 * Created by phoenix on 14/11/7.
 */
var hostName = window.location.host;
var port = window.location.port;
console.log("hostname:" + hostName + "    portnumber   " + port);
Cycle.constant('conf',
    {

        RESTAPIBASEURL: 'http://' + hostName + '/jdtalkweb/rest/',
        BRANDSHIT_PAGE_SIZE: 10,
        PROJECT_NAME: "Relic",
        CUSTOMIZEFIELD:'CustomizeField'

    }
);
