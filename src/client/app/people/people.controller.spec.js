/* jshint -W117, -W030 */

describe.only('PeopleController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.people');
        bard.inject('$controller', '$log', '$q', '$rootScope');

        var ds = {
            getPeople: function () {
                return $q.when(people);
            }
        };
        controller = $controller('PeopleController', {
            dataservice: ds
        });
    });

    it('should exist', function() {
        expect(controller).to.exist;
    });

    it('should have people empty people array before activation', function () {
        expect(controller.people).to.exist;
    });

    
    it('should have people after activation', function() {
        $rootScope.$apply();
        expect(controller.people).to.have.length.above(0);
    });
        
});