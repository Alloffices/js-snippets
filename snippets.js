// -------------------------------------------------
// JavaScript: Function to create a UUID identifier
// -------------------------------------------------
// Reference article here: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

const iio = create_UUID();

document.querySelector('#tmp_button-85389').click(function() {
	location.href = "https://jordanbelfort.clickfunnels.com/mainevent1/?cf-affiliate-id=" + iio;
});


// -------------------------------------------------
// Get URL Vars
// -------------------------------------------------
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}


// -------------------------------------------------
// LocalStorage in JavaScript: How to
// -------------------------------------------------

// Guide: https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/

localStorage.setItem('price', str);

setItem(): Add key and value to localStorage
getItem(): Retrieve a value by the key from localStorage
removeItem(): Remove an item by key from localStorage
clear(): Clear all localStorage
key(): Passed a number to retrieve nth key of a localStorage


// -------------------------------------------------
// Count Down Timer :  With Cookie
// -------------------------------------------------
  var timeoutHandle;
  function countdown(minutes,stat) {
      var seconds = 60;
      var mins = minutes;
  if(getCookie("minutes")&&getCookie("seconds")&&stat)
  {
      var seconds = getCookie("seconds");
      var mins = getCookie("minutes");
  }
  function tick() {
      var counter = document.getElementById("timer");
      setCookie("minutes",mins,10)
      setCookie("seconds",seconds,10)
      var current_minutes = mins-1
      seconds--;
      counter.innerHTML = 
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      //save the time in cookie
      if( seconds > 0 ) {
          timeoutHandle=setTimeout(tick, 1000);
      } else {
          if(mins > 1){  
          setTimeout(function () { countdown(parseInt(mins)-1,false); }, 1000);
          }
      }
  }
  tick();
}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
window.onload = function startingTimer(){
    //countdown(prompt("Enter how many minutes you want to count down:"),true);
      countdown(47,true);
}
// HTML
// <div id="timer">00:00:00</div>

