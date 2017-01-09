(function() {
    'use strict';
    var grid = {
        // template: '<button ng-click="$ctrl.startIt()">Show It</button></br/><button ng-click="$ctrl.stopIt()">Stop It</button> <div kendo-grid k-data-source="$ctrl.gridData" k-columns="$ctrl.gridColumns" k-selectable="true" k-on-change="$ctrl.onChange(data)"></div>',
        template: '<button ng-click="$ctrl.show()">Show Pop-up</button>',
        controller: SearchResultsGridController,
        bindings: {
            pageData: '=',
        }
    };


    SearchResultsGridController.$inject = ['spinnerService', '$kWindow'];

    function SearchResultsGridController(spinnerService, $kWindow) {
        var ctrl = this;

        ctrl.gridData = new kendo.data.ObservableArray([
            { artist: 'Pink Floyd', track: 'The dark side of the Moon' },
            { artist: 'The Beatles', track: 'I\'ve just seen a face' },
            { artist: 'Queen', track: 'Innuendo' }
        ]);
        ctrl.gridColumns = [
            { field: 'artist', title: 'Artist' },
            { field: 'track', title: 'Track' }
        ];
        ctrl.update = function() {
            ctrl.gridData[0].set('track', 'Hey you');
        };
        ctrl.onChange = function(data) {
            ctrl.selected = data;
        };

        ctrl.stopIt = function() {
            spinnerService.hide('testSpinner')
        }

        ctrl.startIt = function() {
            spinnerService.show('testSpinner')
        }

        ctrl.show = function() {
            $kWindow.open({
                options: {
                    modal: true,
                    title: 'Sample win',
                    resizable: true,
                    width: 400,
                    visible: false,
                    close: function(e) {
                        alert(e);
                    }
                },
                templateUrl: 'app/components/modal.html',
                // controller: 'modalController'

            });

        }
    }

    module.exports = grid;

})();