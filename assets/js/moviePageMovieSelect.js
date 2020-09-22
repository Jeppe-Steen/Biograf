let movieArray =
[
    {number: 0, movieTitle: "joker", movieDescription: "description", moviePoster: "joker.jpg", movieTime: 110},
    {number: 1, movieTitle: "moonlight", movieDescription: "description", moviePoster: "moonlight.jpg", movieTime: 120},
    {number: 2, movieTitle: "alien", movieDescription: "description", moviePoster: "alien.jpg", movieTime: 130},
    {number: 3, movieTitle: "riot", movieDescription: "description", moviePoster: "Riot.jpg", movieTime: 140},
    {number: 4, movieTitle: "Citizen four", movieDescription: "description", moviePoster: "Citizenfour.jpg", movieTime: 150},
    {number: 5, movieTitle: "Trash", movieDescription: "description", moviePoster: "Trash.jpg", movieTime: 160},
    {number: 6, movieTitle: "Paddington", movieDescription: "description", moviePoster: "paddington.jpg", movieTime: 170},
    {number: 7, movieTitle: "The Boy", movieDescription: "description", moviePoster: "theboy.jpg", movieTime: 180}
];

let movieElement, movies = "";

for (movieElement of movieArray) {
    movies += `<article>
                    <figure>
                        <img src="/assets/media/img/posters/${movieElement.moviePoster}" />
                        <figcaption>
                            <h3>${movieElement.movieTitle}</h3>
                            <p>Filmens varighed: ${movieElement.movieTime} min</p>
                        </figcaption>
                    </figure>
                    <button class="buttons" type="button" onclick="selectedMovies(${movieElement.number})">Læs mere</button>
                </article>`
};

document.querySelector(".film-gallery").innerHTML += movies;

function setLocalStorage(i) {
    localStorage.setItem("selectedMovie", i);
    localStorage.setItem("movieTitle", movieArray[i].movieTitle);
    localStorage.setItem("movieDescription", movieArray[i].movieDescription);
    localStorage.setItem("moviePoster", movieArray[i].moviePoster);
    localStorage.setItem("movieTime", movieArray[i].movieTime)
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