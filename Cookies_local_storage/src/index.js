// Function to set cookies
function setCookies() {
    // Get value of the input element with id 'firstname'
    const firstname = document.getElementById('firstname').value;
    // Get value of the input element with id 'email'
    const email = document.getElementById('email').value;

    // Get the value of the input element with id 'firstname'
    document.cookie = `firstname=${firstname}; path=/`;
    // Get the value of the input element with id 'email'
    document.cookie = `email=${email}; path=/`;
}

// Function to show cookies
function showCookies() {
    // Get all cookies as a single string, split them into an array by separating at '; '
    const cookies = document.cookie.split('; ');
    // Initialize a string to build HTML content displaying all cookies
    let cookiesContent = 'Cookies:<br>';

    // Loop through each cookie in the array
    cookies.forEach(cookie => {
        // Append the cookie string to the content with a line break for display
        cookiesContent += `${cookie}<br>`;
    });

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
