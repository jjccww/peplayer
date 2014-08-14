

angular.module('pepApp').factory('pepMockData',

        function factory(APP_INFO) {

            var service = {

                getActivityCompletedStatement: function() {

                    return {

                        "actor": {
                            "account": {
                                "homePage": "http://devblt.globalenglish.com/",
                                "name": APP_INFO.userId + ""
                            }
                        },
                        "verb": {
                            "id": "http://adlnet.gov/expapi/verbs/completed"
                        },
                        "object": {
                            "id": APP_INFO.activityId
                        }

                    };
                }
            };

            return service;
        }
);
