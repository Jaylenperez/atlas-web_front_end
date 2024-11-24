function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    const expirationDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    
    // Set both cookies at once
    document.cookie = `firstname=${firstname}; path=/; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${email}; path=/; expires=${expirationDate.toUTCString()}`;

    return `${firstname} - ${email}`;
}

function showCookies() {
    const cookies = document.cookie.split('; ');
    let cookiesContent = 'Cookies:<br>';

    cookies.forEach(cookie => {
        const trimmedCookie = cookie.trim();
        
        if (trimmedCookie) {
            const [name, value] = trimmedCookie.split('=');
            
            if (name === 'firstname') {
                cookiesContent += `<Email: ${value} - Firstname: ${cookie.split('=')[1]}><br>`;
            } else if (name === 'email') {
                cookiesContent += `<Email: ${cookie.split('=')[1]} - Firstname: ${value}><br>`;
            }
        }
    });

    const enteredValues = setCookies();
    if (enteredValues) {
        cookiesContent += `<br><hr><br>${enteredValues}`;
    }

    const p = document.createElement('p');
    p.innerHTML = cookiesContent;
    document.body.appendChild(p);
}

// Adding event listeners to buttons
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);
