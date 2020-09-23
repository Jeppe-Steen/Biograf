let movieArray =
[
    {number: 0, movieTitle: "joker", movieDescription: "description", moviePoster: "joker.jpg", movieLength: 110},
    {number: 1, movieTitle: "moonlight", movieDescription: "description", moviePoster: "moonlight.jpg", movieLength: 120},
    {number: 2, movieTitle: "alien", movieDescription: "description", moviePoster: "alien.jpg", movieLength: 130},
    {number: 3, movieTitle: "riot", movieDescription: "description", moviePoster: "Riot.jpg", movieLength: 140}
];

let movieElement, movies = "";

for (movieElement of movieArray) {
    movies += `<article>
                    <figure>
                        <img src="/assets/media/img/posters/${movieElement.moviePoster}" />
                        <figcaption>
                            <h3>${movieElement.movieTitle}</h3>
                            <p>Filmens varighed: ${movieElement.movieLength} min</p>
                        </figcaption>
                    </figure>
                    <button type="button" onclick="selectedMovies(${movieElement.number})">Læs mere</button>
                </article>`
};

document.querySelector(".choosenMovies-section").innerHTML += movies;

function setLocalStorage(i) {
    localStorage.setItem("selectedMovie", i);
    localStorage.setItem("movieTitle", movieArray[i].movieTitle);
    localStorage.setItem("movieDescription", movieArray[i].movieDescription);
    localStorage.setItem("moviePoster", movieArray[i].moviePoster);
    localStorage.setItem("movieLength", movieArray[i].movieLength)
};

function selectedMovies(n) {
    setLocalStorage(n);

    document.querySelector(".movieInfo-container").style.display = "flex";

    document.querySelector("#movieTitle").innerHTML = localStorage.getItem("movieTitle");
    document.querySelector("#movieDescription").innerHTML = localStorage.getItem("movieDescription");
    document.querySelector("#moviePoster").src = "/assets/media/img/posters/" + localStorage.getItem("moviePoster");
    document.querySelector("#moviePoster").alt = localStorage.getItem("movieTitle") + "-" + "movie-poster"
};

function resetMovieChoice() {
    document.querySelector(".movieInfo-container").style.display = "none";
}