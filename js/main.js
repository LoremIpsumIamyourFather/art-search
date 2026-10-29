// searchArtworks looks up art matching the word the user typed (query)
async function searchArtworks(query) {
    // find the box on the page where results go
    const resultsContainer = document.getElementById('results');
    // show a loading message so the user knows it's working
    resultsContainer.innerHTML = '<p class="no-results">Searching...</p>';

    // encodeURIComponent makes spaces and symbols like & safe inside a web address
    const safeQuery = encodeURIComponent(query);
    // build the address we ask the museum for data from
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${safeQuery}&limit=20&fields=id,title,image_id`;

    // try means: attempt this, and if anything fails, jump to catch below
    try {
        // ask the museum's server for data and wait for the answer
        const response = await fetch(url);
        // if the server answered with an error (like 404 or 500), stop here
        if (!response.ok) {
            // throw sends us straight to the catch block
            throw new Error('Server error: ' + response.status);
        }
        // turn the answer into a JavaScript object we can use
        const data = await response.json();

        // clear out the loading message
        resultsContainer.innerHTML = '';
        // start a counter for how many images we actually show
        let shown = 0;

        // go through each artwork one at a time
        data.data.forEach((artwork) => {
            // skip any artwork that has no picture
            if (!artwork.image_id) return;
            // make a new empty image tag
            const img = document.createElement('img');
            // the museum's image server needs this to load pictures
            img.referrerPolicy = 'no-referrer';
            // point the image at the museum's picture of this artwork
            img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`;
            // describe the image for screen readers
            img.alt = artwork.title;
            // give it the CSS class that styles it
            img.classList.add('artwork');
            // put the image on the page
            resultsContainer.appendChild(img);
            // add one to our counter
            shown++;
        });

        // if no pictures made it onto the page, tell the user
        if (shown === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No artworks found. Try another search.</p>';
        }
    } catch (error) {
        // something went wrong (no internet, server down): log it for us
        console.error(error);
        // and show a friendly message instead of a blank page
        resultsContainer.innerHTML = '<p class="no-results">Something went wrong. Please try again.</p>';
    }
}

// find the search form on the page
const form = document.getElementById('search-form');
// find the text box inside it
const input = document.getElementById('search-input');

// run this code whenever the user submits the form
form.addEventListener('submit', (event) => {
    // stop the browser from reloading the page
    event.preventDefault();
    // trim removes extra spaces from the start and end
    const query = input.value.trim();
    // if nothing is left (they only typed spaces), do nothing
    if (!query) return;
    // run the search with what they typed
    searchArtworks(query);
});