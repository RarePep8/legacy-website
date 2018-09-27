var weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var dateObject = new Date();
document.getElementById('date-text').innerHTML = weekdayArray[dateObject.getDay()];
//if(dateObject.getDay() != 3){
  document.getElementById("date-image").style.display='none';
//}
var showBorder = false;
function clock(){
  var dynamicDateObject = new Date();
  hours = dynamicDateObject.getHours();
  minutes = dynamicDateObject.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = dynamicDateObject.getSeconds();
  var semiColon = ':';
  if(showBorder){
    document.getElementById('time-text').style.borderStyle = "dotted";
  }
  else{
    document.getElementById('time-text').style.borderStyle = "dashed";
  }
  showBorder = !showBorder;
  // if(document.getElementById('time-text').innerHTML.indexOf(':') != -1) {
  //   semiColon = ' ';
  // } else {
  //   semiColon = ':';
  // }
  document.getElementById('time-text').innerHTML = hours + semiColon + minutes;
}
clock();
setInterval(clock, 1000);
