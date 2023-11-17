const baseURL = "https://aaronerbe.github.io/wdd230/chamber/";
const linksURL = "https://aaronerbe.github.io/wdd230/chamber/data/contacts.json"
const div = document.getElementById("contacts");


async function getLinks(){
    const response = await fetch(linksURL);
    if (response.ok){
        const data = await response.json();
        //console.table(data.contacts);
        displayContacts(data.contacts);
    }
}

function displayContacts(contacts){
    
    contacts.forEach(contact => {
        const card = document.createElement('div');
        let name = document.createElement('h3');
        let address = document.createElement('h4');
        let number = document.createElement('h4');
        let website = document.createElement('a');
        let img = document.createElement('img');
        let mLevel = document.createElement('p')

        
        //set classes for css ease
        card.classList.add("contact-card");
        name.classList.add("contact-name");
        name.classList.add("contact");
        address.classList.add("contact-address");
        address.classList.add("contact");
        number.classList.add("contact-number");
        number.classList.add("contact");
        website.classList.add("contact-website");
        website.classList.add("contact");
        img.classList.add("contact-img");
        mLevel.classList.add("contact-mLevel");
        mLevel.classList.add("contact");

        //add all the info to the elements
        name.innerText = contact.name;
        address.innerText = contact.address;
        number.innerText = contact.number;
        website.setAttribute('href',contact.website);
        //website.textContent = contact.website;
        website.textContent = "Website";
        img.setAttribute('src',contact.imgL);
        img.setAttribute('alt',`Image of ${name}`);
        img.setAttribute('width',"500");
        img.setAttribute('height',"333");
        img.setAttribute('loading',"lazy");
        mLevel.innerText = `Membership Level: ${contact.mLevel}`;

        //create picture element for optimized display
        let picture = document.createElement('picture');
        let src1 = document.createElement('source');
        let src2 = document.createElement('source');
        src1.setAttribute('media',"(max-width: 700px");
        src2.setAttribute('media',"(max-width: 910px");
        src1.setAttribute('srcset',contact.imgS);
        src2.setAttribute('srcset',contact.imgM);
        picture.appendChild(src1);
        picture.appendChild(src2);
        picture.appendChild(img);

        //append these to the card, then append the card to the div
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(picture);
        card.appendChild(mLevel);

        div.appendChild(card);
    });
}


//control list vs grid view buttons

const gridbutton = document.querySelector("#gridBtn");
const listbutton = document.querySelector("#listBtn");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	div.classList.add("contacts-grid");
	div.classList.remove("contacts-list");
    //show the images if they've been hidden.  
    const contactImgs = document.querySelectorAll('.contact-img');
    contactImgs.forEach(img => {
        img.style.display = 'block';
    });
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	div.classList.add("contacts-list");
	div.classList.remove("contacts-grid");
    //hide the images.  cheating to put here instead of css to shrink my css
    
    const contactImgs = document.querySelectorAll('.contact-img');
    contactImgs.forEach(img => {
        img.style.display = 'none';
    });
}


getLinks();