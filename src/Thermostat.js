var Thermostat = function(make) {
  this.make = make
  this._powerSavingMode = true
  this._minTemp = 10
  this._maxTemp = (this._powerSavingMode ? 25 : 32)
  this._temperature = 20
  this._altTemp = function(increment) {
    if ((this._temperature + increment) < this._minTemp) {
      throw(new Error("This change breaches the range of this thermostat"))
    }
    this._temperature += increment
  };
};

Thermostat.prototype.displayTemp = function() {
  return ('Current temperature: '+this._temperature+'°C');
};

Thermostat.prototype.displayPowerMode = function() {
  var state = (this._powerSavingMode ? 'ON' : 'OFF')
  // if(this._powerSavingMode) {
  //   var state = 'ON'
  // } else {
  //   var state = 'OFF'
  // }
  return ('Power-Save-Mode: '+state);
};

Thermostat.prototype.pressUpTemp = function(increment) {
  if (increment === undefined) {
    increment = 1
  };
  this._altTemp(increment);
};

Thermostat.prototype.pressDownTemp = function(increment) {
  if (increment === undefined) {
    increment = 1
  };
  this._altTemp(increment*(-1));
};
