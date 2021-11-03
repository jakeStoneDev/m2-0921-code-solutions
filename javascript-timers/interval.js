var countdown = document.getElementById('countdown')
;

var currentNum = 4;
var major = '~Earth Beeeelooowww Us~';

function canYouHearMeMajorTom(count) {
  if (currentNum < 2) {
    clearInterval(interval);
    countdown.textContent = major;
    return countdown;
  }
  currentNum = currentNum - 1;
  countdown.textContent = currentNum;
}

countdown.textContent = currentNum
;
var interval = setInterval(canYouHearMeMajorTom, 1000);
