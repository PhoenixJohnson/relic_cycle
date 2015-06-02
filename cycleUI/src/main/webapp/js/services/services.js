'use strict';
//simple stub that could use a lot of work...
PRM.factory('RESTService',
    function ($http, $rootScope) {

        return {
            get: function (url, callback) {
                return $http({method: 'GET', url: url}).
                    success(function (data, status, headers, config) {
                        callback(data);
                        //console.log(data.json);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("failed to retrieve data");
                    });
            }
        };
    }
);


//simple auth service that can use a lot of work... 
PRM.factory('AuthService',
    function () {
        var currentUser = null;
        var authorized = false;

        // initMaybe it wasn't meant to work for mpm?ial state says we haven't logged in or out yet...
        // this tells us we are in public browsing
        var initialState = true;

        return {
            initialState: function () {
                return initialState;
            },
            login: function (name, password) {
                currentUser = name;
                authorized = true;
                //console.log("Logged in as " + name);
                initialState = false;
            },
            logout: function () {
                currentUser = null;
                authorized = false;
            },
            isLoggedIn: function () {
                return authorized;
            },
            currentUser: function () {
                return currentUser;
            },
            authorized: function () {
                return authorized;
            }
        };
    }
);

//user check
//PRM.factory('Users', [ '$resource','PRMconf', function($resource,config) {
//	return $resource(config.RESTAPIBASEURL+'user', {}, {
//		'query' : {
//			method : 'GET',
//			isArray : false,
//			cache : false
//		},
//		'update' : {}
//	});
//} ]);


//Report
PRM.factory('JDData', ['$resource', 'PRMconf', function ($resource, config) {
    return $resource('', {}, {
        'query': {
            url: config.RESTAPIBASEURL + 'report/jddatarate',
            method: 'POST',
            //params:{
            //    filter:'@filter'
            //},
            //transformResponse: function (data) {return data},
            isArray: false,
            cache: false
        }
    });
}]);

PRM.factory('GetItem', ['$resource', 'PRMconf', function ($resource, config) {
    return $resource('', {}, {
        'query': {
            url: config.RESTAPIBASEURL + 'report/getItem',
            method: 'POST',
            //params:{
            //    filter:'@filter'
            //},
            //transformResponse: function (data) {return data},
            isArray: false,
            cache: false
        }
    });
}]);


PRM.factory('AuthInterceptor', ['$q', function ($q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            // insert code to populate your request header for instance
            return config;
        },
        response: function (response) {
            if (response.status === 403 || response.status === 401) {
                // insert code to redirect to custom unauthorized page
            }
            return response || $q.when(response);
        }
    };
}]);

PRM.factory('OrderDetails', ['$resource', 'PRMOrderConf', function ($resource, config) {
    return {
        get: function (requestForOrderSearch) {
            return $resource('', {}, {
                'query': {
                    url: config.RESTAPIBASEURL + requestForOrderSearch,
                    method: 'GET',

                    isArray: true,
                    cache: false
                }
            });
        }
    };

}]);


PRM.factory('GetXSD', ['$resource', 'PRMconf', function ($resource, config) {
    return {
        get: function (fileName) {
            console.log(config.RESTAPIBASEURL + 'info/xsdMapping/' + fileName)
            return $resource('', {}, {
                'query': {
                    url: config.RESTAPIBASEURL + 'info/xsdMapping/' + fileName,
                    method: 'GET',
                    isArray: false,
                    cache: false
                }
            })
        }
    }

}])


PRM.factory('XMLConverter', ['PRMconf', function (config) {
    var _appendChildren = function (parent, children) {
        for (var i = 0; i < children.length; i++)
            parent.appendChild(children[i]);
    };
    var _loadXMLString = function (str) {
        var xmlDoc;
        if (window.DOMParser) {
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(str, "text/xml");
        }
        else // code for IE
        {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(str);
        }
        return xmlDoc;
    };
    var _buildElement = function (xmlDoc, tag, value, attributes) {
        var newel = xmlDoc.createElement(tag);
        if (!(value == '' || value == undefined))
            newel.appendChild(xmlDoc.createTextNode(value));
        if (attributes != undefined)
            for (var i = 0; i < attributes.length; i++)
                newel.setAttribute(attributes[i].name, attributes[i].value);
        return newel;
    };
    var _buildElements = function (xmlDoc, elements) {
        var xmlElements = [];
        var element = null;
        var elementsArray = null;
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                element = _buildElement(xmlDoc, elements[i].tag, elements[i].value, elements[i].attributes);
                if (elements[i].elements != null) {
                    elementsArray = _buildElements(xmlDoc, elements[i].elements);
                    if (elementsArray != null)
                        _appendChildren(element, elementsArray);
                }
                xmlElements.push(element);
            }
        }
        return xmlElements;
    };
    var _buildXML = function (xmlInfoObj) {
        var xmlDoc, rootEle;
        if (xmlInfoObj.root == undefined) {
            xmlDoc = _loadXMLString('');
            rootEle = xmlDoc;
        } else {
            xmlDoc = _loadXMLString(xmlInfoObj.root);
            rootEle = xmlDoc.getElementsByTagName(xmlInfoObj.rootTag)[0];
        }
        var elements = _buildElements(xmlDoc, xmlInfoObj.elements);
        if (elements != null)
            _appendChildren(rootEle, elements);
        return xmlDoc;
    }
    return {
        buildXML: function (xmlInfoObj) {
            return _buildXML(xmlInfoObj);
        }
    }
}])

PRM.factory("Util",['PRMconf','GetXSD',function(config,GetXSD){
    return{
        downloadFile:function(filename,text){
            var pom = document.createElement('a');
            pom.setAttribute('href', 'data:application/xhtml+xml;charset=utf-8,' + encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?>\n' + text));
            pom.setAttribute('download', filename);

            if (document.createEvent) {
                var event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                pom.dispatchEvent(event);
            }
            else {
                pom.click();
            }
        },
        xmlToString: function (xmlDocument) {
            var serialized;
            try {
                var serializer = new XMLSerializer();
                serialized = serializer.serializeToString(xmlDocument);
            } catch (e) {
                serialized = xmlDocument.xml;
            }
            return serialized;
        },
        convertToCamel:function(filter,str){
            var tmp = str.split(filter);
            var camel = tmp[0];
            for (var i = 1; i < tmp.length; i++) {
                var upperCase = tmp[i].charAt(0).toUpperCase();
                camel += upperCase + tmp[i].slice(1);
            }
            return camel;
        },
        getFile:function (fileName, callback) {
            GetXSD.get(fileName).query({}, (function (response) {
                callback(response);
            }))
        },
        resolveXML:function(obj){
            var elementList = [];

            function recurse(obj, parent) {
                parent += obj.name;
                if (obj.children == null || obj.list) {
                    elementList.push({name: parent, isList: obj.list, type: obj.type});
                }
                else {
                    for (var i = 0; i < obj.children.length; i++)
                        recurse(obj.children[i], parent+'.');
                }
            }
            recurse(obj, '');
            return elementList;
        },
        isContainWithinArray:function (array, spec) {
            for (var i = 0; i < array.length; i++)
                if (array[i] == spec)
                    return true;
            return false;
        }

    }

}])