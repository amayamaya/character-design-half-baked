// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const catchphrasesEl = document.getElementById('catchphrases');
// const catchphrase = document.getElementById('catchphrase');
// const catchphraseList = document.getElementById('catchphrase-list');

let headReport = 0;
let middleReport = 0;
let bottomReport = 0;
let catchphrases = [];

headDropdown.addEventListener('change', () => {
    // console.log('changing select', headDropdown.value);
    headReport++;
    // console.log(report);
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    middleReport++;
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    bottomReport++;
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    catchphrases.push(catchphraseInput.value);
    // console.log('changing input', catchphraseInput.value);
    // console.log(catchphrases);
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You have changed the head ${headReport} times. You have changed the middle ${middleReport} times. You have changed the bottom ${bottomReport} times.`;    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';
    for (let catchphrase of catchphrases) {
        const li = document.createElement('div');
        li.textContent = catchphrase;
        catchphrasesEl.append(li);
    }
}
   

