// all the data-time elements into an array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// split those strings into numbers and add them up
const seconds = timeNodes
                    .map(node => node.dataset.time)
                    .map(timeCode => {
                        const [mins, secs] = timeCode.split(':').map(parseFloat);
                        return (mins * 60) + secs;
                    })
                    .reduce((total, videoSeconds) => total + videoSeconds); 

// from the total seconds convert to hh:mm:ss
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
                    
console.log(`${hours}:${mins}:${secondsLeft}`);