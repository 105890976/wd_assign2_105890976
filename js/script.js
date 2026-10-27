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
        errMsg += "Username cannot be empty\n";
    }
    else if (!usernamePattern.test(uname)) {
        errMsg += "Username must be at least 5 characters and contain only letters, numbers, and underscores.\n";
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

// Global variables to track payment method and card type selection state
var currentPaymentMethod = "";
var currentCardType = "";      


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

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var digitsOnlyPattern = /^\d+$/;

    var movie = document.getElementById("movie").value;

    var dateInput = document.getElementById("screening-date").value;
    var selectedDate = new Date(dateInput); //converts input to a date object
    var currentDate = new Date(); //date object with current time/date

    var ticketnum = document.getElementById("num-tickets").value;
    var tickettype = document.getElementById("tickettype").value;

    var vouchernum = document.getElementById("vouchercode").value;
    var cardnum = document.getElementById("cardnumber").value.trim();

    var billemail = document.getElementById("billemail").value;

    // filled in name fields
    if (fname == "" || lname == "") {
        errMsg += "Please enter your full name.\n";
    }

    // email validation
    if (email == "") {
        errMsg += "Please enter your email.\n";
    }
    if (email.includes("@")) {
	    if (email.startsWith("@")) {
			errMsg += "Email cannot start with @ symbol.\n";
		} 
	} else {
		errMsg += "Email must be valid.\n";
	}

    // phone number validation
    if (phone == "") {
        errMsg += "Please enter your phone number.\n";
    }
    if (phone.length < 10) {
        errMsg += "Phone number must contain at least 10 digits.\n";
    }   
    if (!digitsOnlyPattern.test(phone)) {
        errMsg += "Phone number must contain only digits.\n";
    }

    // validates a movie is picked
    if (movie == "") {
        errMsg += "Please select a movie.\n";
    }

    // validate screening date picked in not in the past
    if (dateInput == "") {
        errMsg += "Please select a date\n";
    } else if (selectedDate < currentDate) {
        errMsg += "Screening date cannot be in the past.\n";
    }

    if (ticketnum < 1) {
        errMsg += "Number of tickets must be greater than 0.\n";
    }

    
    if (ticketnum > 10) {
        errMsg += "Max 10 tickets per customer.\n";
    }

    if (tickettype == "") {
        errMsg += "Please select a ticket type.\n";
    }
    // payment method validation
    // validates voucher
    if (currentPaymentMethod === "") {
        errMsg += "Please select a payment method (Voucher or Online Payment).\n";
    } else if (currentPaymentMethod === "voucher") {
        if (vouchernum === "") {
            errMsg += "Please enter your voucher code.\n";
        } else if (vouchernum.length !== 12) {
            errMsg += "Voucher code must be exactly 12 digits.\n";
        }
    } else if (currentPaymentMethod === "card") {
        if (currentCardType === "") {
            errMsg += "Please select a card type.\n";
        } else {
            if (cardnum === "") {
                errMsg += "Please enter your card number.\n";
            }
            if (!digitsOnlyPattern.test(cardnum)) {
                errMsg += "Card number must contain digits only.\n";
            } else {
                if (currentCardType === "visamaster") {
                    if (cardnum.length !== 16) {
                        errMsg += "Visa/Mastercard number must be exactly 16 digits.\n";
                    } else if (!luhnvalid(cardnum)) {
                        errMsg += "Invalid Visa/Mastercard number (failed checksum validation).\n";
                    }
                } else if (currentCardType === "amex") {
                    if (cardnum.length !== 15) {
                        errMsg += "Amex card number must be exactly 15 digits.\n";
                    } else if (!luhnvalid(cardnum)) {
                        errMsg += "Invalid Amex card number (failed checksum validation).\n";
                    }
                }
            }
        }

        if (billemail === "") {
        errMsg += "Please enter your billing email address.\n";
        }
        if (billemail.includes("@")) {
            if (email.startsWith("@")) {
                errMsg += "Billing email cannot start with @ symbol.\n";
            } 
        } else {
            errMsg += "Email must be valid.\n";
        }
    }

    if (errMsg !== "") {
        alert (errMsg);
		result = false;
    }
    return result;
}

function showvoucher() {
    currentPaymentMethod = "voucher";
    var voucherinfo = document.getElementById("vouchercontainer");
    var paymentinfo = document.getElementById("paymentcontainer");
    paymentinfo.style.display = "none";
    voucherinfo.style.display = "block";
}

function showcard() {
    currentPaymentMethod = "card";
    var voucherinfo = document.getElementById("vouchercontainer");
    var paymentinfo = document.getElementById("paymentcontainer");
    paymentinfo.style.display = "block";
    voucherinfo.style.display = "none";
}

