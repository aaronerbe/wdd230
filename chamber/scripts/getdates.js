const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = lastModified.toLocaleDateString(undefined, options);

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// To display the last modified date, wrap it in a <span> or <div> element.
document.getElementById('lastModified').innerHTML = formattedDate;

//Add todays date to the timestamp in the join.html.  NOTE - depending on use, I could change it from lastModified to formattedDate
document.getElementById("timestamp").value = lastModified;