# Pub Trivia: Final Project for Code 201

## Summary
"Pub Trivia" is a  a trivia game for one-to-four players. Players are allowed to choose between three categories, each containing ten questions each. Each player is represented by an avatar, containing their name and their drink of choice (wine, beer, cocktails and tea, for our non-alcoholic friends). 

As players answer questions, their score and avatar drink will change. Correct answers add to their score tally; incorrect answers fill up their drink, bit by bit, as they take a drink for each wrong answer. If a player completely fills their glass (which will occur when they answer five questions incorrectly), they have to finish their drink and start a new one.

## Technical Stack
* HTML
* CSS
* Javascript (vanilla)

## Members:
- Morgan Fogarty
- Keeley Hammond
- Grayson Meindl
- Jade Rager

## Minimum Viable Product: 
- A trivia game that allows users to answer five questions and returns their score. 
- There will be three HTML pages: index, play and about.
- “index.html” allows the user to create an account and choose a beer avatar
- “play.html” takes the user to the trivia game
- “about.html” is where the user is taken to show their scores - this page displays high scores, and the bios of the game creators.
- The score of each user will be displayed under their name during each round.
- The scores of each user will be stored in localStorage and will persist after page changes.

## Additional Features:
- Timed Lightning Rounds: Randomize the photo shown per lightning round
- Animated beer icons for your score display: increment the beer level with each score.
- Allow users to select their own names and drink avatars
- Add 3-4 categories of questions for the trivia
- Randomized questions (from a selection of many questions per category)
- Difficulty levels (easy, medium, hard)
- Saved game sessions
- Multiple drink types to choose from (for non-alcoholic friends)
- Appealing styling and animation in the CSS

## Favorite Challenges
* Creating closure to allow for multiple users answering multiple questions - this was our first exposure to using closures, and was a baptism by fire.
* Incrementing both scores and drink levels, using two different metrics.
* Creating multiple sessions for players.

## Special Thanks
* Amy Chen, for the help and guidance.
* Morgan Fogarty, for the rubber-ducking.
* Aaron Crowes, our instructor.
* The Class of 201 (2017) for support and volunteering for tests

## About the Developer
Keeley Hammond is a software developer living in Portland, OR. She enjoys pub trivia, and enjoys it even more when playing with a team of friends.
