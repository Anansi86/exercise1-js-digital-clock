var clock = new Date();
var hours = clock.getHours ();
var minutes = clock.getMinutes ();
var seconds = clock.getSeconds ();
var timeOfDay = ( hours < 12 ) ? "AM" : "PM";

console.log(minutes);
console.log(hours);
console.log(seconds);
function time()  {
    
    hours = ( hours > 12 ) ? hours - 12 : hours;
    minuets = ( minutes < 10 ? "0" : "" ) + minutes;
    seconds = ( seconds < 10 ? "0" : "" ) + seconds;
    

  
}