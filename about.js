'use strict';

//Finding 1st 2nd 3rd etc User
var winnerCircle = [];

function winners() {
  var winnerScore = [];
  for (var i = 0; i < allUsers.length; i++) {
    winnerScore.push(allUsers[i].score);
  }
  winnerScore.sort();
  for (var j = 0; j < winnerScore.length; j++) {
    if (winnerScore[j] === allUsers[j].score) {
      winnerCircle.push(allUsers[j]);
    }
  }
}

//Display Results in Table
var tableName = document.getElementById('table-name');
var tableResults = document.getElementById('table-points');

function onFinal() {
  for (var i = 0; i < winnersCircle.length; i++) {
    var winnerName = document.createElement('td');
    winnerName.textContent = winnerCircle[i].name;
    tableName.appendChild(winnerName);
    var winnerPoints = document.getElementById('table-points');
    winnerPoints.textContent = winnerCircle[i].score;
    tableResults.appendChild(winnerPoints);
  }
}