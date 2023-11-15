const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//43.82871577477909, -115.8351265160559
const lat = 'lat=43.83';
const lon = '&lon=-115.84';
const units = '&units=imperial'
const apiKey = '&appid=cc208746db6a946dc89c0ffb1c8e1c19';

const url = `https://api.openweathermap.org/data/2.5/weather?${lat}${lon}${units}${apiKey}`;
console.log(url);

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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    //weatherIcon.style.width = '75px';
    //weatherIcon.style.height = '75px';
    captionDesc.textContent =`${desc}`;
    captionDesc.style.textTransform = 'capitalize';
}

apiFetch();