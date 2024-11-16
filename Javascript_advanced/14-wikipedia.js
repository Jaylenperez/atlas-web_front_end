// Function to create and append a paragraph element
function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

// Function to fetch the Stack Overflow Wikipedia article and call the callback with the extract
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const page = response.query.pages;
            const pageId = Object.keys(page)[0];
            const extract = page[pageId].extract;

            // Call the callback function with the extract of the article
            callback(extract);
        }
    };

    xhr.send();
}

// Calling queryWikipedia with createElement as the callback
queryWikipedia(createElement);


//its throwing errors, try to fix later