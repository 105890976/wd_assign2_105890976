// toggles the hamburger menu and nav bar for mobile/tablet view
function toggleHamburgerMenu() {
    var hamburger = document.getElementById('hamburger-btn');
    var nav = document.getElementById('nav-bar');

    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
}
// closes the nav bar slows redirect to allow for the closing animation 
function closeNavAndRedirect(event) {
    var link = event.target.closest(".nav-item");
    if (!link) {
        return;
    }

    event.preventDefault();
    var hamburger = document.getElementById("hamburger-btn");
    var nav = document.getElementById("nav-bar");

    nav.classList.remove("open");
    hamburger.classList.remove("open");

    setTimeout(function() {
        location.href = link.href;
    }, 100);
}

// Registration Form Validation
function validateRegister() {
    //All fields must be completed.
    //Username: minimum 5 characters; letters, numbers and underscores only.
    //Email: valid email format.
    //Phone number: digits only, 8–15 digits.
    //Password: minimum 10 characters, including:
        //uppercase letters
        //lowercase letters
        //numbers
        //special characters
    //Confirm password must match the password.
    //Gender must be selected.

    var errMsg = "";
    var result = true;

    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var pass = document.getElementById("password").value;
    var confPass = document.getElementById("confirm-password").value;

	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
    var genx = document.getElementById("genx").checked;

    var genreboxes = document.querySelectorAll('input[name="genre[]"]');
    var country = document.getElementById("country").value;

    var usernamePattern = /^[a-zA-Z0-9_]{5,}$/; // pattern that requires only letters, numbers, underscores, and at least 5 characters

    var upperpattern = /[A-Z]/;
    var lowerpattern = /[a-z]/;
    var numpattern = /[0-9]/;
    var specialpattern = /[^a-zA-Z0-9]/; // any letter thats not a-z / A-Z / 0-9
    var digitsOnlyPattern = /^\d+$/;
    // username validation
    if (uname.trim() ==="") {
        errMsg += "Username cannot be empty\n"
    }
    else if (!usernamePattern.test(uname)) {
        errMsg += "Username must be at least 5 characters and contain only letters, numbers, and underscores.\n"
    }

    // email validation
    if (email.includes("@")) {
	    if (email.startsWith("@")) {
			errMsg += "Email cannot start with @ symbol.\n";
		} 
	} else {
		errMsg += "Email must be valid.\n";
	}

    // phone number validation
    if (phone.length < 8 || phone.length > 15) {
        errMsg += "Phone number must 8-15 digits long.\n";
    }
    if (!digitsOnlyPattern.test(phone)) {
         errMsg += "Phone number must contain only digits\n";
    }

    // password validation
    // validates each password requirement seperately for more accurate error messages
    if (pass.length < 10) {
        errMsg += "Password must be at least 10 characters long.\n";
    }
    if (!upperpattern.test(pass)) {
        errMsg += "Password must contain at least one uppercase letter.\n";
    }
    if (!lowerpattern.test(pass)) {
        errMsg += "Password must contain at least one lowercase letter.\n";
    }
    if (!upperpattern.test(pass)) {
        errMsg += "Password must contain at least one uppercase letter.\n";
    }
    if (!numpattern.test(pass)) {
        errMsg += "Password must contain at least one number.\n";
    }
    if (!specialpattern.test(pass)) {
        errMsg += "Password must contain at least one special character.\n";
    }

    if (pass != confPass) {
		errMsg += "Passwords do not match.\n";
	}
    // checks if a gender is checked
    if ((!genm)&&(!genf)&&(!genx)) {			
		errMsg += "A gender must be selected.\n";
	}

    // checks though each genre checkbox to check if at least one preferred genre is selected
    var checked = false;
    for (var i = 0; i < genreboxes.length; i++) {
        if (genreboxes[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        errMsg += "Please select at least one preferred movie genre.\n";
    }
    
    // checks if country is selected
    if (country === "") {
        errMsg += "Please select a country.\n";
    }

    if (errMsg !== "") {
        alert (errMsg);
		result = false;
    }

    return result;
}

// Booking Form Validation
function validateBooking() {
    //Required fields must not be empty.
    //Email must be valid.
    //Phone number must contain at least 10 digits.
    //Screening date and time must not be in the past.
    //Number of tickets must be greater than 0.
    //Payment method:
        //If Voucher → no credit card fields are required or displayed; instead, a textbox
        //for a 12-digit voucher code is shown. No need to validate the voucher.
        //If Online payment → credit card number is required and must contain digits only.
            //Visa/Mastercard: 16 digits
            //Amex: 15 digits
            //Format check only; no real payment processing.

    var errMsg = "";			
    var result = true;

    // email validation

    // phone number validation



    // validate screening date picked in not in the past
    var dateInput = document.getElementById("screening-date").value;
    var selectedDate = new Date(dateInput); //converts input to a date object
    var currentDate = new Date(); //date object with current time/date

    if (selectedDate < currentDate) {
        errMsg += "Screening date cannot be in the past.\n";
    }

    if (errMsg !== "") {
        alert (errMsg);
		result = false;
    }
    return result;
}

// initialises html elements to correct event functions
function init() {
    var hamburger = document.getElementById("hamburger-btn");
    var nav = document.getElementById("nav-bar");

    if (hamburger) {
        hamburger.onclick = toggleHamburgerMenu;
    }

    if (nav) {
        nav.onclick = closeNavAndRedirect;
    }
    var regForm = document.getElementById("form-register");
    if (regForm) {
        regForm.onsubmit = validateRegister;
    }
    

    var bookForm = document.getElementById("form-book");
    if (bookForm) {
        bookForm.onsubmit = validateBooking;
    }
    

}



window.onload = init;