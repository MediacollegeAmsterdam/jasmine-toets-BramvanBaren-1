describe('Testje 1', function() {
    it('should have the title Verbetringen', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});
 
describe('Testje 2', function () {
    it('het voorbeeld moest het voorbeeld worden', function () {
        expect('voorbeeld').toBe('voorbeeld');
    });
    it('Het getal moet hetzelfde zijn als in het js bestand', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});
 
describe('Testje 3', function () {
    it('de describe moet een eigen functie zijn los van test 4', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});
 
describe('Testje 4', function () {
    it('de describe moet een eigen functie zijn los van test 3', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});
