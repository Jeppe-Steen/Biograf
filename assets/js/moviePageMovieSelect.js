let movieArray = //dette er arrayet som indeholder filmene
[
    {number: 0, movieTitle: "joker", movieDescription: "description", moviePoster: "joker.jpg", movieLength: 110},
    {number: 1, movieTitle: "moonlight", movieDescription: "description", moviePoster: "moonlight.jpg", movieLength: 120},
    {number: 2, movieTitle: "alien", movieDescription: "description", moviePoster: "alien.jpg", movieLength: 130},
    {number: 3, movieTitle: "riot", movieDescription: "description", moviePoster: "Riot.jpg", movieLength: 140},
    {number: 4, movieTitle: "Citizen four", movieDescription: "description", moviePoster: "Citizenfour.jpg", movieLength: 150},
    {number: 5, movieTitle: "Trash", movieDescription: "description", moviePoster: "Trash.jpg", movieLength: 160},
    {number: 6, movieTitle: "Paddington", movieDescription: "description", moviePoster: "paddington.jpg", movieLength: 170},
    {number: 7, movieTitle: "The Boy", movieDescription: "description", moviePoster: "theboy.jpg", movieLength: 180}
];

let movieElement, movies = "";

for (movieElement of movieArray) { //her laver vi et for loop som laver hvert objekt i arrayet over til et stykke html kode. 
    movies += `<article>
                    <figure>
                        <img src="/assets/media/img/posters/${movieElement.moviePoster}" />
                        <figcaption>
                            <h3>${movieElement.movieTitle}</h3>
                            <p>Filmens varighed: ${movieElement.movieLength} min</p>
                        </figcaption>
                    </figure>
                    <button class="buttons" type="button" onclick="selectedMovies(${movieElement.number})">Læs mere</button>
                </article>`
};

document.querySelector(".film-gallery").innerHTML += movies; //her indsætter vi så det html kode på vores side

function setLocalStorage(i) { //her laver vi en funktion som gemmer oplysningerne fra objekterne ind i vores lokal storage
    localStorage.setItem("selectedMovie", i);
    localStorage.setItem("movieTitle", movieArray[i].movieTitle);
    localStorage.setItem("movieDescription", movieArray[i].movieDescription);
    localStorage.setItem("moviePoster", movieArray[i].moviePoster);
    localStorage.setItem("movieLength", movieArray[i].movieLength)
};

function selectedMovies(n) { //her laver vi en funktion som bliver brugt for at vælge en film. denne bliver kaldt ved en onclick på hver film
    setLocalStorage(n); //først indsætter vi oplysningerne fra den bestemte film ind i funktionen som vi lavede tidligere.

    document.querySelector(".movieInfo-container").style.display = "flex"; //så gør vi sådan at popupen kommer frem

    /*herunder henter vi data fra vores local storage og indæstter det de steder hvor de skal være*/
    document.querySelector("#movieTitle").innerHTML = localStorage.getItem("movieTitle"); 
    document.querySelector("#movieDescription").innerHTML = localStorage.getItem("movieDescription");
    document.querySelector("#moviePoster").src = "/assets/media/img/posters/" + localStorage.getItem("moviePoster");
    document.querySelector("#moviePoster").alt = localStorage.getItem("movieTitle") + "-" + "movie-poster"
};

function resetMovieChoice() { //her sætter vi en funktion som får popupen til at forsvinde
    document.querySelector(".movieInfo-container").style.display = "none";
}