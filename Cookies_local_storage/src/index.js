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

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    // iterates through each cookie in cookies array
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // splits cookie into two parts
        const [key, value] = cookie.split('=');
        // checks if key (cookie name) matches the input parameter name. if it does, it immediately returns corresponding value.
        if (key === name) {
            return value;
        }
    }
    // if the loop completes without finding a matching cookie, this line returns an empty string.
    return '';
}

function showForm() {
    const welcomeMessage = document.querySelector('.welcome-message');
    // Remove existing welcome message if it exists
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    const formContainer = document.querySelector('#form-container');
    if (!formContainer) {
        formContainer = document.createElement('div');
        formContainer.id = 'form-container';
        document.body.appendChild(formContainer);
    }

    formContainer.style.display = 'block';
    
    const form = document.querySelector('form');
    if (!form) {
        form = document.createElement('form');
        form.innerHTML = `
            <h2>Login to the website</h2>
            <input type="text" id="firstname" placeholder="Firstname">
            <input type="text" id="email" placeholder="Email">
            <button id="loginBtn">Log me in</button>
        `;
        document.body.appendChild(form);
    }
}

function hideForm() {
    const formContainer = document.querySelector('#form-container');
    if (formContainer) {
        formContainer.style.display = 'none';
    }

    const form = document.querySelector('form');
    if (form) {
        form.remove();
    }
}

function deleteCookiesAndShowForm() {
    document.cookie = "firstname=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    showForm();
}

function showWelcomeMessageOrForm() {
    const firstname = getCookie('firstname');
    const email = getCookie('email');

    if (firstname === '' && email === '') {
        showForm();
    } else {
        document.body.innerHTML = `
            <h1>Welcome ${firstname} (logout)</h1>
            <a href="#" style="font-weight: normal; font-style: italic; margin-left: 10px;" onclick="deleteCookiesAndShowForm()">Logout</a>
        `;
    }
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
