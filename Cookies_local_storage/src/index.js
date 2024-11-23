// Function to set cookies
function setCookies() {
    // Get value of the input element with id 'firstname'
    const firstname = document.getElementById('firstname').value;
    // Get value of the input element with id 'email'
    const email = document.getElementById('email').value;

    // Set a cookie named 'firstname' with the value of 'firstname'; accessible across entire site
    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`;
}

// Function to show cookies
function showCookies() {
    const cookies = document.cookie.split('; ');
    let cookiesContent = 'Cookies:<br>';

    cookies.forEach(cookie => {
        cookiesContent += `${cookie}<br>`;
    });

    const p = document.createElement('p');
    p.innerHTML = cookiesContent;
    document.body.appendChild(p);
}

// Adding event listeners to buttons
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);
