describe("Thermostat", function() {

  'use strict';

  var testThermostat = new Thermostat('model00')
  var spyThermostat

  // spyThermostat = {
  //     _temperature: function() {
  //       return 20
  //     },
  //     displayTemp: function() {
  //       return ('Current temperature: '+this._temperature())
  //     }
  //   }

  describe("defaultTemp", function() {

    it("Should default to 20", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20')
    });

  });

  describe("increaseTemp", function() {

    it("Should be able to increase the temperatue", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20');
      testThermostat._upTemp(1);
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 21');
    });

    it("Should be able to increase the temperatue by a chosen amount", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20');
      testThermostat._upTemp(1);
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 21');
    });

  });


});
