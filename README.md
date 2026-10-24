# COS10005 Assignment 2
Web Development Assignment 2 - Movie Discovery &amp; Ticket Booking Website

## Website structure
### Directory and File Organization
```
wd_assign2_105890976
├─ index.html
├─ movies.html
├─ recommend.html
├─ register.html
├─ booking.html
├─ watchlist.html
├─ css/
│ └─ style.css
├─ js/
│ └─ script.js
├─ images/
│ ├─ placeholer.jpg
│ ├─ movie1.jpg
│ └─ movie...
├─ data/
│ └─ movies.json
└─ README.md
```
### Site Architecture
- Home page that provides the user with info about the website.
- User can navigate to any page from any page
- User can go straight to the booking page from the movie or recommendations page by clicking book now
- Movie panel info is displayed dynamically depending on screen size
- Nav menu is displayed as a hamburger menu for easier navigation on smaller screens (tablets/phones)
## Mercury link
https://mercury.swin.edu.au/cos10005/s105890976/wd_assign2/wd_assign2_105890976/index.html
## GitHub repository link
[wd_assign2_105890976](https://github.com/105890976/wd_assign2_105890976)

## Explanation of JavaScript validation logic
### Registration Form Validation
```
- All fields must be completed.
- Username: minimum 5 characters; letters, numbers and underscores only.
- Email: valid email format.
- Phone number: digits only, 8–15 digits.
- Password: minimum 10 characters, including:
    - ○ppercase letters
    - lowercase letters
    - numbers
    - special characters
    - Confirm password must match the password.
Gender must be selected
```
#### Explaination
If statements that check each field against its requirements, giving the user a warning popup and preventing the form from being submitted if there is an error.

### Booking Form Validation
```
Required fields must not be empty.
Email must be valid.
Phone number must contain at least 10 digits.
Screening date and time must not be in the past.
Number of tickets must be greater than 0.
Payment method:
    If Voucher → no credit card fields are required or displayed; instead, a textbox
    for a 12-digit voucher code is shown. No need to validate the voucher.
    If Online payment → credit card number is required and must contain digits only.
        - Visa/Mastercard: 16 digits
        - Amex: 15 digits
        - Format check only; no real payment processing.
            - Luhn Algorithm Validator, checks for if that card can exist, not that if its a valid/active card
            - add js to automatically show cards type
            Visa - starts with 4
            MasterCard - starts with 51 — 55
            American Express - starts with 34 or 37

```

#### Explaination
If statements that check each field against its requirements, giving the user a warning popup and preventing the form from being submitted if there is an error.

Payment validation is only checked for the selected payment method. Online payment validation checks for a valid card value using the Luhn algorithm.

**Luhn Algorithm Validator**
1. Start from the rightmost digit (excluding the check digit)
2. Double every second digit moving left
3. If the result is greater than 9, subtract 9
4. Sum all digits
5. If total % 10 == 0 → the number is valid

URL query parameter used to automatically fill in the booking page movie with the movie that the user has selected

## Issues or limitations
**Limitations**

Limited by available time to complete the watchlist page

No backend database for user accounts
**Issues**

When selecting a movie from the Movies or Recommended page, the price for the tickets is not automatically updated, and will nto update until the ticket amount or type is changed. Since the user must at least select a ticket type, the price will update eventually

## References change to harvard
Wikipedia Contributors (2019). Luhn algorithm. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Luhn_algorithm [Accessed 24 Oct. 2026].

Karki, S. (2026). How Credit Card Validation Works (Luhn algorithm explained for engineers). [online] Medium. Available at: https://medium.com/@shishir-karki/how-credit-card-validation-works-luhn-algorithm-explained-for-engineers-cf6d6b998e41 [Accessed 24 Oct. 2026].

HTML Code Generator. (2025). HTML country select drop-down list. [online] Available at: https://www.html-code-generator.com/drop-down/country-names [Accessed 24 Oct. 2026].

**movie sources**

**icon source**

https://png.pngtree.com/png-vector/20230910/ourmid/pngtree-movie-reel-illustration-icon-vector-png-image_10043258.png

**index page image source**

https://png.pngtree.com/png-clipart/20230917/original/pngtree-film-and-entertainment-concept-art-graphic-design-vector-png-image_12282472.png

**arriety**

Yonebayashi, H., Norton, M., Miyazaki, H., Niwa, K., Poehler, A., Arnett, W. and Shida, M. (2012). Karigurashi no arietty. [online] IMDb. Available at: https://www.imdb.com/title/tt1568921/ [Accessed 24 Oct. 2026].

https://static.wikia.nocookie.net/studio-ghibli/images/f/f7/The_Secret_World_of_Arrietty.jpg/revision/latest?cb=20210306220734

**ghost in the shell**

Shirow Masamune and Kazunori Itô (1995). Kôkaku Kidôtai. [online] IMDb. Available at: https://www.imdb.com/title/tt0113568/ [Accessed 24 Oct. 2026].

https://m.media-amazon.com/images/M/MV5BNzljMjA3MTQtMjM1OS00OGJjLWJiYzctZDRiMTk1NWI5YzQ5XkEyXkFqcGc@._V1_.jpg

**iron lung**

Fischbach, M., Fischbach, M., Szymanski, D., Fischbach, M., LaMont, E. and McLoughlin, S. (n.d.). Iron lung. [online] IMDb. Available at: https://www.imdb.com/title/tt27564844/ [Accessed 24 Oct. 2026].

https://www.theparktheatre.ca/wp-content/uploads/2026/01/fzNMAKLZrvQ1ojX59pSvrvlN5XW.jpg

**project hail mary**

Goddard, D. and Weir, A. (2026). Project Hail Mary. [online] IMDb. Available at: https://www.imdb.com/title/tt12042730/ [Accessed 24 Oct. 2026].

https://image.tmdb.org/t/p/w220_and_h330_face/iOb2fjXLbpJgyQXe46n1WtGCnaa.jpg

**alien**

O’Bannon, D., Shusett, R. and O’Bannon, D. (1979). Alien. [online] IMDb. Available at: https://www.imdb.com/title/tt0078748/ [Accessed 24 Oct. 2026].

https://images.photowall.com/products/59754/alien.jpg

**the room**

Wiseau, T. (2004). The room. [online] IMDb. Available at: https://www.imdb.com/title/tt0368226/ [Accessed 24 Oct. 2026].

https://www.theroommovie.com/roompics/posterb.jpg