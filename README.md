# Aimee's Art Search

**Author:** Aimee Elizondo

## Overview

Aimee's Art Search is a single-page web application that lets users search the Art Institute of Chicago's public collection of over 100,000 artworks. Enter a keyword, and matching artworks appear in a responsive grid.

## Live Site
(coming soon — will be deployed to GitHub Pages)

## How to Use

1. Open the site in a browser.
2. Type a keyword into the search field (e.g. "flowers", "portrait", "landscape").
3. Press Enter or click the Search button.
4. Up to 20 matching artworks appear below in a grid.
5. The layout adapts to mobile: on narrow screens, the header, navigation, search form, and images all stack vertically.

## Technologies Used

- HTML5
- CSS3 (custom flexbox grid, media query for mobile)
- Vanilla JavaScript (fetch API, async/await, DOM manipulation)
- Art Institute of Chicago API — https://api.artic.edu/docs/
- Google Fonts (Fraunces, Lato)
- Git, GitHub, GitHub Pages

## Functionality

- Search artworks by keyword
- Displays results in a custom flexbox grid (4 columns on desktop, 1 on mobile)
- Uses the Art Institute's IIIF image server to render artwork thumbnails at a consistent size
- Responsive layout with a mobile breakpoint at 320px
- Horizontal navigation bar
- Form validation (search field is required)

## Ideas for Future Improvement

1. **Build out the navigation pages.** The Artists, About, and Contact links currently point to `#` placeholders. Adding real pages would make the navigation functional and give the site more depth.
2. **Add pagination or a "Load More" button.** The search currently returns up to 20 results. Allowing users to load additional pages of results would make the app more useful for broad searches.
3. **Display artwork metadata.** Each result could show the title, artist, date, and medium beneath the image instead of just the image and alt text.
4. **Add a favorites feature.** Let users save artworks to a personal collection using localStorage, so their picks persist between visits.
5. **Add filtering.** Allow users to filter results by medium, department, or date range to narrow down large result sets.

## Credits

Artwork data and images provided by the Art Institute of Chicago's public API.