function visacardtype() {
    currentCardType = "visamaster";
    var cardnum = document.getElementById("cardnumber");
    cardnum.placeholder = "xxxx xxxx xxxx xxxx";
}

function amexcardtype() {
    currentCardType = "amex";
    var cardnum = document.getElementById("cardnumber");
    cardnum.placeholder = "3xxx xxxxxx xxxxx";
}

function copyemail() {
    var email = document.getElementById("email").value;
    document.getElementById("billemail").value = email;
}


function luhnvalid(cardnum) {
    var sum = 0;
    var doubleSecond = false;
    // loops though the card number, starting from the end 
    for (var i = cardnum.length - 1; i >= 0; i--) {
        // converts i-th element in the cardnum string to a decimal value
        var digit = parseInt(cardnum.charAt(i), 10);

        if (doubleSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        doubleSecond = !doubleSecond;
    }
    // was missing this line in submitted code
    return sum % 10 === 0;
} 

// loading movies.json file
// global variable for movies
var movies = [];

function loadmoviegrid() {
    var gridContainer = document.getElementById('movies-grid');
    if (!gridContainer) {
        return; // exit if not on the movies page
    }

    fetch("data/movies.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            movies = data;
            var htmlContents = "";
            // loop through json data
            for (var i = 0; i < data.length; i++) {
                var movie = data[i];
                htmlContents += '<div class="movie-card">';
                // checks for valid movie poster file
                if (movie.poster) {
                    htmlContents += '<img src="' + movie.poster + '" alt="' + movie.title + ' Poster" class="movie-poster">';
                }
                htmlContents += '<div class="movie-info">';
                htmlContents += '<h3>' + movie.title + '</h3>';
                htmlContents += '<p><strong>Genre:</strong> ' + movie.genre + ' | <strong>Rating:</strong> ' + movie.ageRating + '</p>';
                htmlContents += '<p><strong>Runtime:</strong> ' + movie.runningTime + '</p>';
                htmlContents += '<p>' + movie.description + '</p>';
                htmlContents += '<p><strong>Screening:</strong> ' + movie.screening + '</p>';
                htmlContents += '<p><strong>Price:</strong> $' + movie.price.toFixed(2) + '</p>';
                htmlContents += '<button type="button" class="book-btn" onclick="gotobooking(\'' + movie.id + '\')">Book Now</button>';
                htmlContents += '</div></div>';
            }
            gridContainer.innerHTML = htmlContents;
        })
        .catch(function(error) {
            console.error('Error loading movies:', error);
        });
}

function getrecommended() {
    var selectedGenre = document.getElementById("rec-genre").value;
    var selectedAge = document.getElementById("rec-age").value;
    var selectedViewing = document.getElementById("rec-viewing").value;

    var recommendedContainer = document.getElementById('recommendation-results');

    // exits if not on recommendation page
    if (!recommendedContainer) {
        return;
    }

    // gets movie data if it has not yet been loaded
    if (movies.length === 0) {
        fetch("data/movies.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                movies = data;
                processrecommended(selectedGenre, selectedViewing, selectedAge, recommendedContainer);
            })
            .catch(function(error) {
                console.error('Error loading movies for recommendations:', error);
            });
    } else {
        processrecommended(selectedGenre, selectedViewing, selectedAge, recommendedContainer);
    }
}

function updateprice() {
    var movieSelect = document.getElementById("movie");
    var ticketTypeSelect = document.getElementById("tickettype");
    var numTicketsInput = document.getElementById("num-tickets");
    var totalPriceField = document.getElementById("total-price");

    if (!movieSelect || !ticketTypeSelect || !numTicketsInput || !totalPriceField) {
        return;
    }

    var selectedMovieTitle = movieSelect.value;
    var ticketType = ticketTypeSelect.value;
    var numTickets = parseInt(numTicketsInput.value, 10) || 0;

    var basePrice = 0;
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].title === selectedMovieTitle) {
            basePrice = movies[i].price;
            break;
        }
    }

    var multiplier = 1.0;
    if (ticketType === "student" || ticketType === "senior") {
        multiplier = 0.5;
    } else if (ticketType === "child") {
        multiplier = 0.25; 
    }

    var totalPrice = basePrice * multiplier * numTickets;
    totalPriceField.value = "$" + totalPrice.toFixed(2);
}

