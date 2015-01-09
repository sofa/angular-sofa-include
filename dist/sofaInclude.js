/**
 * angular-sofa-include - v0.1.0 - Fri Jan 09 2015 17:03:48 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa.include', [])

.directive('sofaInclude', ["$http", "$templateCache", "$compile", function ($http, $templateCache, $compile) {

    'use strict';

    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var templateUrl = scope.$eval(attributes.ccInclude);
            $http
                .get(templateUrl, {cache: $templateCache})
                .success(function (tplContent) {
                    element.replaceWith($compile(tplContent.trim())(scope));
                });
        }
    };
}]);
}(angular));
