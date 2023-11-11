const npList = [
    "Listing in the annual Business Directory",
    "Listing on the Chamber website membership directory",
    "Display of your business cards at the Chamber Office"
];
const bList = [
    "Ribbon cutting, grand opening, or open house",
    "Referral of customers exclusively to members"
];
const sList = [
    "Membership plaque and window decal to show off your membership",
    "Subscription to bi-monthly Connection newsletter",
    "Free admission to annual community fair"
];
const gList = [
    "Four (4) free professional trainings per year",
    "Chamber Interview broadcast to our social media platforms",
    "Discounted Cybersecurity Consultation"
];
const ul = document.createElement("ul");
const ol = document.createElement("ol");
const memberInfo = document.querySelector(".membership-details");
const memberSelection = document.getElementsByClassName("membership-radio");

// Since getElementsByClassName returns a collection, I have to loop through it.
for (let i = 0; i < memberSelection.length; i++) {
  memberSelection[i].addEventListener('input', displayInfo);
}

function displayInfo() {
    //clear everything before appending new content
    memberInfo.innerHTML = "";
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
    //if the selected radio matches, then add the html text and then build the list
    if (this.value === "NP Membership") {
        memberInfo.innerHTML = "Non-Profit Membership<br>No Fee!<br>";
        buildList([npList])
    }
    else if (this.value === "Bronze Membership"){
        memberInfo.innerHTML = "Bronze Membership<br>$800"
        buildList([npList, bList])
    }
    else if (this.value === "Silver Membership"){
        memberInfo.innerHTML = "Silver Membership<br>$1200"
        buildList([npList,bList,sList]);
    }
    else if (this.value === "Gold Membership"){
        memberInfo.innerHTML = "Gold Membership<br>$1600"
        buildList([npList,bList,sList,gList]);
    }
}

function buildList(lists){
    //build the list
    const p = document.querySelector('.membership-details')
    //steps through each list passed on, creates a li element and adds the text from the list at that index to the li element
    //then appends the li to the ol
    lists.forEach(myList => {
        myList.forEach((itemText) => {
            const li = document.createElement("li");
            li.textContent = itemText;
            li.style.fontSize = '1rem';
            //li.style.margin = '1rem';
            ol.appendChild(li);
        });    
    });
    p.style.color = 'var(--secondary-color)';
    p.style.fontSize = '1.25rem';
    //p.style.margin = '1rem';
    //p.style.padding = '1rem';
    p.style.fontWeight = 'normal';
    //append the ol to the memberInfo space
    memberInfo.appendChild(ol);
    

}

