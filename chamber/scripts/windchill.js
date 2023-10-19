const currentTemp = document.querySelector('.current-temp');
const currentWindspeed = document.querySelector('.current-windspeed');
const currentWindchill = document.querySelector('.current-windchill');

const Ta = parseFloat(currentTemp.textContent);  //current Temp
const V = parseFloat(currentWindspeed.textContent);  //current windspeed

console.log(Ta);
console.log(V);

//calculate windchill factor
const WCF = 35.74 + 0.6215 * Ta - 35.75 * Math.pow(V, 0.16) + 0.4275 * Ta * Math.pow(V, 0.16);
console.log(WCF)
currentWindchill.innerHTML = Math.round(WCF);