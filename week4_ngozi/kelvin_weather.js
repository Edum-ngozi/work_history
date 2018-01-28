//the weather forecast
const kelvin = 294;
// convert Kelvin to Celsius
const celsius = kelvin -273;
//round number to fahrenheit
let fahrenheit = celsuis * (9/5) + 32;
//result saved to farenheit variable
fahrenheit = Math.floor(fahrenheit);
// add string interpolation
console.log(`The temperature is ${fahrenheit}degree fahrenheit.`);
const kelvin = prompt(`What is the Kelvin temperature today?`);
