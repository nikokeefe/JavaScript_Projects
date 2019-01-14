const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) 
    .then(blob => blob.json())              // we know blob will be json
    .then(data => cities.push(...data));    // using spread operator stops us getting a nested array

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // find out if typed string matches items in array
        // need to create regex seperately so you can use a variable
        // g - global, i - case insensitive
        const regex = new RegExp(wordToMatch, 'gi'); 
        return place.city.match(regex) || place.state.match(regex);
    });
}

/*
* Add commas to population values
*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/* 
* Display function 
*/
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        // to highlight/replace matched item with searched item
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join(); //turns array into big string

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
