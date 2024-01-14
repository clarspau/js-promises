# js-promises

### Javascript Promises- Asynchronous Code

This repository contains exercises to practice working with callbacks and promises in JavaScript. The challenges are divided into two parts: Part 1 involves using promises, and Part 2 introduces the use of async/await.

##### **Part 1: Number Facts**

1. Make a request to the Numbers API ([http://numbersapi.com/](http://numbersapi.com/)) to get a fact about your favorite number. (Make sure you get back JSON by including the ***json*** query key, specific to this API. [Details](http://numbersapi.com/#json).
2. Retrieve data on multiple numbers in a single request. Display all the number facts on the page.
3. Use the API to get 4 facts on your favorite number. Display them on the page, even if some facts are repeats. (Note: Multiple requests are needed for this.)

##### **Part 2: Deck of Cards**

1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
2. Make two requests to the deck of cards API: one for a single card and another for one more card from the same deck. Console log the values and suits of both cards.
3. Build an HTML page allowing you to draw cards from a deck. Upon page load, create a new deck using the Deck of Cards API. Display a button to draw a card. Clicking the button reveals a new card until the deck is empty.

##### Further Study

1. Make a single request to the [Pokemon API](https://pokeapi.co/) to get names and URLs for every Pokemon in the database.
2. From the obtained data, choose three Pokemon at random and make requests to their URLs. Console log the data for each Pokemon.
3. Enhance the code from step 2. Instead of logging data, store the name of each Pokemon in a variable. Make another request to the Pokemon's species URL and, upon response, look for a description of the species in English. If found, console log the Pokemon's name along with the description.
   Example: "ducklett: They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater."
4. **BONUS** Create a UI for the random Pokemon data instead of relying on console log. Build an HTML page with a button that generates data from three randomly chosen Pokemon. Include the Pokemon's name, an image, and the description of its species found in step 3.
