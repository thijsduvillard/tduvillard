// Get references to both panels and buttons
const panelCV = document.getElementById('panelCV');
const buttonCV = document.getElementById('toggleButtonCV');
const panelMaster = document.getElementById('panelMaster');
const buttonMaster = document.getElementById('toggleButtonMaster');
const panelReference = document.getElementById('panelReference');
const buttonReference = document.getElementById('toggleButtonReference');


// State to track whether each panel is open or closed
let isCVOpen = false;
let isMasterOpen = false;
let isReferenceOpen = false;

// Event listener for the CV button
buttonCV.addEventListener('click', () => {
    if (isCVOpen) {
        // Slide up CV panel
        panelCV.classList.remove('slide-down');
        panelCV.classList.add('slide-up');
        setTimeout(() => { panelCV.style.display = 'none'; }, 10);
    } else {
        // Slide down CV panel
        panelCV.style.display = 'block';
        panelCV.classList.remove('slide-up');
        panelCV.classList.add('slide-down');
    }
    isCVOpen = !isCVOpen;
});

// Event listener for the Master Information button
buttonMaster.addEventListener('click', () => {
    if (isMasterOpen) {
        // Slide up Master panel
        panelMaster.classList.remove('slide-down');
        panelMaster.classList.add('slide-up');
        setTimeout(() => { panelMaster.style.display = 'none'; }, 10);
    } else {
        // Slide down Master panel
        panelMaster.style.display = 'block';
        panelMaster.classList.remove('slide-up');
        panelMaster.classList.add('slide-down');
    }
    isMasterOpen = !isMasterOpen;
});

// Event listener for the Master Information button
buttonReference.addEventListener('click', () => {
    if (isReferenceOpen) {
        // Slide up Master panel
        panelReference.classList.remove('slide-down');
        panelReference.classList.add('slide-up');
        setTimeout(() => { panelReference.style.display = 'none'; }, 10);
    } else {
        // Slide down Master panel
        panelReference.style.display = 'block';
        panelReference.classList.remove('slide-up');
        panelReference.classList.add('slide-down');
    }
    isReferenceOpen = !isReferenceOpen;
});
