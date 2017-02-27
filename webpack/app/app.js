/// <reference path="../typings/index.d.ts" />

angular.module('dashboard', ['kendo.directives', 'ngAnimate', 'angularSpinners', 'kendo.window']);
require('./directives');
require('./controllers');
require('./components');
//require("style!raw!./myApp.css");
require('./styles.scss');
require('test.html');
if (kendo.support.mobileOS) {
    require.ensure('./test.mobile.html', function() {}, 'mobile');
}