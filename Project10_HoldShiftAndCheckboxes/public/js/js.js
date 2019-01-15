const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {

    let inBetween = false;

    // Check if shift key down
    // AND check if checking(not unchecking)
    if (e.shiftKey && this.checked) {
        // loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("Checking....");
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }


    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));