# <p align="center">Cookies & Local Storage(Max's Version)</p>

## :bookmark: Table of Contents
<details>
        <summary>
        CLICK TO ENLARGE
        </summary>
        :memo: <a href="#key-terms">Key Terms</a>
        <br>
        :school: <a href="#learning objective">Learning Objective</a>
        <br>
        :floppy_disk: <a href="#requirements">Requirements</a>
        <br>
        :camera: <a href="#pictures">Pictures</a>
        <br>
        :alien: <a href="#authors">Authors</a>
</details>

## :memo: <span id="key-terms">Key Terms</span>
- **Cookies:** Small text files stored in the user's browser to retain information about the user for web interactions.
- **js-cookie:** A JavaScript library that simplifies setting, getting, and manipulating cookies.
- **HTTP Cookies:**
Cookies sent to the server with every HTTP request, depending on their scope and attributes.
- **Cookie Settings:**
    - `Domain:` specifies domain where cookie is valid
    - `Path:` Limits where the cookie is sent
    - `Secure:` Ensure the cookie is only sent over HTTPs
    - `HttpOnly:` Restricts the cookie to HTTP requests, preventing access via JavaScript
    - `Expires/Max-age:` Defines the cookies expiration date or lifespan.
- **Web Storage:**
    - **Local Storage:** A storage system in the browser that persists data across sessions until explicitly cleared. Data stored here is not sent with HTTP requests.
    - **Session Storage** Similar to local storage, but the data is only available for the duration of the browser tab session. Like local storage, it is not sent with HTTP requests.
    - **Differences between Local & Session Storage:**
        - **Cookies:** Sent with HTTP requests, have limited storage capacity (~4KB), and are used for server-side communication.
        - **Web Storage:** Larger storage capacity (~5MB for most browsers), not sent with HTTP requests, and mainly used for client-side data storage.
- **document.cookie:** Use this, or libraries like js-cookie to create and manage cookies with specific attributes.

## :school: <span id="learning objective">Learning Objective</span>

By the end of this project, you should be able to:

- Understand how to create cookies using Javascript
- Learn how to set specific settings for the cookie
- Learn how to read cookies with Javascript
- How to use js-cookie for easy cookie manipulation
- How to use the browser web storage
- The differences between local storage and session storage
## :floppy_disk: <span id="requirements">Requirements</span>

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- All of your code will be compiled/executed on Ubuntu 18.04 using Node 12.x and npm 6.x
- src/index.js should stay empty - all your Javascript must be in your HTML, inside <script> tag

## :camera: <span id="photos">Photos</span>

(https://github.com/yourusername/yourrepository/images/yourimage.png)

## :sparkles: <span id="authors">Authors</span>

**Jaylen Perez**
- Github: [@Jaylenperez](https://github.com/Jaylenperez)