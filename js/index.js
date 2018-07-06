var weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var dateObject = new Date();
document.getElementById('date-text').innerHTML = weekdayArray[dateObject.getDay()];
if(dateObject.getDay() != 3){
  document.getElementById("date-image").style.display='none';
}
function clock(){
  var dynamicDateObject = new Date();
  hours = dynamicDateObject.getHours();
  minutes = dynamicDateObject.getMinutes();
  seconds = dynamicDateObject.getSeconds();
  var semiColon = ':';
  if(document.getElementById('time-text').innerHTML.indexOf(':') != -1) {
    semiColon = ' ';
  } else {
    semiColon = ':';
  }
  document.getElementById('time-text').innerHTML = hours + semiColon + minutes;
}
clock();
setInterval(clock, 1000);
