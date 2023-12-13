const linksURL = "https://aaronerbe.github.io/scoots/data/rentals.json";
async function getLinks(){
    const response = await fetch(linksURL);
    if (response.ok){
        const data = await response.json();
        //console.table(data.rentals);
        displayDetails(data.rentals);
        displayTable(data.rentals);
    }
}

function displayDetails(rentals){
    //work through each
    rentals.forEach(rental => {
        //collect the elements we need
        let rentalCode = rental.code;
        let card = document.getElementById(rentalCode);
        let cardRider = document.getElementById(`${rentalCode}-rider`);
        let cardDesc = document.getElementById(`${rentalCode}-description`);
        let cardPrices = document.getElementById(`${rentalCode}-prices`);

        //collect the json data
        let rider = rental.max;
        let desc = rental.desc;
        let features = rental.features;
        //get the lowest price (which is reservation) to do a "as low as $$$$"
        //the actual price breakdown will go in the table
        let lowestPrice = rental.reservation[0].halfDay;

        //start building the html
        cardRider.innerHTML = `Max People: ${rider}`;
        cardDesc.innerHTML = `Recommended For: ${desc} <br> Features: ${features}`;
        cardPrices.innerHTML = `As Low As: $${lowestPrice}`;
    });
}


function displayTable(rentals){
    //build initial table w/ headings
    //doing in js cause empty rows triggers html checker as bad
    buildTable();
    
    //work through each
    rentals.forEach(rental =>{
        let rentalCode = rental.code;
        //get table elements
        let row = document.getElementById(`${rentalCode}-row`);
        //get json data
        let vehicle = rental.type;
        let rider = rental.max;
        let desc = rental.desc;
        let reservationHalf = rental.reservation[0].halfDay;
        let reservationFull = rental.reservation[0].fullDay;
        let walkInHalf = rental.walkIn[0].halfDay;
        let walkinFull = rental.walkIn[0].fullDay;

        //generate the rows we need
        let tdVehicle = document.createElement('td');
        let tdRider = document.createElement('td');
        let tdResHalf = document.createElement('td');
        let tdResFull  = document.createElement('td');
        let tdWalkHalf = document.createElement('td');
        let tdWalkFull = document.createElement('td');
        let tdDesc = document.createElement('td');

        //some styling
        tdDesc.style.textTransform = "capitalize";
        
        tdVehicle.innerHTML=`${vehicle}`;
        tdRider.innerHTML=`${rider}`;
        tdResHalf.innerHTML=`$${reservationHalf}`;
        tdResFull.innerHTML=`$${reservationFull}`;
        tdWalkHalf.innerHTML=`$${walkInHalf}`;
        tdWalkFull.innerHTML = `$${walkinFull}`;
        tdDesc.innerHTML = `${desc}`;
        
        //append
        if (row){
            row.appendChild(tdVehicle);
            row.appendChild(tdRider);
            row.appendChild(tdResHalf);
            row.appendChild(tdResFull);
            row.appendChild(tdWalkHalf);
            row.appendChild(tdWalkFull);
            row.appendChild(tdDesc);
        }else{
            console.log(`Row with ID ${rentalCode}-row does not exist.`);
        }

    })
}


function buildTable(){
    const tbl = document.getElementById('summary-tbl');
    const tbody = document.createElement('tbody');
    //tbody.classList.add('whitespace-content');
    
    const headerRow = document.createElement('tr');
    headerRow.classList.add('header-row', 'dark-accent');
    const vehRow = document.createElement('th');
    vehRow.setAttribute('rowspan', '2');
    vehRow.innerText = 'Vehicle';
    
    const riderRow = document.createElement('th');
    riderRow.setAttribute('rowspan', '2');
    riderRow.innerText = 'Riders';
    
    const resPriceRow = document.createElement('th');
    resPriceRow.setAttribute('colspan', '2');
    resPriceRow.innerText = 'Reservation Price';
    
    const wlkPriceRow = document.createElement('th');
    wlkPriceRow.setAttribute('colspan', '2');
    wlkPriceRow.innerText = 'Walk-In Price';
    
    const recRow = document.createElement('th');
    recRow.setAttribute('rowspan', '2');
    recRow.innerText = 'Recommended For';
    
    const headerRow2 = document.createElement('tr');
    headerRow2.classList.add('header-row', 'header-row2', 'dark-accent');
    const halfDay1 = document.createElement('td');
    halfDay1.innerText = '1/2 Day';
    
    const fullDay1 = document.createElement('td');
    fullDay1.innerText = 'Full Day';
    
    const halfDay2 = document.createElement('td');
    halfDay2.innerText = '1/2 Day';
    
    const fullDay2 = document.createElement('td');
    fullDay2.id = 'exclude-cell';
    fullDay2.innerText = 'Full Day';
    
    const rows = ['metro', 'dio', 'pcx150', 'pioneer', 'jeep2', 'jeep4'];
    
    tbl.appendChild(tbody);
    tbody.appendChild(headerRow);
    tbody.appendChild(headerRow2);
    
    headerRow.appendChild(vehRow);
    headerRow.appendChild(riderRow);
    headerRow.appendChild(resPriceRow);
    headerRow.appendChild(wlkPriceRow);
    headerRow.appendChild(recRow);
    
    headerRow2.appendChild(halfDay1);
    headerRow2.appendChild(fullDay1);
    headerRow2.appendChild(halfDay2);
    headerRow2.appendChild(fullDay2);
    
    // Loop to create rows
    rows.forEach(rowId => {
        const newRow = document.createElement('tr');
        newRow.id = `${rowId}-row`;
        tbody.appendChild(newRow);
    });
}

getLinks();