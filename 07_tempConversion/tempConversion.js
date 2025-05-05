const convertToCelsius = function(temperatureFahrenheit) {
  temperatureCelsius = (temperatureFahrenheit - 32.0) * (5.0 / 9.0);
  return parseFloat(temperatureCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperatureCelsius) {
  temperatureFahrenheit = temperatureCelsius * (9.0 / 5.0) + 32.0;
  return parseFloat(temperatureFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
