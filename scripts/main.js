// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/F1-logo.svg') {
    myImage.setAttribute ('src','images/F1-logo2.png');
  } else {
    myImage.setAttribute ('src','images/F1-logo.svg');
  }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Formula One, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Formula One, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}