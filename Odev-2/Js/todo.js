const TASK=document.querySelector("#task");
const ADD_BTN=document.querySelector("#liveToastBtn");
const LIST=document.querySelector("#list");
var myNodelist = document.getElementsByTagName("LI");
let LiDOM=document.createElement("li");
let taskList= localStorage.getItem("Task")?JSON.parse(localStorage.getItem("Task")):[];

showTask();
function newLi() {

let text=document.createTextNode(TASK.value);
LiDOM.append(text);
LIST.append(LiDOM);

}



for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  removeItem(i);
  myNodelist[i].appendChild(span);
 
}
function newSpan() {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    LiDOM.appendChild(span);
    
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
}
}
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);



function newElement(){
if (validate(TASK)){
    newLi();
    taskList.push(TASK.value);
    localStorage.setItem("Task",JSON.stringify(taskList));
    showTask();
    TASK.value="";
    //newSpan();
    $(".success").toast("show");
}else{
    $(".error").toast("show");
}
}

function validate(input){
    if(input.value.trim() !=0){
        return true;
    }else{
        return false;
    }
}

function showTask() {
    //getLocalItems();
    let newLiTag = ""; // yeni li oluşturdum
    taskList.forEach((element, index) => { //dizideki her bir elemanın nasıl bir li tagi yapısı oluşturmasını ve tekrar etmesini söyledim
        newLiTag +=
            `
        <li>${element}
        <span id="closeButton" class="close" >\u00D7</span></li>
        `;
    });
    LIST.innerHTML = newLiTag; // oluşturduğum li yi listeye ekledim
}
function removeItem(index) { 
    let getLocalStorage = localStorage.getItem("Task"); // local storagedan veri çağırma
    taskList = JSON.parse(getLocalStorage); // diziyi JSON yapısına çevirdim.
    taskList.splice(index, 1); // dizide belirttiğim indexdeki öğeden başla 1 öğe ayır 
    localStorage.setItem("Task", JSON.stringify(taskList));  //silme sonrası local storage güncelleme

    showTask();
}