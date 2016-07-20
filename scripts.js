/**
 * Created by Jackson on 7/20/16.
 */
setInterval(function(){
    var now = Date.now();
    var doomsday = new Date('January 20, 2017 9:00');
    var getTimeTillDoomsday = (doomsday.getTime() - now) / 1000;

    var seconds = Math.floor(getTimeTillDoomsday % 60);
    var minutes = Math.floor((getTimeTillDoomsday / 60) % 60);
    var hours = Math.floor((getTimeTillDoomsday / 60 / 60) % 24);
    var days = Math.floor((getTimeTillDoomsday / 60 / 60 / 24) % 24);
    var weeks = Math.floor((getTimeTillDoomsday / 60 / 60 / 24 / 7));


    document.getElementById('counter-seconds').innerHTML = seconds;
    document.getElementById('counter-minutes').innerHTML = minutes;
    document.getElementById('counter-hours').innerHTML = hours;
    document.getElementById('counter-days').innerHTML = days;
    document.getElementById('counter-weeks').innerHTML = weeks;
}, 1000);