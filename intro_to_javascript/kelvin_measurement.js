// temp in Kelvin measurement
const kelvin = 300;
// converting kelvin to celsius
const celsius = kelvin - 273;
// converting celsius to fahrenheight and rounding down
const fahrenheight = Math.floor(celsius * (9 / 5) + 32);
// converting celsius to newton
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheight} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
