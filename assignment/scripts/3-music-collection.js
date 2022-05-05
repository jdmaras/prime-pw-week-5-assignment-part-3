console.log("***** Music Collection *****");
/*
Update the `3-music-collection.js` file to do the following:

> While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

### Required Features

- Create a variable `collection` that starts as an empty array.

- Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object

- Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.

- Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `${TITLE} by ${ARTIST}, published in ${YEAR}`.

- Test the `showCollection` function.

- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.

- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

> When testing your functions, write all tests in the JavaScript file!


### Stretch goals

- Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update `search` to allow a `trackName` search criteria.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
```

> Make sure to test all your code!
*/

let collection = [];

function addToCollection(album, artist, yearPublished) {
  let record = {
    album: album,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(record);
  return record;
}
addToCollection("Come On Over", "Shania Twain", 1997);
addToCollection("The Woman In Me", "Shania Twain", 1995);
addToCollection("Enter the 36 Chambers", "Wu-Tang Clan", 1993);
addToCollection("Versus God", "Dillinger Four", 1997);
addToCollection("Black Sunday", "Cypress Hill", 1993);
addToCollection("Keep It Like A Secret", "Built To Spill", 1999);

console.log(collection);

/*
function showCollection(collection) {
  console.log(collection.length);
  for (let i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].album} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
  }
}
showCollection(collection);
*/

function showCollection(collection) {
  console.log(collection.length);
  for (let record of collection) {
    console.log(
      `${record.album} by ${record.artist}, published in ${record.yearPublished}`
    );
  }
}
showCollection(collection);

function showByArtists(artist) {
  let artistFinder = [];
  //this is returning that artist finder back to empty when it runs so it can keep going through it in local scope vs global scope
  for (let musician of collection) {
    if (musician.artist === artist) {
      artistFinder.push(musician);
    }
  }
  return artistFinder;
}
showByArtists(collection);
console.log(`Do I have: `, showByArtists("Cypress Hill"));
console.log(`Do I have: `, showByArtists("Tool"));
console.log(`Do I have: `, showByArtists("Shania Twain"));

//
