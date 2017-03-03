'use strict';
var sportsQuestions = [];
var entertainmentQuestions = [];
var feminismQuestions = [];
var chosenCategory;

// all localStorage functions here
function storeCategory() {
  var categoryJSON = JSON.stringify(chosenCategory);
  localStorage.setItem('categoryChoice', categoryJSON);
}

//Question Constructor Below This Line
function Question(question, right, wrongOne, wrongTwo, wrongThree, category) {
  this.question = question;
  this.right = right,
  this.wrongOne = wrongOne;
  this.wrongTwo = wrongTwo;
  this.wrongThree = wrongThree;
  this.category = category;
}

//Sports Questions Below This Line
var sportOne = new Question('When did The University of Kansas last win the NCAA National Championship?', '2008', '2012', '1994', '1956', 'sports');
sportsQuestions.push(sportOne);

var sportTwo = new Question('As of June 20, 2016, how many days has it been since the Flyers won the Stanley Cup?', '15,000 days', '25,000 days', '24 days', '3,000 days', 'sports');
sportsQuestions.push(sportTwo);

var sportThree = new Question('What record number of beers did MLB Hall of Famer Wade Boggs drink in a single day?', '107', '64', '78', '33', 'sports');
sportsQuestions.push(sportThree);

var sportFour = new Question('When was the first celebratory champagne bottle pop after a motor race?', 'The 1967 24 Hours of Le Mans', 'The 1958 Monaco Grand Prix', 'The 1987 Sonoma Motor Classic Festival', 'The 1974 Monterey Motor Classic', 'sports');
sportsQuestions.push(sportFour);

var sportFive = new Question('Who is the last non-quarterback to win NFL MVP?', 'Adrian Peterson', 'Ray Lewis', 'LaDainian Tomlinson', 'Shaun Alexander', 'sports');
sportsQuestions.push(sportFive);

var sportSix = new Question('The 1942 and 1946 FIFA World Cup tournaments were cancelled due to WWII and its aftermath. Which two countries sought to host these events?', 'Nazi Germany & Brazil', 'France & Sweden', 'Argentina & Canada', 'Portugal & Uraguay', 'sports');
sportsQuestions.push(sportSix);

var sportSeven = new Question('What year was Table Tennis added to the Summer Olympics?', '1988', '1980', '1996', '1972', 'sports');
sportsQuestions.push(sportSeven);

var sportEight = new Question('Against which MLB team did Hank Aaron hit his 500th homerun?', 'San Fransico Giants', 'Atlanta Braves', 'Milwaukee Brewers', 'Cincinnati Reds', 'sports');
sportsQuestions.push(sportEight);

var sportNine = new Question('Which current NBA team belonged to the American Basketball Association (ABA) before the league\'s merge with the NBA in 1976?', 'Indianna Pacers', 'LA Clippers', 'LA Lakers', 'Chicago Bulls', 'sports');
sportsQuestions.push(sportNine);

var sportTen = new Question('in 1994, NBA legend Michael Jordan played Double-A minor league baseball for an affiliate of the Chicago White Sox. Which South-Eastern team did he play for?', 'Birminham Barons', 'Charleston Riverdogs', 'Memphis Redbirds', 'Shreveport Captains', 'sports');
sportsQuestions.push(sportTen);

//Entertainment Questions Below This Line
var entertainOne = new Question('When asked what he had done with his life to merit an invitation to the White House, to which First Lady did Miles Davis respond: \'\'Well, I\'ve changed the course of music five or six times. What have you done except f**k the president?\'\'', 'Nancy Reagan', 'Barbara Bush', 'Jackie Kennedy', 'Betty Ford', 'entertainment');
entertainmentQuestions.push(entertainOne);

var entertainTwo = new Question('In the film Pineapple Express, which Star Wars creature is referenced by James Franco during his captivity?', 'Rancor', 'Tauntaun', 'Jawa', 'Wookie', 'entertainment');
entertainmentQuestions.push(entertainTwo);

var entertainThree = new Question('Who wrote the poetry spoken in Beyonce\'s Lemonade film', 'Warsan Shire', 'Roxane Gay', 'Chiminanda Ngozi Adichi', 'bell hooks', 'entertainment');
entertainmentQuestions.push(entertainThree);

var entertainFour = new Question('In what year was Wu-Tang member Raekwon\'s gold-selling \'\'Only Built for Cuban Linx\'\' released?', '1995', '1994', '1996', '1997', 'entertainment');
entertainmentQuestions.push(entertainFour);

var entertainFive = new Question('Which Hip-Hop artist has acted in films alongside Edward Norton, Jack Black, and Bruce Willis?', 'Mos Def', 'Ludacris', 'Queen Latifah', 'Ice Cube', 'entertainment');
entertainmentQuestions.push(entertainFive);

var entertainSix = new Question('In the 1942 classic, Casablanca, Humphrey Bogart\'s character Rick Blaine speaks the famous line: \'\'Of all the ____ joints, in all the towns in the world, she walks into mine.\'\'', 'gin', 'whiskey', 'tequila', 'wine', 'entertainment');
entertainmentQuestions.push(entertainSix);

var entertainSeven = new Question('Dr. Dre isn\'t known for his medical advice, but he suggests that his audiences "smoke weed" how often?', 'Everyday', 'Twice a week', 'Never', 'Monthly', 'entertainment');
entertainmentQuestions.push(entertainSeven);

