let firstName = prompt("Whats your name?")
let greeting = document.querySelector("#myName")
greeting.innerHTML += firstName


function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    if(hour == 0){
        hour = 00;
    }
   
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = `${hour}:${minute}:${second}`

    let display = document.querySelector("#myClock")
    display.innerHTML = time
    setTimeout(showTime, 1000)

}
showTime();


