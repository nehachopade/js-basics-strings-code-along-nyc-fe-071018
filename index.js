// Write your code in this file!
const currentUser="Neha Chopade";
let welcomeMessage='Welcome to Flatbook, '+ currentUser + '!';

const upperCaseCurrentUser = currentUser.toUpperCase();
let excitedWelcomeMessage='WELCOME TO FLATBOOK, '+ upperCaseCurrentUser +"!";

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
expect(shortGreeting).to.have.string(firstInitial);
expect(shortGreeting).to.not.have.string(restOfName);
let shortGreeting="Welcome, "+ firstInitial;