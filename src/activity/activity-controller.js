angular.module('pepApp').controller('pepActivity', function(pepRemoting, pepMockData) {
    var vm = this;
    function activate() {

        var statement = pepMockData.getActivityCompletedStatement();

        pepRemoting.post_xApi(statement).then(handleSuccess, handleError);

        function handleSuccess() {
            vm.disabled = true;
        }

        function handleError(e) {
            //console.log("Finish Button activate rejected");
        }
    }

    // All Views
    vm.activate = activate;

    // Desktop/Tablet View
    vm.desktop_title = 'Desktop View';
    vm.finishBtn = 'Finish Activity';

    // Phone View
    vm.phone_title = 'Phone View';
    vm.continueBtn = 'Continue';
});