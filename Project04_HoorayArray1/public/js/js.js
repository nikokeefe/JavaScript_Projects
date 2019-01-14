// Get your shorts on - this is an array workout!
// ## Hooray Array 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', born: 1879, died: 1955 },
    { first: 'Isaac', last: 'Newton', born: 1643, died: 1727 },
    { first: 'Galileo', last: 'Galilei', born: 1564, died: 1642 },
    { first: 'Marie', last: 'Curie', born: 1867, died: 1934 },
    { first: 'Johannes', last: 'Kepler', born: 1571, died: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', born: 1473, died: 1543 },
    { first: 'Max', last: 'Planck', born: 1858, died: 1947 },
    { first: 'Katherine', last: 'Blodgett', born: 1898, died: 1979 },
    { first: 'Ada', last: 'Lovelace', born: 1815, died: 1852 },
    { first: 'Sarah E.', last: 'Goode', born: 1855, died: 1905 },
    { first: 'Lise', last: 'Meitner', born: 1878, died: 1968 },
    { first: 'Hanna', last: 'Hammarström', born: 1829, died: 1909 }
];

const people = ['Blake, William', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteenHundred = inventors.filter( inventor => (inventor.born >= 1500 && inventor.born < 1600 ));
    
console.table(fifteenHundred);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const fullNames = inventors.map( inventor => `${inventor.first} ${inventor.last}` );

console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/*
const ordered = inventors.sort(function(a, b) {
    if (a.born > b.born) {
        return 1;
    } else {
        return -1;
    }
});
*/
const ordered = inventors.sort((a, b) => a.born > b.born ? 1 : -1);

console.table(ordered);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.died - inventor.born);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => {
    const lastInventor = a.died - a.born;
    const nextInventor = b.died - b.born;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));    


// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');

    return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// 7a. reverse ordered array so it is displayed (first name, last name)

var array = [];

alpha.map(lastFirst => {
    const [lastName, firstName] = lastFirst.split(', ');
    array.push(`${firstName}, ${lastName}`);

});

console.log(array);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'scooter' ];

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++
    return obj;
}, {});

console.log(transportation);   