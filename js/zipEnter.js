// Adding event listener (Listens for enter and button click in the form w/valid zipcode in the textbox)
const form = document.getElementById("zipcode-form");

// Returns the zipcode if there is a valid zipcode, if return 
function checkZip() {
    const textbox = document.getElementById("zipcode-textBox").value;
    let zipcodeString = "" + textbox;
    if (zipcodeString.length != 5) { return -1; } // -1 is a flag! 
    const zipcode = parseInt(zipcodeString);
    if (isNAN(zipcode)) { return -1; } // -1 is a flag! 
    return zipcode;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // getData(checkZip()); should call upon
})
