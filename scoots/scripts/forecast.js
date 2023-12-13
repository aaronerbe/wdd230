
const fHigh = document.getElementById('forecast-high');
const fLow = document.getElementById('forecast-low');
const f3pm = document.getElementById('forecast-temp');
const fIcon = document.getElementById('forecast-icon');
const fDesc = document.getElementById('forecast-desc');
const fHumidity = document.getElementById('forecast-humidity');
const fIconTitle = document.getElementById('forecast-icon-title');
const fCompareDesc = document.getElementById('compare-desc');

//lat/lon/units generated in weather.js script
const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?${lat}${lon}${units}${apiKey}`;
//console.log(forecasturl);

async function apiForecastFetch(){
    try{
        const response = await fetch(forecasturl);
        if (response.ok){
            const forecastData = await response.json();
            buildDay(forecastData);
        }else{
            throw Error(await response.txt());
        }
    } catch (error){
        //console.log(error);
    }
}

//build an array to house keys of days and pairs of min/max
const temperatureByDate = {};

//grab the data for each day
function buildDay(forecastData){
    forecastData.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        const temp = item.main.temp;

        if (!temperatureByDate[date]){
            temperatureByDate[date] = {high: temp, low: temp};
        }else{
            temperatureByDate[date].high = Math.max(temperatureByDate[date].high, temp);
            temperatureByDate[date].low = Math.min(temperatureByDate[date].low, temp);
            //if it's 3pm, capture the temp & description for that time slot
            //split the dt_txt json data to get timestamp and match 15:00:00
            if (item.dt_txt.split(' ')[1] === '15:00:00'){
                //3pm icon
                temperatureByDate[date].icon = item.weather[0].icon;
                //icon title
                temperatureByDate[date].title = item.weather[0].main;
                //3pm temp
                temperatureByDate[date].three = Math.round(temp)
                //3pm Humidity
                temperatureByDate[date].hum = item.main.humidity;
                //description @3pm
                temperatureByDate[date].desc = item.weather[0].description;
                //console.log(`${date} and ${temp}`);
                //console.log(`${item.weather[0].description} and ${item.weather[0].icon}`);
                //console.log(temperatureByDate[date].hum)
            }
        }
    });
    //spitting out the log.  will be reused to actually populate the website.
    displayForecast(temperatureByDate);
}
function displayForecast(tempByDate){
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
    //now I can use the keys to just grab the 1st.
    const date1 = dates[index];
    //now extract the data for those keys    
    //High / Low
    const forecastHigh = Math.round(tempByDate[date1].high);
    fHigh.innerHTML = `${forecastHigh}<span class="units units-up">&deg;</span>`;
    const forecastLow = Math.round(tempByDate[date1].low);
    fLow.innerHTML = `${forecastLow}<span class="units units-up">&deg;</span>`;
    //3pm Temp
    const forecast3pm = Math.round(tempByDate[date1].three);
    f3pm.innerHTML = `${forecast3pm}<span class="units units-up">&deg;</span>`;
    //Description & Icon
    const desc = tempByDate[date1].desc;
    fDesc.innerHTML=`Expect ${desc}`;
    const iconsrc = `https://openweathermap.org/img/wn/${tempByDate[date1].icon}@2x.png`;
    fIcon.setAttribute('src',iconsrc);
    fIcon.setAttribute('alt',desc)
    //Humidity
    const humidity = tempByDate[date1].hum;
    fHumidity.innerHTML=`${humidity}<span class="units">%</span>`;
    const iconTitle = tempByDate[date1].title;
    fIconTitle.innerHTML=`${iconTitle}`;
    //Comparison Description
    const compare = forecastHigh - cMaxTemp;
    if (compare === 0){
        fCompareDesc.innerHTML = `Same Temperature as Today`;
    }
    else if (compare>0){
        fCompareDesc.innerHTML = `${Math.abs(compare)}<span class="units units-up">&deg;</span> Warmer Than Today`;
    }
    else{
        fCompareDesc.innerHTML = `${Math.abs(compare)}<span class="units units-up">&deg;</span> Cooler Than Today`
    }
}

apiForecastFetch();