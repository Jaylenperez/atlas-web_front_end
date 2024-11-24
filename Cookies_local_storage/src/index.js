function setCookies() {
    // Retrieve values from input elements with IDs firstname & email, they store these values in variables named firstname and email
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    // Creates Date object 10 days from now
    const daysToMilliseconds = (days) => days * 24 * 60 * 60 * 1000;
    const expirationDate = new Date(Date.now() + daysToMilliseconds(10));

    
    // Set both cookies at once
    document.cookie = `firstname=${firstname}; path=/; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${email}; path=/; expires=${expirationDate.toUTCString()}`;

    // Cookie info printed
    return `${firstname} - ${email}`;
}

function showCookies() {
    // Initialize content for displaying cookies
    const cookies = document.cookie.split('; ');
    let cookiesContent = 'Cookies:<br>';

    // loop iterates through each cookie
    cookies.forEach(cookie => {
        // removes trailing whitespace from cookie string
        const trimmedCookie = cookie.trim();
        
        // If trimmed cookie string is not empty...
        if (trimmedCookie) {
            // then split cookie string into two parts, name and the value
            const [name, value] = trimmedCookie.split('=');
            
            // check if cookie is for firstname or email. based on this constructs HTML string with appropriate info and adds to cookiesContent
            if (name === 'firstname') {
                cookiesContent += `<Email: ${value} - Firstname: ${cookie.split('=')[1]}><br>`;
            } else if (name === 'email') {
                cookiesContent += `<Email: ${cookie.split('=')[1]} - Firstname: ${value}><br>`;
            }
        }
    });

    // Calls setCookies() to get any newly set values and adds them to cookiesContent if they exist
    const enteredValues = setCookies();
    if (enteredValues) {
        cookiesContent += `<br><hr><br>${enteredValues}`;
    }

    // Creates new <p> element, sets its inner HTML to the cookiesContent, and appends it to the document body
    const p = document.createElement('p');
    p.innerHTML = cookiesContent;
    document.body.appendChild(p);
}

// Adding event listeners to buttons
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);
