(function() {
    'use strict';

    angular
        .module('app')
        .directive('gridTable', ['$timeout', function($timeout) {
            return {
                restrict: 'EA',
                templateUrl: 'common/directives/partials/gridTable.html',
                link: function(scope, iElement, iAttrs) {
                    scope.sampleData = [];
                    scope.sortType = 'type'; // set the default sort type
                    scope.sortReverse = false;
                    var dumpData = [{
                        type: 'POS',
                        extdesc: 'ABC VONS Store 1797 SAN DIEGO CAUS',
                        description: 'POS Transaction VONS Store 1797 SAN DIEGO CAUS',
                        amount: '-4.43',
                        differed: false,
                        date: '2016-02-23'
                    }, {
                        type: 'CC',
                        extdesc: 'Amazon.com',
                        description: 'online retailer Amazon.com',
                        amount: '-76.99',
                        differed: true,
                        date: '2016-04-08'
                    }, {
                        type: 'POS',
                        extdesc: 'shop #1',
                        description: 'online retailer #1',
                        amount: '-100',
                        differed: false,
                        date: '2016-05-12'
                    }, {
                        type: 'DDeb',
                        extdesc: 'shop #2',
                        description: 'retailer #2',
                        amount: '-120',
                        differed: false,
                        date: '2016-06-17'
                    }, {
                        type: 'POS',
                        extdesc: 'shop #3',
                        description: 'online retailer #3',
                        amount: '-130',
                        differed: false,
                        date: '2016-08-20'
                    }, {
                        type: 'CC',
                        extdesc: 'shop #4',
                        description: 'retailer #4',
                        amount: '-320',
                        differed: true,
                        date: '2016-10-30'
                    }, {
                        type: 'POS',
                        extdesc: 'shop #5',
                        description: 'online retailer #5',
                        amount: '-101',
                        differed: false,
                        date: '2016-11-01'
                    }];

                    var colObj = dumpData[0];
                    scope.columns = [];
                    var i = 1;
                    for (var key in colObj) {
                        scope.columns.push({
                            "name": key,
                            "order": i++
                        });
                    }
                    //scope.sampleData = dumpData;

                    for (var i = 0; dumpData.length < 10; i++) {
                      dumpData.position = i;
                      scope.sampleData.push(dumpData);  
                    }

                    scope.sort = function(column) {
                        scope.sortType = column;
                        scope.sortReverse = !scope.sortReverse;
                    }
                    $timeout(function() {
                        for (var i = 0; i <= scope.columns.length; i++) {
                            $(".resizable" + i).resizable({
                                alsoResize: ".also" + i
                            });
                            $(".also" + i).resizable();
                        }
                        $("#sortable").sortable();
                        $("#sortable").disableSelection();
                    });
                }

            };
        }])

})();