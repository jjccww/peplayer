angular.module('templates-app', ['activity/activity.tpl.html', 'home/home.tpl.html']);

angular.module("activity/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("activity/activity.tpl.html",
    "<div class=\"activity-container\">\n" +
    "	<img src=\"assets/playersectionlist.jpg\">\n" +
    "	<img src=\"assets/videoplayer.jpg\">\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "\n" +
    "<div>\n" +
    "  <h1>PE Player</h1>\n" +
    "\n" +
    "  <div ui-view></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
