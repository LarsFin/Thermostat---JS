describe("Thermostat", function() {

  'use strict';

  var testThermostat
  var spyThermostat

  // spyThermostat = {
  //     _temperature: function() {
  //       return 20
  //     },
  //     displayTemp: function() {
  //       return ('Current temperature: '+this._temperature())
  //     }
  //   }

  beforeEach(function() {
    testThermostat = new Thermostat('model00');
  });

  describe("defaultTemp", function() {

    it("Should default to 20°C", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20°C')
    });

  });

  describe("increaseTemp", function() {

    it("Should be able to increase the temperatue", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20°C');
      testThermostat.pressUpTemp(1);
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 21°C');
    });

    it("Should be able to increase the temperatue by a chosen amount", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20°C');
      testThermostat.pressUpTemp(3);
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 23°C');
    });

  });

  describe("decreaseTemp", function() {

    it("Should be able to decrease the temperatue", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20°C');
      testThermostat.pressDownTemp(1);
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 19°C');
    });

    it("Should be able to decrease the temperatue by a chosen amount", function() {
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 20°C');
      testThermostat.pressDownTemp(3);
      expect(testThermostat.displayTemp()).toEqual('Current temperature: 17°C');
    });

  });

  describe("minimumTemp", function() {

    it("The minimum temperature should be 10°C", function() {
      expect(testThermostat._minTemp).toEqual(10);
    });

    it("Should give an error when trying to decrease the temperature below 10°C", function() {
      expect(function() {testThermostat.pressDownTemp(100)}).toThrow(new Error("This change breaches the range of this thermostat"));
    });

  });

  describe("maxTemp", function() {

    it("Max temperature should be 25°C when on power saving mode", function() {
      expect(testThermostat._maxTemp).toEqual(25);
    });

  });

  describe("powerSavingMode", function() {

    it("Power saving mode is on by default", function() {
      expect(testThermostat.displayPowerMode()).toEqual('Power-Save-Mode: ON');
    });

  });


});
