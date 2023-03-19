// Adding event listener (Listens for enter and button click in the form w/valid zipcode in the textbox)
const form = document.getElementById("zipcode-form");

// Returns the zipcode if there is a valid zipcode, if return 
function checkZip() {
    var text;
    const textbox = document.getElementById("zipcode-textBox").value;
    let zipcodeString = (String) textbox;
    if (zipcodeString.length != 5) {
        return -1; // -1 is a flag!
    }
    let zipcode = parseInt(zipcodeString);
    return zipcode;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
})
