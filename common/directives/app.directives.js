(function() {
    'use strict';

    angular
        .module('app')
        .directive('gridTable', ['$timeout', 'orderByFilter', function($timeout, orderBy) {
            return {
                restrict: 'EA',
                templateUrl: 'common/directives/partials/gridTable.html',
                replace: true,
                scope: {
                    sampleData: "=",
                    columnData: "="
                },
                link: function(scope, iElement, iAttrs) {
                    scope.columns = angular.copy(scope.columnData)
                    scope.sortColumn = 'topic'; // set the default sort type
                    scope.sortReverse = false;

                    scope.sort = function(column) {
                        scope.sortColumn = column;
                        scope.sortReverse = !scope.sortReverse;
                        scope.sampleData = orderBy(scope.sampleData, scope.sortColumn, scope.sortReverse);
                    }

                    scope.save = function(row) {
                        row.isEdit = false;
                        if(row.tempData){
                            delete row.tempData;
                        }
                    }

                    scope.edit = function(row){
                        row.tempData = angular.copy(row);
                        row.isEdit = true;
                    }

                    scope.cancel = function(row, index) {
                        
                        if (row.id) {
                            for(var i in row.tempData){
                                row[i] = row.tempData[i]
                            }
                            delete row.tempData;
                            row.isEdit = false;
                        } else {
                            scope.sampleData.splice(index, 1);
                        }
                        
                    }

                    function init() {

                        for (var i = 0; i < scope.sampleData.length; i++) {
                            scope.sampleData[i].isEdit = false;
                        }
                        for (var i = 0; i < scope.columns.length; i++) {
                            scope.columns[i].position = i;
                        }

                        scope.sampleData = orderBy(scope.sampleData, scope.sortColumn, scope.sortReverse);

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
                                    scope.$apply(function() {});
                                }
                            });
                            $("#sortable").disableSelection();
                        });
                    }

                    init();
                }

            };
        }])

})();