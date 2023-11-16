
const day1Day = document.getElementById('day1-day')
const day1High = document.getElementById('day1-forecast-high');
const day1Low = document.getElementById('day1-forecast-low');
const day2Day = document.getElementById('day2-day')
const day2High = document.getElementById('day2-forecast-high');
const day2Low = document.getElementById('day2-forecast-low');
const day3Day = document.getElementById('day3-day')
const day3High = document.getElementById('day3-forecast-high');
const day3Low = document.getElementById('day3-forecast-low');

//lat/lon/units pulled from weather.js script
const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?${lat}${lon}${units}${apiKey}`;
console.log(forecasturl);

async function apiForecastFetch(){
    try{
        const response = await fetch(forecasturl);
        if (response.ok){
            const forecastData = await response.json();
            //console.log(forecastData)//testing
            buildDay(forecastData);
            //displayResults(forecastData); 
        }else{
            throw Error(await response.txt());
        }
    } catch (error){
        console.log(error);
    }
}

//build an array to house keys of days and pairs of min/max
const temperatureByDate = {};

//grab the min/max for each day
function buildDay(forecastData){
    forecastData.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        const temp = item.main.temp;

        if (!temperatureByDate[date]){
            temperatureByDate[date] = {high: temp, low: temp};
        }else{
            temperatureByDate[date].high = Math.max(temperatureByDate[date].high, temp);
            temperatureByDate[date].low = Math.min(temperatureByDate[date].low, temp);
        }
    });
    //spitting out the log.  will be reused to actually populate the website.
    displayForecast(temperatureByDate);
}
function displayForecast(tempByDate){
    console.log("writing Display Forecast");
    //have to build a list of the keys from the key value pairs in temperatureByDate
    const dates = Object.keys(tempByDate);

    //Need to ignore today if the forecast gave us todays info.  
    //Grab todays date, and parse it to the same format and then compare
    today = new Date();
    today = today.toISOString().split('T')[0];
    //create an index and inrement by 1 if needed (if dates[0] is today)
    index = 0;
    if (dates[0]==today){
        index++;
    }
    //now I can use the keys to just grab the 1st 3 days.
    const date1 = dates[index];
    const date2 = dates[index+1];
    const date3 = dates[index+2];
    //now extract the high/low for those keys    
    day1High.innerHTML = `⬆️ ${Math.ceil(tempByDate[date1].high)}&deg`;
    day1Low.innerHTML = `⬇️ ${Math.ceil(tempByDate[date1].low)}&deg`;
    day2High.innerHTML = `⬆️ ${Math.ceil(tempByDate[date2].high)}&deg`;
    day2Low.innerHTML = `⬇️ ${Math.ceil(tempByDate[date2].low)}&deg`;
    day3High.innerHTML = `⬆️ ${Math.ceil(tempByDate[date3].high)}&deg`;
    day3Low.innerHTML = `⬇️ ${Math.ceil(tempByDate[date3].low)}&deg`;
    
    //populate the days info
    //convert first to Date object
    const day1Date = new Date(date1);
    const day2Date = new Date(date2);
    const day3Date = new Date(date3);
    //set options for conversion to day of week
    const forecastDateOptions = { weekday: 'short'};
    //convert it
    day1Day.innerText = new Intl.DateTimeFormat('en-US', forecastDateOptions).format(day1Date);
    day2Day.innerText = new Intl.DateTimeFormat('en-US', forecastDateOptions).format(day2Date);
    day3Day.innerText = new Intl.DateTimeFormat('en-US', forecastDateOptions).format(day3Date);
}

apiForecastFetch();