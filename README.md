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
├─ 
├─ css/
│ └─ style.css
├─ js/
│ └─ script.js
├─ images/
│ ├─ 
│ └─ 
├─ data/
│ └─ movies.json
└─ Readme.txt
```
### Site Architecture

## Mercury link

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


**Luhn Algorithm Validator**
1. Start from the rightmost digit (excluding the check digit)
2. Double every second digit moving left
3. If the result is greater than 9, subtract 9
4. Sum all digits
5. If total % 10 == 0 → the number is valid

## Explanation of JavaScript watchlist logic
- add to watchlist list buttons on movies page
- unique ids for each movie
- html button `<button class="favourite-btn" data-id="<movie-id>">Add to watchlist</button>`
- uses `localStorage` to maintain the selected movies when navigating
## Issues or limitations

## References change to harvard
https://en.wikipedia.org/wiki/Luhn_algorithm

https://medium.com/@shishir-karki/how-credit-card-validation-works-luhn-algorithm-explained-for-engineers-cf6d6b998e41