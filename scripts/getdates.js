//option to format the date correctly for copywrite
const options = {year: 'numeric'};

document.getElementById('currentdate').textContent=new Date().toLocaleDateString('en-US',options);

document.getElementById('lastModified').innerHTML = new Date(document.lastModified);