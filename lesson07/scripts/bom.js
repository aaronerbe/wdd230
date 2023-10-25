const input = document.querySelector("#favchap");
const addChapterButton = document.querySelector("button");
const list = document.querySelector("#list");
//lesson 07 
let chaptersArray = getChapterList() || [];

//lesson 07
//iterate through chaptersArray and for each chapter, call the display(chapter) function.
chaptersArray.forEach(chapter=> {
    displayList(chapter);
})


input.focus();

addChapterButton.addEventListener("click", () =>{
    if (input.value!=""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(input.value);
        input.value = "";
        input.focus();
    }

})

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    //input.value = "";
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);        

    deleteButton.addEventListener("click",() =>{
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray))
}
function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}