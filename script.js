const items=document.getElementById("items");
const list=document.getElementById("do-list");

function addlist(){
    if(items.value===''){
        alert('please enter task');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=items.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    items.value="";
    savedata();
}

list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function displaydata(){
    list.innerHTML=localStorage.getItem("data");
}
displaydata();