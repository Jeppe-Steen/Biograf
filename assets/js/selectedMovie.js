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

localStorage.setItem("amountOfTickets", 0);

function checkAmountAndPrice() {
    amountOftTickets.innerHTML = parseInt(normalTickets.value) + parseInt(childrenTickets.value) + parseInt(seniorTickets.value); 
    ticketPrice.innerHTML = parseInt(normalTickets.value * normalTicketPrice) + parseInt(childrenTickets.value * childrenTicketPrice) + parseInt(seniorTickets.value * seniorTicketPrice);
    localStorage.setItem("amountOfTickets", parseInt(normalTickets.value) + parseInt(childrenTickets.value) + parseInt(seniorTickets.value));
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

//dette er for at bruge sædevalg

const container = document.querySelector(".selectSeats");
const seats = document.querySelectorAll(".row .seat");

let selectedSeats = document.querySelectorAll(".row .seat.selected");
let seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat) + 1);

localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));


// function updateSelectedCount() {
//     let selectedSeats = document.querySelectorAll(".row .seat.selected");
//     let seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat) + 1);

//     localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

//     // console.log(JSON.parse(localStorage.getItem("selectedSeats")).length);
// };


container.addEventListener("click", (e) => {
    let test = JSON.parse(localStorage.getItem("selectedSeats")).length;

    if(localStorage.getItem("amountOfTickets") > 0) {
        if(localStorage.getItem("amountOfTickets") >= test) {
            if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
                e.target.classList.toggle("selected");

                let selectedSeats = document.querySelectorAll(".row .seat.selected");
                let seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat) + 1);

                localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

                console.log(localStorage.getItem("amountOfTickets"));
                console.log(JSON.parse(localStorage.getItem("selectedSeats")).length);
            };
        };
    };
});

// if(localStorage.getItem("selectedSeats").length <= localStorage.getItem("amountOfTickets")) {