const formatConvertion = (temp, convertion) => console.log(convertion(temp, convertion))

const celsiusToFahrenheit = (temp) => `${temp}°C is ${((temp *(9/5)) + 32).toFixed(2)}°F`
const fahrenheitToCelsius = (temp) => `${temp}°F is ${((temp *(5/9)) - 32).toFixed(2)}°C`

formatConvertion(20, celsiusToFahrenheit)
formatConvertion(96.8, fahrenheitToCelsius)
formatConvertion(0, celsiusToFahrenheit)
formatConvertion(32, fahrenheitToCelsius)