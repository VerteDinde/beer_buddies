'use strict';

var allUsers = [];

function myEpiphany (a,b) {
  return b.score - a.score;
}

function retrieveUsers() {
  var retrievedUsers = localStorage.getItem('userData');
  allUsers = JSON.parse(retrievedUsers);
}

// Run initial functions to populate user data
retrieveUsers();

allUsers.sort(myEpiphany);

//Display Results in Table
var tableName = document.getElementById('table-name');
var tableResults = document.getElementById('table-points');
var winnerRow = document.getElementById('winner-row');

function onFinal() {
  for (var i = 0; i < allUsers.length; i++) {
    var winnerName = document.createElement('th');
    winnerName.textContent = allUsers[i].name;
    tableName.appendChild(winnerName);

    var winnerPoints = document.createElement('td');
    winnerPoints.textContent = allUsers[i].score;
    tableResults.appendChild(winnerPoints);
  }
  // add crown to winner
  var winnerTd = document.createElement('td');
  var winnerCrown = document.createElement('img');
  winnerCrown.id = 'victory';
  winnerCrown.setAttribute('src', 'images/crown.png');
  winnerRow.appendChild(winnerTd);
  winnerTd.appendChild(winnerCrown);
}

onFinal();