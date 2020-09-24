let movieArray = [
  {
    number: 0,
    movieTitle: "joker",
    movieDescription: "description",
    moviePoster: "joker.jpg",
    movieLength: 110,
    movieGenre: "filter krimi thriller",
  },
  {
    number: 1,
    movieTitle: "moonlight",
    movieDescription: "description",
    moviePoster: "moonlight.jpg",
    movieLength: 120,
    movieGenre: "filter drama thriller",
  },
  {
    number: 2,
    movieTitle: "alien",
    movieDescription: "description",
    moviePoster: "alien.jpg",
    movieLength: 130,
    movieGenre: "filter sci-fi horror",
  },
  {
    number: 3,
    movieTitle: "riot",
    movieDescription: "description",
    moviePoster: "Riot.jpg",
    movieLength: 140,
    movieGenre: "filter action",
  },
  {
    number: 4,
    movieTitle: "Citizen four",
    movieDescription: "description",
    moviePoster: "Citizenfour.jpg",
    movieLength: 150,
    movieGenre: "filter dokumentar",
  },
  {
    number: 5,
    movieTitle: "Trash",
    movieDescription: "description",
    moviePoster: "Trash.jpg",
    movieLength: 160,
    movieGenre: "filter thriller horror",
  },
  {
    number: 6,
    movieTitle: "Paddington",
    movieDescription: "description",
    moviePoster: "paddington.jpg",
    movieLength: 170,
    movieGenre: "filter børnefilm horror",
  },
  {
    number: 7,
    movieTitle: "The Boy",
    movieDescription: "description",
    moviePoster: "theboy.jpg",
    movieLength: 180,
    movieGenre: "filter horror action",
  },
];

let movieElement,
  movies = "";

for (movieElement of movieArray) {
  movies += `<article class="${movieElement.movieGenre}">
                    <figure>
                        <img src="/assets/media/img/posters/${movieElement.moviePoster}" />
                        <figcaption>
                            <h3>${movieElement.movieTitle}</h3>
                            <p>Filmens varighed: ${movieElement.movieLength} min</p>
                        </figcaption>
                    </figure>
                    <button class="buttons" type="button" onclick="selectedMovies(${movieElement.number})">Læs mere</button>
                </article>`;
}

document.querySelector(".film-gallery").innerHTML += movies; //her indsætter vi så det html kode på vores side

function setLocalStorage(i) {
  localStorage.setItem("selectedMovie", i);
  localStorage.setItem("movieTitle", movieArray[i].movieTitle);
  localStorage.setItem("movieDescription", movieArray[i].movieDescription);
  localStorage.setItem("moviePoster", movieArray[i].moviePoster);
  localStorage.setItem("movieLength", movieArray[i].movieLength);
}

function selectedMovies(n) {
  setLocalStorage(n);

  document.querySelector(".movieInfo-container").style.display = "flex";

  document.querySelector("#movieTitle").innerHTML = localStorage.getItem(
    "movieTitle"
  );
  document.querySelector("#movieDescription").innerHTML = localStorage.getItem(
    "movieDescription"
  );
  document.querySelector("#moviePoster").src =
    "/assets/media/img/posters/" + localStorage.getItem("moviePoster");
  document.querySelector("#moviePoster").alt =
    localStorage.getItem("movieTitle") + "-" + "movie-poster";
}

function resetMovieChoice() {
  document.querySelector(".movieInfo-container").style.display = "none";
}

let genre = document.querySelector("#genre");
let genreValue = genre.value;

let filter = [...document.querySelectorAll(".filter")];
let filterAction = [...document.querySelectorAll(".action")];
let filterHorror = [...document.querySelectorAll(".horror")];
let filterScifi = [...document.querySelectorAll(".sci-fi")];
let filterKrimi = [...document.querySelectorAll(".krimi")];
let filterDrama = [...document.querySelectorAll(".drama")];
let filterThriller = [...document.querySelectorAll(".thriller")];
let filterChildren = [...document.querySelectorAll(".børnefilm")];
let filterDokumentar = [...document.querySelectorAll(".dokumentar")];

currentMovies();

function currentMovies() {
  let genreValue = genre.value;

  for (let allFilter of filter) {
    if (genreValue === "none") {
      allFilter.classList.add("show");
    } else {
      allFilter.classList.remove("show");
      for (let actionFilter of filterAction) {
        if (genreValue === "action") {
          actionFilter.classList.add("show");
        }
      }

      for (let horrorFilter of filterHorror) {
        if (genreValue === "horror") {
          horrorFilter.classList.add("show");
        }
      }

      for (let scifiFilter of filterScifi) {
        if (genreValue === "sci-fi") {
          scifiFilter.classList.add("show");
        }
      }

      for (let krimiFilter of filterKrimi) {
        if (genreValue === "krimi") {
          krimiFilter.classList.add("show");
        }
      }

      for (let dramaFilter of filterDrama) {
        if (genreValue === "drama") {
          dramaFilter.classList.add("show");
        }
      }

      for (let thrillerFilter of filterThriller) {
        if (genreValue === "thriller") {
          thrillerFilter.classList.add("show");
        }
      }

      for (let childrenFilter of filterChildren) {
        if (genreValue === "børnefilm") {
          childrenFilter.classList.add("show");
        }
      }

      for (let dokumentarFilter of filterDokumentar) {
        if (genreValue === "dokumentar") {
          dokumentarFilter.classList.add("show");
        }
      }
    }
  }
}

genre.addEventListener("change", (e) => {
  currentMovies();
});
