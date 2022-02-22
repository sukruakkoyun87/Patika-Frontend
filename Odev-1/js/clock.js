let name=prompt("Adınızı nedir ?")

let myName=document.querySelector("#myName");

myName.innerHTML=name;
//console.log(document.querySelector("#myName").innerHTML);


function showTime() {
    let now =new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


let day = days[now.getDay()];

    let hours=document.querySelector("#myClock").innerHTML=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}  ${day} `;
}


setInterval(function () {
    showTime();  
});