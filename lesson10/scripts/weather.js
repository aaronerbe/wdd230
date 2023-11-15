const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = 'lat=49.75';
const lon = '&lon=6.63';
const units = '&units=imperial'
const apiKey = '&appid=cc208746db6a946dc89c0ffb1c8e1c19';

const url = `https://api.openweathermap.org/data/2.5/weather?${lat}${lon}${units}${apiKey}`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data)//testing
            displayResults(data); 
        }else{
            throw Error(await response.txt());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${Math.ceil(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent =`${desc}`;
    captionDesc.style.textTransform = 'capitalize';
}

apiFetch();