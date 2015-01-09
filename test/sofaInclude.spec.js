'use strict';

describe('sofa.include', function () {

    var $compile, $rootScope;

    beforeEach(module('sofa.include'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should run tests', function () {
        expect(true).toBe(true);
    });
});
