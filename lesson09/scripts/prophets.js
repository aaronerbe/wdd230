const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    //check to see if fetch was successful
    if (response.ok){
        //API sends json, need to convert
        //.json() returns a promise so we wait on it as well
        const data = await response.json();
        //console.table(data.prophets)
        //console.table(data.prophets[0].lastname);
        //console.table(data.prophets.map((prophet) => prophet.lastname));
        displayProphets(data.prophets);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet)=>{
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Picture of the Prophet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading',"lazy");
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        dob.textContent = `Date of Birth:  ${prophet.birthdate}`;
        pob.textContent = `Place of Birth:  ${prophet.birthplace}`

        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}


getProphetData();
//displayProphets();