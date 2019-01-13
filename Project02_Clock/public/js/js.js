
const secondHand = document.querySelector('.second-hand'); // grab our second-hand
const minuteHand = document.querySelector('.min-hand'); // grab our minute-hand
const hourHand = document.querySelector('.hour-hand'); // grab our hour-hand

/**
 *  Grabs the current time and sets each clock hand to its
 *  appropriate time interval.
 * 
 */
function setDate() {

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // add 90deg so defauulis up and down
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90; 
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = ((hours / 12) * 360) + 90; 
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000); // set our 1 sec intervals


setDate();