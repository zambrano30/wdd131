const input= document.querySelector("#favchap");
const button= document.querySelector("button");
const list=document.querySelector("#list");




button.addEventListener("click", ()=>{
    if(input.value.trim() !== "") {
    
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", ()=>{
            li.remove();
    });

    li.append(deleteButton);
    list.append(li);
    input.value = "";
    input.focus();
}
});

