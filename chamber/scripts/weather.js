const currentTemp = document.querySelector('#current-temp');
const currentHigh = document.querySelector('#data-current-high');
const currentWindSpeed = document.querySelector('#current-windspeed');
const currentWeatherIcon = document.querySelector('#current-weather-icon');
const currentWindchill = document.querySelector('#current-windchill');
const captionDesc = document.querySelector('#current-temp-description');


//43.82871577477909, -115.8351265160559
const lat = 'lat=43.83';
const lon = '&lon=-115.84';
const units = '&units=imperial'
const apiKey = '&appid=cc208746db6a946dc89c0ffb1c8e1c19';

const url = `https://api.openweathermap.org/data/2.5/weather?${lat}${lon}${units}${apiKey}`;
//console.log(url);

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data)//testing
            displayWeather(data); 
        }else{
            throw Error(await response.txt());
        }
    } catch (error){
        //console.log(error);
    }
}

function displayWeather(data){
    currentTemp.innerHTML = `${Math.ceil(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    currentWeatherIcon.setAttribute('src',iconsrc);
    currentWeatherIcon.setAttribute('alt',desc);
    captionDesc.textContent =`${desc}`;
    //captionDesc.style.textTransform = 'capitalize';
    //console.log(data.main.temp_max);
    currentHigh.textContent = Math.ceil(data.main.temp_max);
    currentWindSpeed.textContent = Math.ceil(data.wind.speed);
    //call windchill calculations now that windspeed is set
    calculateWindchill();
}

apiFetch();


function calculateWindchill(){
    const Ta = parseFloat(currentTemp.textContent);  //current Temp
    const V = parseFloat(currentWindSpeed.textContent);  //current windspeed    
    //calculate windchill factor
    const WCF = 35.74 + 0.6215 * Ta - 35.75 * Math.pow(V, 0.16) + 0.4275 * Ta * Math.pow(V, 0.16);
    //console.log(WCF)
    currentWindchill.innerHTML = Math.round(WCF);
}