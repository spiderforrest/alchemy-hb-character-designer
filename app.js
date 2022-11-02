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
let headChanges = 0;
let middleChanges = 0;
let bottomChanges = 0;
// set state for all of the character's catchphrases
const catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const value = headDropdown.value;
    // increment the head change count state
    headChanges++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});
middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const value = middleDropdown.value;
    // increment the middle change count state
    middleChanges++;
    // update the dom for the middle (use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});
bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const value = bottomDropdown.value;
    // increment the bottom change count state
    bottomChanges++;
    // update the dom for the bottom (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newInputCatchphrase = catchphraseInput.value;
    // check if input is empty and stop
    if (newInputCatchphrase === '') return;
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(newInputCatchphrase);
    // clear out the form input's value so it's empty to the user
    newInputCatchphrase.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    // hold the catchphrase string, default to none.
    let catchphraseString = '';
    // generate the string
    const changesString = `You have changed the head ${headChanges} times, the body ${middleChanges} times, and the pants ${bottomChanges} times.`;
    // check how many catchprases and either hide the catchprase message or handle plural because it
    // always bothers me when websites could just do a quick check and don't
    if (catchphraseArray.length === 1) {
        catchphraseString = " And nobody can forget your character's classic catchphrase:";
    } else if (catchphraseArray.length > 1) {
        catchphraseString = " And nobody can forget your character's classic catchphrases:";
    }
    reportEl.textContent = changesString + catchphraseString;
}

function displayCatchphrases() {
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    // clear out the DOM for the currently displayed catchphrases
}
