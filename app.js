'use strict';
//Category Arrays
var displayPossible = [];   // stores answers from scrambledAnswers();
var allUsers = []; // declare global for user data
var chosenCategory = [];  // for category choices
var questA = '';
var questB = '';
var questC = '';
var questD = '';

var currentUser;
var allUsersCurrentIndex;

// All localStorage functions //
function callUserData() {
  var retrievedUserData = localStorage.getItem('userData');
  allUsers = JSON.parse(retrievedUserData);
  currentUser = localStorage.getItem('currentUser');

  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].name === currentUser) {
      allUsersCurrentIndex = i;
      break;
    }
  }
}

function storeData(store) {
  var userDataJSON = JSON.stringify(allUsers);
  localStorage.setItem(store, userDataJSON);
  console.log('storeData() :: storing data<' + store + '>');
}

function retrieveCategory() {
  var retrievedCategory = localStorage.getItem('categoryChoice');
  chosenCategory = JSON.parse(retrievedCategory);
}

// LOGIC
//Randomizing order of possible answers
function scrambleAnswers(i) {
  displayPossible = [];
  displayPossible.push(chosenCategory[i].right);
  displayPossible.push(chosenCategory[i].wrongOne);
  displayPossible.push(chosenCategory[i].wrongTwo);
  displayPossible.push(chosenCategory[i].wrongThree);

  var randomNum = 0;
  function numGen() {
    return randomNum = Math.floor(Math.random() * 4);
  }
  questA = '';
  questB = '';
  questC = '';
  questD = '';

  var ansA = numGen();
  questA = displayPossible[ansA];
  var ansB = numGen();
  while (ansB === ansA || ansB === ansC || ansB === ansD) {
    ansB = numGen();
  }
  questB = displayPossible[ansB];
  var ansC = numGen();
  while (ansC === ansA || ansC === ansB || ansC === ansD) {
    ansC = numGen();
  }
  questC = displayPossible[ansC];
  var ansD = numGen();
  while (ansD === ansA || ansD === ansB || ansD === ansC) {
    ansD = numGen();
  }
  questD = displayPossible[ansD];
}
//End Randomizing order of possible answers

// Generate user displays
function generateUsers() {
  // Add user information
  var userFooter = document.getElementById('users');
  userFooter.textContent = ''; 
  for (var j = 0; j < allUsers.length; j++) {
    var userBlock = document.createElement('div');
    userBlock.id = 'user-block';
    userFooter.appendChild(userBlock);
    var uName = document.createElement('div');
    uName.textContent = allUsers[j].name;
    userBlock.appendChild(uName);

    var uDrink = document.createElement('img');
    uDrink.setAttribute('src', allUsers[j].drink);
    userBlock.appendChild(uDrink);

    var uScore = document.createElement('div');
    uScore.textContent = allUsers[j].score;
    userBlock.appendChild(uScore);
  }
}

// Clear previous user displays
function clearUsers() {
  var userFooter = document.getElementById('users');
  userFooter.innerHTML = '';
}

// FUNCTIONS TO RUN GAME
callUserData();
function generateSports(qIndex) {
  retrieveCategory();
  clearUsers();   //this clears previous users in the footer 
  generateUsers();  //this generates the score everytime
  var currentQ = chosenCategory[qIndex];
  scrambleAnswers(qIndex);

  //Add sports questions to the DOM
  var questionsAppend = document.getElementById('questions');
  questionsAppend.textContent = currentQ.question;

  //Event listeners for 'Sports' questions; can be used for all category questions
  var oldAnswerDiv = document.getElementById('answers');
  var answerParent = oldAnswerDiv.parentNode;
  answerParent.id = 'parent';
  answerParent.removeChild(oldAnswerDiv);
  var answerDiv = document.createElement('div');
  answerDiv.id = 'answers';
  answerParent.appendChild(answerDiv);

  var a1 = document.createElement('div');
  a1.id = 'answer1';
  a1.textContent = questA;
  answerDiv.appendChild(a1);

  var a2 = document.createElement('div');
  a2.id = 'answer2';
  a2.textContent = questB;
  answerDiv.appendChild(a2);

  var a3 = document.createElement('div');
  a3.id = 'answer3';
  a3.textContent = questC;
  answerDiv.appendChild(a3);

  var a4 = document.createElement('div');
  a4.id = 'answer4';
  a4.textContent = questD;
  answerDiv.appendChild(a4);

  //Event handler for above listeners
  var clickHandler = generateClickHandler(qIndex);
  answerDiv.addEventListener('click', clickHandler);
}

function generateClickHandler(qIndex) {
  var userIndex = 0;  //tracks user index

  return function clickHandler(event) {
    var clickedAnswer = event.target.textContent;
    var printAnswer = document.getElementById('response');

    if (clickedAnswer === chosenCategory[qIndex].right) {
      printAnswer.textContent = 'Congrats! You got it right!';
      allUsers[userIndex].score++;
      console.log(allUsers[userIndex], " User Score ", allUsers[userIndex].score);
      userIndex++;
      if (userIndex === allUsers.length) {
        if (qIndex < (chosenCategory.length - 1)) {
          generateSports(qIndex + 1);
        } else {
          window.location.replace('about.html');
        }
      }
    } else if (clickedAnswer === chosenCategory[qIndex].wrongOne || clickedAnswer === chosenCategory[qIndex].wrongTwo || clickedAnswer === chosenCategory[qIndex].wrongThree) {
      var stringNumber = ['1.png', '2.png', '3.png', '4.png', '5.png'];
      printAnswer.textContent = 'Sorry, that\'s not the right answer';
      allUsers[userIndex].drink = 'images/' + allUsers[userIndex].drinkType + stringNumber[allUsers[userIndex].wrongAnswer];
      allUsers[userIndex].wrongAnswer++;
      console.log(allUsers[userIndex], " User Score ", allUsers[userIndex].score);
      userIndex++;
      if (userIndex === allUsers.length) {
        if (qIndex < (chosenCategory.length - 1)) {
          generateSports(qIndex + 1);
        } else {
          window.location.replace('about.html');
        }
      }
    } else {
      alert('Please choose an answer.');
    }
  };
}

callUserData();
generateSports(0);


