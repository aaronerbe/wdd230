const currentDesc = document.querySelector('#current-desc');
const currentIcon = document.querySelector('#current-icon');
const currentTemp = document.querySelector('#current-temp');
const currentHigh = document.querySelector('#current-max-temp');
const currentWindSpeed = document.querySelector('#current-wind');
const currentHumidity = document.querySelector('#current-humidity');
const currentIconTitle = document.querySelector('#current-icon-title');
//const currentWindchill = document.querySelector('#current-windchill');

const lat = 'lat=20.64';
const lon = '&lon=-87.07';
const units = '&units=imperial'
const apiKey = '&appid=90e75c5bbabb822e030cc36f1b6ff56f';

const url = `https://api.openweathermap.org/data/2.5/weather?${lat}${lon}${units}${apiKey}`;
//console.log(url);

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data)//testing
            displayCurrentWeather(data); 
        }else{
            throw Error(await response.txt());
        }
    } catch (error){
    }
}

function displayCurrentWeather(data){
    //current icon-title
    const iconTitle = data.weather[0].main;
    currentIconTitle.innerHTML = `${iconTitle}`;
    //description
    const desc = data.weather[0].description;
    //console.log(desc);
    currentDesc.textContent =`Expect ${desc}`;
    //icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    //console.log(iconsrc);
    currentIcon.setAttribute('src',iconsrc);
    currentIcon.setAttribute('alt',desc);
    //current temp    
    cTemp = Math.round(data.main.temp);
    currentTemp.innerHTML = `${cTemp}<span class="units units-up">&deg;</span>`;
    //current max temp
    cMaxTemp = Math.round(data.main.temp_max);
    currentHigh.innerHTML = `High Temp for Today: ${cMaxTemp}<span>&deg;</span>`;
    //current wind speed
    cWindSpeed = Math.round(data.wind.speed);
    currentWindSpeed.innerHTML = `${cWindSpeed}<span class="units">mph</span>`;
    //current humidity
    const humidity = data.main.humidity;
    currentHumidity.innerHTML = `${humidity}<span class="units">%</span>`;

}

apiFetch();