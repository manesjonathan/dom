/**
 * Creation of movies collection.
 */
const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "


const MOVIE_LIST = [
    // Movie 1
    {
        name: "The Matrix",
        releaseYear: 1999,
        director: "The Wachowski",
        pictureUrl: "https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg",
        gender: ["Sci-fi"],
        cast: [
            "Keanu Reeves",
            "Carrie-Anne Moss",
            "Laurence Fishburne",
            "Hugo Weaving"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=gSqxHAtUqkk",
    },

    // Movie 2
    {
        name: "The Matrix Reloaded",
        releaseYear: 2003,
        director: "The Wachowski",
        pictureUrl: "https://fr.web.img3.acsta.net/medias/nmedia/00/02/53/34/affiche.jpg",
        gender: ["Sci-fi"],
        cast: [
            "Keanu Reeves",
            "Carrie-Anne Moss",
            "Laurence Fishburne",
            "Hugo Weaving"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=4J7LRkJjX8I",
    },

    // Movie 3
    {
        name: "The Matrix Revolutions",
        releaseYear: 2003,
        director: "The Wachowski",
        pictureUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/35/14/64/18364977.jpg",
        gender: ["Sci-fi"],
        cast: [
            "Keanu Reeves",
            "Carrie-Anne Moss",
            "Laurence Fishburne",
            "Hugo Weaving"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=x-byk_9xCnQ",
    },

    // Movie 4
    {
        name: "The Matrix Resurrections",
        releaseYear: 2021,
        director: "Lana Wachowski",
        pictureUrl: "https://fr.web.img4.acsta.net/pictures/21/11/17/17/24/3336846.jpg",
        gender: ["Sci-fi"],
        cast: [
            "Keanu Reeves",
            "Carrie-Anne Moss",
            "Yahya Abdul-Mateen II",
            "Jonathan Groff"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=cdTE_mR6Gs8",
    },

    // Movie 5
    {
        name: "Rocky",
        releaseYear: 1976,
        director: "John G. Avildsen",
        pictureUrl: "https://fr.web.img6.acsta.net/pictures/21/11/16/15/01/4363069.jpg",
        gender: ["Sports drama"],
        cast: [
            "Sylvester Stallone",
            "Talia Shire",
            "Burt Young",
            "Carl Weathers"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=V1LIfIFPb7M",
    },

    // Movie 6
    {
        name: "Rocky 2",
        releaseYear: 1979,
        director: "Sylvester Stallone",
        pictureUrl: "https://fr.web.img5.acsta.net/pictures/14/05/12/10/38/231381.jpg",
        gender: [["Sports drama"]],
        cast: [
            "Sylvester Stallone",
            "Talia Shire",
            "Burt Young",
            "Carl Weathers"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=FmyzmKJfRCA",
    },

    // Movie 7
    {
        name: "Rocky 3",
        releaseYear: 1982,
        director: "Sylvester Stallone",
        pictureUrl: "https://fr.web.img3.acsta.net/medias/nmedia/18/36/23/17/19106061.jpg",
        gender: [["Sports drama"]],
        cast: [
            "Sylvester Stallone",
            "Talia Shire",
            "Burt Young",
            "Carl Weathers"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=E4OQeSOtaYU",
    },

    // Movie 8
    {
        name: "Rocky 4",
        releaseYear: 1985,
        director: "Sylvester Stallone",
        pictureUrl: "https://fr.web.img6.acsta.net/pictures/14/08/25/16/16/198079.jpg",
        gender: [["Sports drama"]],
        cast: [
            "Sylvester Stallone",
            "Talia Shire",
            "Burt Young",
            "Carl Weathers"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=-zwUKC3zbNM",
    },

    // Movie 9
    {
        name: "Rocky 5",
        releaseYear: 1990,
        director: "Sylvester Stallone",
        pictureUrl: "https://fr.web.img6.acsta.net/pictures/14/08/25/16/19/557323.jpg",
        gender: ["Sports drama"],
        cast: [
            "Sylvester Stallone",
            "Talia Shire",
            "Burt Young"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=pK1jyJkkwDQ",
    },

    // Movie 10
    {
        name: "Hackers",
        releaseYear: 1995,
        director: "Iain Softley",
        pictureUrl: "https://fr.web.img2.acsta.net/pictures/17/04/25/16/11/108654.jpg",
        gender: ["Action", "Drama", "Thriller"],
        cast: [
            "Johnny Lee Miller",
            "Angelina Jolie",
            "Matthew Lillard"
        ],
        trailerUrl: "https://www.youtube.com/watch?v=HSIjEmRrElg",
    },
];


if (sessionStorage.getItem("movie-list") === null) {
    sessionStorage.setItem("movie-list", JSON.stringify(MOVIE_LIST));
}

console.log(sessionStorage.getItem("theme"));
if (sessionStorage.getItem("theme") === "dark") {
    document.body.className = "dark";
} else {
    document.body.className = null;

}

addCards(JSON.parse(sessionStorage.getItem("movie-list")));
addMovieFab();
dayNightSwitch();

function addCards(movieList) {

    let section = document.createElement("section");
    section.className = "section";
    let main = document.createElement("main");

    // Add article to section and section to main
    main.appendChild(section);
    document.body.insertBefore(main, document.querySelector("footer"));
    for (let movie of movieList) {
        section.appendChild(createMovieCards(movie));
    }

    console.log(movieList);

}

function createMovieCards(movie) {
    // Create the article
    let article = document.createElement("article");

    // Create the picture
    let picture = document.createElement("img");
    picture.setAttribute("alt", movie.name);
    picture.setAttribute("src", movie.pictureUrl);
    article.appendChild(picture);

    // Create the inner section
    let innerSection = document.createElement("section");
    innerSection.className = "inner-section";

    // Create the title
    let title = document.createElement("h2");
    title.innerText = movie.name;
    innerSection.appendChild(title);

    // Create the gender pin
    let gender = document.createElement("h4");
    gender.innerText = movie.gender;
    innerSection.appendChild(gender);

    // Create the director
    let director = document.createElement("h3");
    director.innerText = movie.director + ", " + movie.releaseYear;
    innerSection.appendChild(director);

    // Create summary
    let summary = document.createElement("p");
    summary.innerText = LOREM_IPSUM;
    innerSection.appendChild(summary);

    // Create the back section
    let backSection = document.createElement("section");
    backSection.className = "back-section";

    let castTitle = document.createElement("h4");
    castTitle.innerText = "Casting"
    backSection.appendChild(castTitle);

    let cast = document.createElement("ul");
    cast.className = "cast-list";
    for (let entry of movie.cast) {
        let listItem = document.createElement("li")
        listItem.innerText = entry;
        cast.appendChild(listItem);
    }
    backSection.appendChild(cast);

    // Create YouTube Pin
    let link = document.createElement("a")
    link.setAttribute("href", movie.trailerUrl);
    link.setAttribute("target", "_blank");

    let icon = document.createElement("i");
    icon.setAttribute("class", "fab fa-youtube");
    link.appendChild(icon);
    backSection.appendChild(link);

    article.appendChild(innerSection);
    article.appendChild(backSection);

    return article;

}

function dayNightSwitch() {
    let dayNightButton = document.createElement("button");
    dayNightButton.className = "day-night"
    let dayNightIcon = document.createElement("i");
    dayNightIcon.setAttribute("class", "fas fa-moon");
    dayNightButton.appendChild(dayNightIcon);
    document.body.appendChild(dayNightButton);

    dayNightButton.addEventListener("click", () => {
        dayNightButton.querySelector("i").classList.toggle("fa-sun");
        dayNightButton.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    })

    window.addEventListener("load", () => {
        if (document.body.classList.contains("dark")) {
            dayNightButton.querySelector("i").classList.add("fa-sun");
        } else {
            dayNightButton.querySelector("i").classList.add("fa-moon");

        }
    })
}

function addMovieFab() {
    let fab = document.createElement("button");
    fab.className = "fab-add"
    let fabIcon = document.createElement("i");
    fabIcon.setAttribute("class", "fa-solid fa-circle-plus");
    fab.appendChild(fabIcon);

    fab.addEventListener("click", () => {
        let form = document.querySelector(".div-form");
        form.style.display = "block";
    })
    document.querySelector("section").appendChild(fab);
}