function processrecommended(selectedGenre, selectedViewing, selectedAge, resultsContainer) {
    resultsContainer.innerHTML = "";
    var matchFound = false;
    var htmlContent = "";
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var genreMatch = (selectedGenre === "" || movie.genre === selectedGenre);

        var viewingMatch = false;
        if (selectedViewing === "") {
            viewingMatch = true;
        } else {
            for (var j = 0; j < movie.viewing.length; j++) {
                if (movie.viewing[j] === selectedViewing) {
                    viewingMatch = true;
                    break;
                }
            }
        }

        var ageMatch = false;
        if (selectedAge === "") {
            ageMatch = true;
        } else {
            for (var k = 0; k < movie.ageGroup.length; k++) {
                if (movie.ageGroup[k] === selectedAge) {
                    ageMatch = true;
                    break;
                }
            }
        }

        // ff selected filters match, build the card
        if (genreMatch && viewingMatch && ageMatch) {
            matchFound = true;
            htmlContent += '<div class="movie-card">';
            if (movie.poster) {
                htmlContent += '<img src="' + movie.poster + '" alt="' + movie.title + ' Poster" class="movie-poster">';
            }
            htmlContent += '<div class="movie-info">';
            htmlContent += '<h3>' + movie.title + '</h3>';
            htmlContent += '<p><strong>Genre:</strong> ' + movie.genre + ' | <strong>Rating:</strong> ' + movie.ageRating + '</p>';
            htmlContent += '<p><strong>Runtime:</strong> ' + movie.runningTime + '</p>';
            htmlContent += '<p>' + movie.description + '</p>';
            htmlContent += '<p><strong>Screening:</strong> ' + movie.screening + '</p>';
            htmlContent += '<p><strong>Price:</strong> $' + movie.price.toFixed(2) + '</p>';
            htmlContent += '<button type="button" class="book-btn" onclick="gotobooking(\'' + movie.id + '\')">Book Now</button>';
            htmlContent += '</div></div>';
        }
    }
    if (!matchFound) {
        htmlContent = "<p>No movies match your selected preferences. Try changing your filters!</p>";
    }

    resultsContainer.innerHTML = htmlContent;
}
// redirect to booking page with the movie selected
function gotobooking(movieId) {
    window.location.href = "booking.html?movieId=" + movieId;
}

function setupbooking() {
    var selectedMovie = document.getElementById("movie");
    if (!selectedMovie) {
        return;
    }
    fetch("data/movies.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            movies = data;
            
            // builds options dynamically from JSON data
            var optionsHtml = '<option value="">Select a movie</option>';
            for (var i = 0; i < data.length; i++) {
                // movie title sent as value for form
                optionsHtml += '<option value="' + data[i].title + '">' + data[i].title + '</option>';
            }
            selectedMovie.innerHTML = optionsHtml;
            
            var urlParams = new URLSearchParams(window.location.search);
            var preselectedId = urlParams.get('movieId');

            if (preselectedId) {
                for (var j = 0; j < data.length; j++) {
                    if (data[j].id === preselectedId) {
                        selectedMovie.value = data[j].title; // Preselects the movie
                        break;
                    }
                }
            }
        })
        .catch(function(error) {
            console.error('Error loading movies for booking form:', error);
        });
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
    
    // logic for detecting button input and hiding/showing appropriate payment option
    var voucherbtn = document.getElementById("voucher");
    var cardbtn = document.getElementById("card");

    if (voucherbtn) {
        voucherbtn.onclick = showvoucher;
    }
    if (cardbtn) {
        cardbtn.onclick = showcard;
    }
        
    // logic for displaying correct placeholder card info
    var visabtn = document.getElementById("visamaster");
    var amexbtn = document.getElementById("amex");

    if (visabtn) {
        visabtn.onclick = visacardtype;
    }
    if (amexbtn) {
        amexbtn.onclick = amexcardtype;
    }

    var sameemailbtn = document.getElementById("aboveemail");
    if (sameemailbtn) {
        sameemailbtn.onclick = copyemail;
    }
    // loads movie grid 
    loadmoviegrid();
    // loads movies in booking page
    setupbooking();

    var recommendBtn = document.getElementById("recommend-btn");
    if (recommendBtn) {
        recommendBtn.onclick = getrecommended;
    }


    // updates ticket price depending on movie, ticket type, and quantity
    var movieSelect = document.getElementById("movie");
    var ticketTypeSelect = document.getElementById("tickettype");
    var numTicketsInput = document.getElementById("num-tickets");

    if (movieSelect) {
        movieSelect.onchange = updateprice;
    }
    if (ticketTypeSelect) {
        ticketTypeSelect.onchange = updateprice;
    }
    if (numTicketsInput) {
        numTicketsInput.oninput = updateprice;
}
}



window.onload = init;