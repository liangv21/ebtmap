// Adding event listener (Listens for enter and button click in the form w/valid zipcode in the textbox)
const form = document.getElementById("zipcode-form");

// Returns the zipcode if there is a valid zipcode, if return 
function checkZip() {
    let textbox = document.getElementById("zipcode-textBox");
    let zipcodeString = (String) textbox.value;
    if (zipcodeString.length != 5) {
        return -1; // -1 is a flag!
    }
    let zipcode = parseInt(zipcodeString);
    return zipcode;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
})
