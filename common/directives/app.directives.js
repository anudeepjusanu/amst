(function() {
    'use strict';

    angular
        .module('app')
        .directive('gridTable', ['$timeout', function($timeout) {
            return {
                restrict: 'EA',
                templateUrl: 'common/directives/partials/gridTable.html',
                replace: true,
                link: function(scope, iElement, iAttrs) {
                    scope.sampleData = [];
                    scope.sortColumn = 'type'; // set the default sort type
                    scope.sortReverse = false;
                    var dumpData = [{
                        type: 'POS',
                        extdesc: 'ABC VONS Store 1797 SAN DIEGO CAUS',
                        description: 'POS Transaction VONS Store 1797 SAN DIEGO CAUS',
                        amount: '-4.43',
                        differed: false,
                        date: '2016-02-23',
                        action: 'Edit'
                    }, {
                        type: 'CC',
                        extdesc: 'Amazon.com',
                        description: 'online retailer Amazon.com',
                        amount: '-76.99',
                        differed: true,
                        date: '2016-04-08',
                        action: 'Edit'
                    }, {
                        type: 'POS',
                        extdesc: 'shop #1',
                        description: 'online retailer #1',
                        amount: '-100',
                        differed: false,
                        date: '2016-05-12',
                        action: 'Edit'
                    }, {
                        type: 'DDeb',
                        extdesc: 'shop #2',
                        description: 'retailer #2',
                        amount: '-120',
                        differed: false,
                        date: '2016-06-17',
                        action: 'Edit'
                    }, {
                        type: 'POS',
                        extdesc: 'shop #3',
                        description: 'online retailer #3',
                        amount: '-130',
                        differed: false,
                        date: '2016-08-20',
                        action: 'Edit'
                    }, {
                        type: 'CC',
                        extdesc: 'shop #4',
                        description: 'retailer #4',
                        amount: '-320',
                        differed: true,
                        date: '2016-10-30',
                        action: 'Edit'
                    }, {
                        type: 'POS',
                        extdesc: 'shop #5',
                        description: 'online retailer #5',
                        amount: '-101',
                        differed: false,
                        date: '2016-11-01',
                        action: 'Edit'
                    }];

                    var colObj = dumpData[0];
                    scope.columns = [];
                    var i = 0;
                    for (var key in colObj) {
                        scope.columns.push({
                            "name": key,
                            "position": i++,
                        });
                    }
                    scope.sampleData = angular.copy(dumpData);

                    scope.sort = function(column) {
                        scope.sortColumn = column;
                        scope.sortReverse = !scope.sortReverse;
                    }
                    $timeout(function() {
                        for (var i = 0; i <= scope.columns.length; i++) {
                            $(".resizable" + i).resizable({
                                alsoResize: ".connectedCol" + i
                            });
                            $(".connectedCol" + i).resizable();
                        }
                        $("#sortable").sortable({
                            stop: function(e, ui) {
                                var sortArray = $("#sortable").sortable("toArray");
                                for (var i = 0; i < scope.columns.length; i++) {
                                    scope.columns[i].position = sortArray[i];
                                }
                                scope.$apply(function() {
                                });
                            }
                        });
                        $("#sortable").disableSelection();
                    });
                }

            };
        }])

})();