(function(){

  'use strict';

  var currentTime = new Date,
      endTime = new Date(currentTime.getTime());

  endTime.setDate(endTime.getDate() + 1);
  endTime.setHours(0);
  endTime.setMinutes(0);
  endTime.setSeconds(0);
  endTime.setMilliseconds(0);

  var countDown = document.getElementById('js-count-down');

  var id = setInterval(function() {
    var time = getTimeRemaining(endTime, new Date);

    if (time.total < 0) {
      console.log('end');
      clearInterval(id);
    } else {
      console.log(time);
      countDown.innerHTML = [
        (time.hours   > 9) ? time.hours   : '0' + time.hours,
        (time.minutes > 9) ? time.minutes : '0' + time.minutes,
        (time.seconds > 9) ? time.seconds : '0' + time.seconds
      ].join(':');
    }
  }, 500);

  function getTimeRemaining(endTime, currentTime) {
    var total = endTime - currentTime,
        seconds = Math.floor((total / 1000) % 60),
        minutes = Math.floor((total / 1000 / 60) % 60),
        hours = Math.floor((total / (1000 * 60 * 60)) % 24),
        days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total: total,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    };
  }

}());
