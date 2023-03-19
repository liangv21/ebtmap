// Adding event listener (Listens for enter and button click in the form w/valid zipcode in the textbox)
window.addEventListener("load", (event) => {
    const form = document.getElementById("zipcode-form");

    function textFromTextBox() {
        const textbox = document.getElementById("zipcode-textBox").value;
        return "" + textbox;
    }

    // Returns the zipcode if there is a valid zipcode, if return 
    function checkZip() {
        let zipcodeString = textFromTextBox();
        if (zipcodeString.length != 5) { return -1; } // -1 is a flag! 
        const zipcode = parseInt(zipcodeString);
        if (isNaN(zipcode)) { return -1; } // -1 is a flag! 
        return zipcodeString; 
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let zip = checkZip();
        if (zip == -1) {
            alert("Your entered Zipcode \'" + textFromTextBox() + "\' was not found. Please re-enter another zipcode");
        } else {
            localStorage.setItem("objectToPass", zip);
            window.location.href = "map.html";
    }});
})


