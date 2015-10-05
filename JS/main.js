setInterval(function(){

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var hr = (hr < 10) ? '0' + hour : hour; 
var min = (minutes < 10) ? '0' + minutes : minutes;
var sec = (seconds < 10) ? '0' + seconds : seconds;

var hexhr = hr.toString(16);
var hexmin = min.toString(16).toUpperCase();
var hexsec = sec.toString(16).toUpperCase();

var totalTime = '#' + hexhr + ''+ hexmin + '' + hexsec;
  
var changeColor = $('.clock');
changeColor.css('background', totalTime);
$('.time').text(totalTime);
},1000);







