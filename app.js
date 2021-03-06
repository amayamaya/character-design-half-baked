// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headReport = 0;
let middleReport = 0;
let bottomReport = 0;
// set state for all of the character's catchphrases
let catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    // console.log('changing select', headDropdown.value);
    // increment the head change count state
    headReport++;
    // console.log(report);
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    // console.log('changing select', middleDropdown.value);
    // increment the middle change count state
    middleReport++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

// function.displayStats() {
//     reportEl.textContent = `You have changed the middle ${report} times.`
// };

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    // console.log('changing select', bottomDropdown.value);
    // increment the bottom change count state
    bottomReport++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

// function.displayStats() {
//     reportEl.textContent = `You have changed the bottom ${report} times.`
// };

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    catchphrases.push(catchphrasesEl.value);
    console.log('changing select', catchphrasesEl.value);
    // push the new catchphrase to the catchphrase array in state

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You have changed the head ${headReport} times. You have changed the middle ${middleReport} times. You have changed the bottom ${bottomReport} times.`;    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}


function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
