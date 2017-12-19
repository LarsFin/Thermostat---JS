var Thermostat = function(make) {
  this.make = make
  this._temperature = 20
  this._upTemp = function(increment) {
    this._temperature += increment 
  };
};

Thermostat.prototype.displayTemp = function() {
  return ('Current temperature: '+this._temperature)
};

Thermostat.prototype.pressUpTemp = function(increment) {
  if (increment === undefined) {
    increment = 1
  };
  this._upTemp(increment)
};