var entertainEight = new Question('Lost in La Mancha is a 2002 documentary about which renowned Sci/Fi and Fantasy director\'s failed attempt to finish a film about the story of Don Quixote?', 'Terry Gilliam', 'J.J. Abrams', 'Guillermo del Toro', 'Ridley Scott', 'entertainment');
entertainmentQuestions.push(entertainEight);

var entertainNine = new Question('Who was the first ever Black Oscar winner in a category outside of acting?', 'Issac Hayes', 'Stevie Wonder', 'Hattie McDaniel', 'Sidney Poitier', 'entertainment');
entertainmentQuestions.push(entertainNine);

var entertainTen = new Question('What South-Western town is the setting for the acclaimed AMC television series Breaking Bad?', 'Albequerque', 'Santa Fe', 'Phoenix', 'San Antonio', 'entertainment');
entertainmentQuestions.push(entertainTen);

//Feminism Questions Below This Line
var femOne = new Question('The Equal Rights Amendment was first introduced to Congress in 1923 and intended to guarantee equal rights for women. In what year was this Amendment ratified?', 'It has not yet been ratified', '1977', '1979', '1982', 'feminism');
feminismQuestions.push(femOne);

var femTwo = new Question('Who are the current female Supreme Court members?', 'Justice Sonya Sotomayor, Justice Ruth Bader Ginsburg, Justice Elena Kagan', 'Justice Notorious R.B.G., Justice Notorious B.I.G., Justice Antonin Scalia', 'Justice Sandra Day O\'Connor, Justice Sonya Sotomayor, Justice Ruth Bader Ginsburg', 'Justice Michelle Obama, Justice Condoleeza Rice, Justice Hillary Clinton', 'feminism');
feminismQuestions.push(femTwo);

var femThree = new Question('Who was the first woman to win the Nobel Prize for Science (first for Physics, then years later in Chemistry)?', 'Marie Curie', 'Ada Lovelace', 'Rachel Carson', 'Sally Ride', 'feminism');
feminismQuestions.push(femThree);

var femFour = new Question('What is Intersectional Feminism?', 'The view that women experience oppression in varying degrees of intensity.', 'Feminism at traffic intersections' , 'Feminism for cats', 'Black Lives Matter', 'feminism');
feminismQuestions.push(femFour);

var femFive = new Question('Which feminist author famously wrote, \'\'Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.\'\' ?', 'Audre Lorde', 'Angela Davis', 'Gloria Steinem', 'Alice Walker', 'feminism');
feminismQuestions.push(femFive);

var femSix = new Question('Which Riot Grrrl said, \'\'There\'s just as many different kinds of feminism as there are women in the world.\'\'?', 'Kathleen Hanna', 'Tobi Vail', 'Corin Tucker', 'Kathi Wilcox', 'feminism');
feminismQuestions.push(femSix);

var femSeven = new Question('Who created \'\'Feminist Frequency,\'\' a pop culture critique site with a feminist bent?', 'Anita Sarkeesian', 'Alona King', 'Ellen Pao', 'Susan Wojcicki', 'feminism');
feminismQuestions.push(femSeven);

var femEight = new Question('What does the term Anarcha feminist mean?', 'An Anarchist Feminist', 'A Feminist OB/GYN', 'A Spider Feminist', 'The Queen of all Feminists', 'feminism');
feminismQuestions.push(femEight);

var femNine = new Question('Where was Beyonce\'s "Lemonade" filmed?', 'New Orleans', 'Houston', 'New York', 'Los Angeles', 'feminism');
feminismQuestions.push(femNine);

var femTen = new Question('Assata Shakur is most known for what?','All listed answers', 'Being a lead-member of the Black Panther Party in Harlem', 'Being named to the FBI\'s most wanted list in 2013', 'Being Tupac Shakur\'s godmother', 'feminism');
feminismQuestions.push(femTen);

//Category Selector function
function chooseCategory() {
  var catSport = document.getElementById('sports');
  var sportText = document.getElementById('sport-text');
  catSport.addEventListener('click', categorySelector);
  sportText.addEventListener('click', categorySelector);
  var catEnt = document.getElementById('entertainment');
  var entertainText = document.getElementById('entertain-text');
  catEnt.addEventListener('click', categorySelector);
  entertainText.addEventListener('click', categorySelector);
  var catFem = document.getElementById('feminism');
  var femText = document.getElementById('fem-text');
  catFem.addEventListener('click', categorySelector);
  femText.addEventListener('click', categorySelector);

  function categorySelector(event) {
    event.preventDefault();
    var clickedCategory = event.target;
    if (clickedCategory === catSport || clickedCategory === sportText) {
      chosenCategory = sportsQuestions;
      storeCategory(chosenCategory);
      window.location.replace('play.html');
    }
    if (clickedCategory === catEnt || clickedCategory === entertainText) {
      chosenCategory = entertainmentQuestions;
      storeCategory(chosenCategory);
      window.location.replace('play.html');
    }
    if (clickedCategory === catFem || clickedCategory === femText) {
      chosenCategory = feminismQuestions;
      storeCategory(chosenCategory);
      window.location.replace('play.html');
    }
  }
}

chooseCategory();