let favNum = 8;
let baseURL = "http://numbersapi.com";

// 1.

$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
     console.log(data);
});


// 2.

let FavNums = [8, 15, 89];
$.getJSON(`${baseURL}/${FavNums}?json`).then(data => {
     console.log(data);
});


// 3.

Promise.all(
     Array.from({ length: 4 }, () => {
          return $.getJSON(`${baseURL}/${favNum}?json`);
     })
).then(facts => {
     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

