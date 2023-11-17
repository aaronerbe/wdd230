//Build Spotlight info on home page
//Randomly select from json file
//show only gold/silver members
const spotlightCompName = document.querySelectorAll('.spotlight-company-name');
const spotlightAbout = document.querySelectorAll('.spotlight-about');


const spotlightLink = "https://aaronerbe.github.io/wdd230/chamber/data/contacts.json";

async function getSpotlightJSON(){
    const response = await fetch(spotlightLink);
    if (response.ok){
        const spotlightMembers = await response.json();
        //console.table(data.contacts);
        displaySpotlights(spotlightMembers.contacts);
    }
}

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
    console.table(indexList);

    //randomize the indexList
    // Shuffle the array (Fisher-Yates shuffle algorithm)
    for (let i = indexList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexList[i], indexList[j]] = [indexList[j], indexList[i]];
    }

    // Get the first three elements (three unique random numbers)
    let random4 = indexList.slice(0, 4);
    //reset count to reuse here to index the html elements
    //count = 0;
    for (let i = random4.length-1; i>0; i--){
        console.log(members[random4[i]].name);
        console.log(spotlightCompName[i]);
        spotlightCompName[i].innerHTML = members[random4[i]].name;
        spotlightAbout[i].innerHTML = members[random4[i]].about
    }
}

getSpotlightJSON();