function alertValue() {
    // Make the value
    let alertInputValue = document.getElementById("textBox").value;
    let ageValue = document.getElementById("ageTXTBox").value;
    // Alert the value

    if (alertInputValue === '') {

        alert("Please put in an input.")

    }
    else {

        alert(alertInputValue)

    }

    if (ageValue === "") {

        alert("Please put an input.")

    }
    else {

        alert(ageValue);
    }

        }

