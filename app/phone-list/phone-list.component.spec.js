describe('phoneList', function () {
    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('phoneList'));

    describe('PhoneListController', function () {
        var $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
            ctrl = $componentController('phoneList');
        }))

        it('should create a `phones` model with 2 phones', function () {
            expect(ctrl.phones).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        })
    
        it('should set a default value for the `orderProp` model', function () {
            expect(ctrl.orderProp).toBe('age');
        })
    })

})
