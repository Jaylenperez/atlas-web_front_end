function setCookies() {
    // Get value of the input element with id
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    // Store the entered values in variables
    const expirationDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    const enteredValues = `Email: ${email} - Firstname: ${firstname}`;

    // Get the value of the input element with id
    document.cookie = `firstname=${firstname}; path=/; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${email}; path=/; expires=${expirationDate.toUTCString()}`;

    return enteredValues;
}

function showCookies() {
    // Get all cookies as a single string, split them into an array by separating at '; '
    const cookies = document.cookie.split('; ');

    // Initialize a string to build HTML content displaying all cookies
    let cookiesContent = 'Cookies:<br>';

    // Loop through each cookie in the array
    cookies.forEach(cookie => {
        // Remove any leading/trailing whitespace
        const trimmedCookie = cookie.trim();
        // Check if the cookie starts with 'Emaill:'
        if (trimmedCookie.startsWith('Email:')) {
            // If it does, keep it as is
            cookiesContent += `${cookie}<br>`;
        } else {
            // If not, reverse the order and add hyphen
            const [email, firstname] = cookie.split(':');
            cookiesContent += `Email: ${email} - Firstname: ${firstname}<br>`;
        }
    });

    // Add the entered values to the content
    const enteredValues = setCookies();
    if (enteredValues) {
        cookiesContent += `<br><hr><br>${enteredValues}`;
    }

    // Create new <p> element to hold the cookie display content.
    const p = document.createElement('p');
    // Set inner HTML of the <p> element to the cookiesContentContent string.
    p.innerHTML = cookiesContent;
    // append <p> element to the body of the document, displaying the cookies on the webpage
    document.body.appendChild(p);
}

// Adding event listeners to buttons
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);
