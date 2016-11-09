/// <reference path="../typings/index.d.ts" />
var angular = require('angular');
angular.module('dashboard', ['ngAnimate']);
require('./directives');
require('./controllers');
//require("style!raw!./myApp.css");
require('./styles.scss');
require('test.html');