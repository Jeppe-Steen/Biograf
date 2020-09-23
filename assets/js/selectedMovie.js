document.querySelector("#movieTitle").innerHTML = localStorage.getItem("movieTitle");

//starter med at sætte de variabler som skal bruges
let normalTickets = document.querySelector("#normalTickets");
    let normalTicketPrice = 100;
let childrenTickets = document.querySelector("#childrenTickets");
    let childrenTicketPrice = 50;
let seniorTickets = document.querySelector("#seniorTickets");
    let seniorTicketPrice = 50;

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