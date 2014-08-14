
angular.module('pepApp').factory('pepRemoting',

    function ($http,APP_INFO) {

        // Define the functions and properties to reveal.
        var service = {
            post_xApi: post_xApi
        };

        return service;

        function post_xApi(data) {

            var request = $http({
                method: "post",
                url: "http://"+APP_INFO.apiBaseUrl+"/xapi/set",
                data: data
            });

            return request;

        }

    }
);
