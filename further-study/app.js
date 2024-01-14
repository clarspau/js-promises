$(function () {
     let baseURL = "https://pokeapi.co/api/v2";

     $.getJSON(`${baseURL}/pokemon/?limit=1000`).then(data => {
          console.log(data);
     });

     // Fetch and log data for 3 random Pokemon
     $.getJSON(`${baseURL}/pokemon/?limit=1000`)
          .then(data => {
               // Select 3 random Pokemon URLs
               let randomPokemonUrls = [];
               for (let i = 0; i < 3; i++) {
                    let randomIdx = Math.floor(Math.random() * data.results.length);
                    let url = data.results.splice(randomIdx, 1)[0].url;
                    randomPokemonUrls.push(url);
               }
               // Fetch data for selected Pokemon URLs using Promise.all
               return Promise.all(randomPokemonUrls.map(url => $.getJSON(url)));
          })
          .then(pokemon => {
               // Log data for each selected Pokemon
               pokemon.forEach(p => console.log(p));
          });

     // Fetch and log names and descriptions for 3 random Pokemon
     let names = null;
     $.getJSON(`${baseURL}/pokemon/?limit=1000`)
          .then(data => {
               // Select 3 random Pokemon URLs
               let randomPokemonUrls = [];
               for (let i = 0; i < 3; i++) {
                    let randomIdx = Math.floor(Math.random() * data.results.length);
                    let url = data.results.splice(randomIdx, 1)[0].url;
                    randomPokemonUrls.push(url);
               }
               // Fetch data for selected Pokemon URLs using Promise.all
               return Promise.all(randomPokemonUrls.map(url => $.getJSON(url)));
          })
          .then(data => {
               // Extract names and fetch species data for selected Pokemon URLs
               names = data.map(d => d.name);
               return Promise.all(data.map(d => $.getJSON(d.species.url)))
          })
          .then(data => {
               // Extract descriptions and log names with descriptions
               let descriptions = data.map(d => {
                    let descriptionObj = d.flavor_text_entries.find(
                         entry => entry.language.name === "en"
                    );
                    return descriptionObj ? descriptionObj.flavor_text : "No description available.";
               });
               descriptions.forEach((desc, i) => {
                    console.log(`${names[i]}: ${desc}`);
               });
          });

     // Event handling for button click to fetch and display Pokemon cards
     let $btn = $("button");
     let $pokeArea = $("#pokemon-area");

     $btn.on("click", function () {
          // Clear existing Pokemon cards
          $pokeArea.empty();
          let namesAndImages = [];

          // Fetch data for 3 random Pokemon using Promise.all
          $.getJSON(`${baseURL}/pokemon/?limit=1000`)
               .then(data => {
                    // Select 3 random Pokemon URLs
                    let randomPokemonUrls = [];
                    for (let i = 0; i < 3; i++) {
                         let randomIdx = Math.floor(Math.random() * data.results.length);
                         let url = data.results.splice(randomIdx, 1)[0].url;
                         randomPokemonUrls.push(url);
                    }
                    // Fetch data for selected Pokemon URLs using Promise.all
                    return Promise.all(randomPokemonUrls.map(url => $.getJSON(url)));
               })
               .then(pokemonData => {
                    // Extract names and images for selected Pokemon
                    namesAndImages = pokemonData.map(p => ({
                         name: p.name,
                         imgSrc: p.sprites.front_default
                    }));
                    // Fetch species data for selected Pokemon URLs
                    return Promise.all(pokemonData.map(p => $.getJSON(p.species.url)));
               })
               .then(speciesData => {
                    // Create and append Pokemon cards to the $pokeArea
                    speciesData.forEach((d, i) => {
                         let descriptionObj = d.flavor_text_entries.find(function (entry) {
                              return entry.language.name === "en";
                         });
                         let description = descriptionObj ? descriptionObj.flavor_text : "";
                         let { name, imgSrc } = namesAndImages[i];
                         $pokeArea.append(makePokeCard(name, imgSrc, description));
                    });
               });
     });

     // Function to generate HTML for a Pokemon card
     function makePokeCard(name, imgSrc, description) {
          return `
      <div class="card">
        <h1>${name}</h1>
        <img src=${imgSrc} />
        <p>${description}</p>
      </div>
    `;
     }
});
