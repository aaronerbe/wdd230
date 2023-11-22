const visitContent = document.getElementById('visit-content');
const today = Date.now();
const msToDays = 84600000;

function getVisitDate(){
    return JSON.parse(localStorage.getItem("lastVisitDate"));
}
function setVisitDate(today){
    localStorage.setItem("lastVisitDate", today);
}


let lastDate = getVisitDate() || today;
//used to force test > 1 day visit
//lastDate-=(5*msToDays);

// Calculate the time difference between today and the last visit in days.
const daysDifference = (today - lastDate) / msToDays;

if (today == lastDate) {
    //console.log("First visit.");
    //do nothing to the visitsContent as it's correct by default
} else if (daysDifference <1) {
    //console.log("Less than a day since the last visit.");
    visitContent.textContent = "Back so soon! Awesome!";
} else {
    //console.log("More than 1 day since the last visit.");
    visitContent.textContent = "You last visited " + parseInt(daysDifference) + " ago.";
}

//set for next visit
setVisitDate(today);