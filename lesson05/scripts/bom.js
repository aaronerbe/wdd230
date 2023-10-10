const input = document.querySelector("#favchap");
const addChapterButton = document.querySelector("button");
const list = document.querySelector("#list");

input.focus();

addChapterButton.addEventListener("click", () =>{
    if (input.value != ""){
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        li.value = "";
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);        

        deleteButton.addEventListener("click",() =>{
            list.removeChild(li);
            input.focus();
        });
    }
    else{
        input.focus();
    };
})