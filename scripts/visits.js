const visits = document.querySelector(".visits");

//get the stored value if no value then return 0
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//check if it's 0.  if it is display "this is your first visit", else return the numVisits
if (numVisits == 0){
    //Did it this way so the Welcome message will show on a new line below "Page Visits".  Otherwise, it'll just show the number inline like usual.  for readability only
    const msg = document.createElement('p');
    msg.innerHTML = "Welcome!  This is your first visit."
    visits.appendChild(msg);
}
else{
    visits.textContent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);