'use strict';

var allUsers = [];
// var winnerCircle = [];
// var winnerScore = [];

function myEpiphany (a,b) {
  return b.score - a.score;
}

function retrieveUsers() {
  var retrievedUsers = localStorage.getItem('userData');
  allUsers = JSON.parse(retrievedUsers);
}



// function winners() {
//   for (var i = 0; i < allUsers.length; i++) {
//     winnerScore.push(allUsers[i].score);
//   }
//   winnerScore.sort();
//   for (var j = 0; j < winnerScore.length; j++) {
//     console.log(winnerScore[j]);
//     for (var k = 0; k < allUsers.length; k++) {
//       if (winnerScore[j] === allUsers[k].score) {
//         winnerCircle.push(allUsers[k]);

//       }
//     }
//   }
// }

// Run initial functions to populate user data
retrieveUsers();
// winners();
allUsers.sort(myEpiphany);

//Display Results in Table
var tableName = document.getElementById('table-name');
var tableResults = document.getElementById('table-points');

function onFinal() {
  for (var i = 0; i < allUsers.length; i++) {
    var winnerName = document.createElement('th');
    winnerName.textContent = allUsers[i].name;
    tableName.appendChild(winnerName);

    var winnerPoints = document.createElement('td');
    winnerPoints.textContent = allUsers[i].score;
    tableResults.appendChild(winnerPoints);
  }
}

onFinal();