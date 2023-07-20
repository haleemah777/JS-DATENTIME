let currentDay = new Date();
let day = currentDay.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector('.day').innerHTML = "Today is :" + " " + dayList[day] + ".";

let hour = currentDay.getHours();
let minutes =currentDay.getMinutes();
let seconds = currentDay.getSeconds();

let greenwichMeridian = (hour >= 12) ? " PM" : " AM";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && greenwichMeridian === " PM"){
    if (minutes === 0 && seconds === 0){
        hour = 12;
        greenwichMeridian = "Noon"
    }
    else{
        hour = 12;
        greenwichMeridian= " PM"
    }
}
if (hour === 0 && prepand ===" AM"){
    if(minutes === 0 && seconds === 0){
        hour = 12;
        greenwichMeridian = "Midnight"
    }
    else{
        hour= 12;
        greenwichMeridian = " AM"
    }
}

document.querySelector('.time').innerHTML = "Curent Time:" + " " + hour + greenwichMeridian + " :" + " " + minutes + ":" + " " + seconds;

let date= currentDay.getDate()
let month= currentDay.getMonth() 
let monthList= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
let year= currentDay.getFullYear()

document.querySelector('.date').innerHTML= date + "/" + (month+1) + "/" + year

let printContent= function(){
    window.print();
}