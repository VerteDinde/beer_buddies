'use strict';

// store all users
var allUsers = [];

// create constructor for new user
function User(name, drink) {
  this.name = name;
  this.drink = 'images/' + drink;
  this.score = 0;
}

// Gather User Data //
// add event listener to the user submission form
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', generateUser);

// generate a new user from the event handler
function generateUser(event) {
  event.preventDefault();
  var userName = event.target.username.value;
  var radios = event.target.avatar;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked === true) {
      var drinkSelected = (radios[i].value);
    }
  }
  var userDrink = drinkSelected;

  var newUser = new User(userName, userDrink);
  allUsers.push(newUser);
  event.target.username.value = '';

  // Store All User Data to localStorage
  function storeData() {
    var userDataJSON = JSON.stringify(allUsers);
    localStorage.setItem('userData', userDataJSON);
  }
  storeData();
  resetIcon();
}

// Start Game and Retrieve Data
var startButton = document.getElementById('play');
startButton.addEventListener('click', loadGame);

function loadGame(event) {
  event.preventDefault();
  window.location.replace('category.html');
}


//Reset drink icons after user selection
function resetIcon() {
  var resetCocktail = document.getElementById('cocktail');
  var resetTea = document.getElementById('tea');
  var resetWine = document.getElementById('wine-glass');
  var resetBeer = document.getElementById('beer-mug');
  resetCocktail.checked = false;
  resetTea.checked = false;
  resetWine.checked = false;
  resetBeer.checked = false;
}

//Finding 1st 2nd 3rd etc User
var winnerCircle = [];

function winners() {
  var winnerScore = [];
  for(var i = 0; i < allUsers.length; i++) {
    winnerScore.push(allUsers[i].score);
  }
  winnerScore.sort();
  for(var j = 0; j < winnerScore.length; j++) {
    if (winnerScore[j] === allUsers[j].score) {
      winnerCircle.push(allUsers[j]);
    }
  }
}