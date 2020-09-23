document.querySelector("#movieTitle").innerHTML = localStorage.getItem("movieTitle");

//starter med at sætte de variabler som skal bruges
let retrivePrices = localStorage.getItem("moviePrice"); //her henter jeg priserne fra localstorage
let prices = JSON.parse(retrivePrices); //for at kunne få det som et array, så skal jeg først have lagt dataen som json.stringify, og derefter hente det som json.parse

let normalTickets = document.querySelector("#normalTickets");
    let normalTicketPrice = prices[0];
let childrenTickets = document.querySelector("#childrenTickets");
    let childrenTicketPrice = prices[1];
let seniorTickets = document.querySelector("#seniorTickets");
    let seniorTicketPrice = prices[2];

let amountOftTickets = document.querySelector("#amountOfTickets");
let ticketPrice = document.querySelector("#ticketPrice");

function checkAmountAndPrice() {
    amountOftTickets.innerHTML = parseInt(normalTickets.value) + parseInt(childrenTickets.value) + parseInt(seniorTickets.value); 
    ticketPrice.innerHTML = parseInt(normalTickets.value * normalTicketPrice) + parseInt(childrenTickets.value * childrenTicketPrice) + parseInt(seniorTickets.value * seniorTicketPrice);
}

normalTickets.addEventListener("change", (e) => {
    checkAmountAndPrice();
});

childrenTickets.addEventListener("change", (e) => {
    checkAmountAndPrice();
});

seniorTickets.addEventListener("change", (e) => {
    checkAmountAndPrice();
});