async function searchArtworks(query) {//query is a permameter. The search term to lool for artworks that comes from the user.
    //1. build and fetch data
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=20&fields=id,title,image_id`;//backticks so you can inject ${query} into the string.

    const response = await fetch(url);//sends the HTTP request, waits for the response, returns a response object/
    const data = await response.json();//parses the response body as JSON, returns a JS object//

    //2. find the results container and clear it. 
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    //3.loop through each artwork, create an image, append it
    data.data.forEach((artwork) => {
        if (!artwork.image_id) return;

        const img = document.createElement('img');
        img.referrerPolicy = 'no-referrer';   // ← add this line
        img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`;
        img.alt = artwork.title;
        img.classList.add('artwork');
        resultsContainer.appendChild(img);


    });

    // 4. Show message if nothing cames back
    if (data.data.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No artworks found. Try another search.</p>';
    }

}                                          


const form = document.getElementById('search-form');//get the form element by its ID
const input = document.getElementById('search-input');

form.addEventListener('submit', (event) => { //EVENT LISTENER FOR FORM SUBMISSION
    event.preventDefault(); // Prevent the default form submission behavior
    const query = input.value;
    searchArtworks(query);

});
