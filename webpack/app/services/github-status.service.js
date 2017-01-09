'use strict';

angular.module('dashboard').service('GithubStatusService', GithubStatusService);

GithubStatusService.$inject = ['$http'];

function GithubStatusService($http) {
    var _this = this;
    _this.fubar = function fubar(myParam) {

    };
    _this.getStatus = function getStatus() {
        return $http({
            method: 'jsonp',
            url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
            transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
                return (value.status === 'good');
            })
        });
    }
}

function appendTransform(defaults, transform) {
    defaults = angular.isArray(defaults) ? defaults : [defaults];
    return defaults.concat(transform);
}

module.exports = GithubStatusService;