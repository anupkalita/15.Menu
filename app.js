const food = [
    {
        img: "./img/item-1.jpeg",
        name: "Buttermilk Pancakes",
        price: "$15.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "breakfast",
    },
    {
        img: "./img/item-2.jpeg",
        name: "Diner Double",
        price: "$13.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "lunch",
    },
    {
        img: "./img/item-3.jpeg",
        name: "Godzilla Milkshake",
        price: "$6.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "shakes",
    },
    {
        img: "./img/item-4.jpeg",
        name: "Country Delight",
        price: "$20.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "breakfast",
    },
    {
        img: "./img/item-5.jpeg",
        name: "Egg Attack",
        price: "$22.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "lunch",
    },
    {
        img: "./img/item-6.jpeg",
        name: "Oreo Dream",
        price: "$18.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "shakes",
    },
    {
        img: "./img/item-7.jpeg",
        name: "Bacon Overflow",
        price: "$8.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "breakfast",
    },
    {
        img: "./img/item-8.jpeg",
        name: "American Classic",
        price: "$12.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "lunch",
    },
    {
        img: "./img/item-9.jpeg",
        name: "Quarantine Buddy",
        price: "$16.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "shakes",
    },
    {
        img: "./img/item-10.jpeg",
        name: "Steak Dinner",
        price: "$39.99",
        desp: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "dinner",
    },
];


const img = document.querySelector('img');
const name = document.querySelector('.name');
const price = document.querySelector('.price');
const desp = document.querySelector('.desp');
const menu = document.querySelector('.menu');
const btns = document.querySelectorAll('.btn');
let itemType;

// IIFE
  (function(){
    display(itemType="all");
  })();

// display function
  function display(itemType){
      menu.innerHTML = "";
       food.forEach(function(item){
            if(item.type === itemType || itemType === "all"){
                menu.innerHTML += `
                <div class="item">
                    <div class="img-container">
                        <img src="${item.img}" alt="item">
                    </div>
                    <div class="text-section">
                        <div class="name-section">
                            <h3 class="name">${item.name}</h3>
                            <span class="price">${item.price}</span>
                        </div>
                        <hr>
                        <div class="desp-section">
                            <p>${item.desp}</p>
                        </div>
                </div>
            `
            }
       })
  }


btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(btn.classList.contains('all')){
            itemType = "all";
            display(itemType);
        }
        else if(btn.classList.contains('breakfast')){
            itemType = "breakfast";
            display(itemType);
        }
        else if(btn.classList.contains('lunch')){
            itemType = "lunch";
            display(itemType);
        }
        else if(btn.classList.contains('shakes')){
            itemType = "shakes";
            display(itemType);
        }
        else if(btn.classList.contains('dinner')){
            itemType = "dinner";
            display(itemType);
        }
    })
})
