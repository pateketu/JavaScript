'use strict';
require('myServices/github-status.service');
DashboardController.$inject = ['GithubStatusService', '$http'];

function DashboardController(gh) {
    var _this = this;

    _this.github = '';

    gh.getStatus().success(function(status) {
        _this.github = status;
    });
}

module.exports = DashboardController;