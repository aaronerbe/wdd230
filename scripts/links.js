const baseURL = "https://aaronerbe.github.io/wdd230/";
const linksURL = "https://aaronerbe.github.io/wdd230/data/links.json"

async function getLinks(){
    const response = await fetch(linksURL);
    if (response.ok){
        const data = await response.json();
        //console.table(data.lessons);
        displayLinks(data.lessons);
    }
}

function displayLinks(weeks){
    //const ul = document.createElement('ul');
    const ul = document.querySelector('#links')

    weeks.forEach(week => {
        let lesson = week.lesson;
        let li = document.createElement('li');
        let div = document.createElement('div');
        //list preamble
        li.innerText = `${lesson}:`

        //pass week.links on and iterate through
        //use counter to determine if it's the 1st link or not for adding | between links
        counter = 0
        week.links.forEach(link=>{
            counter ++;
            let alink = document.createElement('a');            
            alink.setAttribute('href', link.url);
            alink.textContent = link.title;
            if (counter > 1){
                //Add | for 2nd + links
                div.innerHTML = div.innerHTML + " | "
            }
            div.appendChild(alink);
        })
        li.appendChild(div);
        ul.appendChild(li);        
    });

}

getLinks();