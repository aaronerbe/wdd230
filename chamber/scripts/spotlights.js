//Build Spotlight info on home page
//Randomly select from json file
//show only gold/silver members
const spotlightCompName = document.querySelectorAll('.spotlight-company-name');
const spotlightAbout = document.querySelectorAll('.spotlight-about');
//link to the contacts data
const spotlightLink = "https://aaronerbe.github.io/wdd230/chamber/data/contacts.json";

//extract data
async function getSpotlightJSON(){
    const response = await fetch(spotlightLink);
    if (response.ok){
        const spotlightMembers = await response.json();
        //console.table(data.contacts);
        displaySpotlights(spotlightMembers.contacts);
    }
}

//parse through and display 4 random gold/silver members
function displaySpotlights(members){
    //build index of members who are gold/silver
    let indexList = [];
    let count = 0
    //populate indexList with which contacts are silve/gold
    members.forEach(member => {
        if (member.mLevel =="Silver" || member.mLevel=="Gold"){
            indexList.push(count);
        }
        count++;
    });
    //randomize the list
    let randomList = randomize(indexList);

    // Get the first four unique random numbers)
    let random4 = randomList.slice(0, 4);
    //iterate through the list and apply to the elements 
    for (let i = 0; i<random4.length; i++){
        spotlightCompName[i].innerHTML = members[random4[i]].name;
        spotlightAbout[i].innerHTML = members[random4[i]].about
    }
}

function randomize(mList){
    //randomize the indexList
    // Shuffle the array (Fisher-Yates shuffle algorithm)
    for (let i = mList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mList[i], mList[j]] = [mList[j], mList[i]];
    }
    return mList;
}

getSpotlightJSON();
