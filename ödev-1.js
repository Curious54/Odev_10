let name1 = prompt("Adınızı giriniz!")
document.querySelector("#myName").innerHTML = name1;

const calculatorTime = () => {   
    let date = new Date();  
    let hour = date.getHours(); 
    let minute = date.getMinutes(); 
    let second = date.getSeconds();
    var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    let myClock = document.querySelector("#myClock") 
    myClock.innerHTML= hour + ":" + minute +":" + second + " " + days[date.getDay()]; 

    /* 
    myClock.innerHTML =`${hour} : ${minute} : ${second} ${days[date.getDay()]}`
    */
}
let changeTime = setInterval(calculatorTime, 100);