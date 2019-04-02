var countdown;

function time()  {
    var clock = new Date();
    var hours = clock.getHours ();
    var minutes = clock.getMinutes ();
    var seconds = clock.getSeconds ();
    var timeOfDay = ( hours < 12 ) ? "AM" : "PM";

    
    hours = ( hours > 12 ) ? hours - 12 : hours;
    minutes = ( minutes < 10 ? "0" : "" ) + minutes;
    seconds = ( seconds < 10 ? "0" : "" ) + seconds;
    
    var currentTime= hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
    document.getElementById("clock").innerHTML = currentTime;
    
    
    
    // console.log(minutes);
    // console.log(hours);
    // console.log(seconds);
    
     countdown = setTimeout ( time, 1000);
}
