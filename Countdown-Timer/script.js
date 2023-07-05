let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
// set time 
const countDownDate = new Date("january 1, 2023 00:00:00");
// creating a function to calcualte and print data
function countdown(){
        // get date in millisecond
        const currentDate = new Date().getTime();
        // diffrance of dates
        const diffranceOfDates = countDownDate - currentDate ;
        // calculating months
        const month = Math.floor((diffranceOfDates/(1000*60*60*24*30)));
        // calculating days
        const day = Math.floor((diffranceOfDates % (1000*60*60*24*30))/(1000*60*60*24));
        // calculating hours
        const hour = Math.floor((diffranceOfDates % (1000*60*60*24))/(1000*60*60));
        // calculaing minutes
        const minute = Math.floor((diffranceOfDates % (1000*60*60))/(1000*60));
        // calculating seeconds
        const second = Math.floor((diffranceOfDates % (1000*60))/(1000));
        console.log(second);
        // printing data on webpage
        months.innerHTML = month
        days.innerHTML = day
        hours.innerHTML = hour
        minutes.innerHTML = minute
        seconds.innerHTML = second
    
        if(diffranceOfDates < 0 ){
            console.log("Happy New Year");
    
            return false;
        };
}
// initial calling
countdown();

// calling countdown function in 1 second of time interval
setInterval(countdown,1000);

