import { MOVIE_LIST, LOREM_IPSUM } from "./config.js"

let audio = new Audio("https://www.cjoint.com/doc/21_02/KBwqN2tAvxs_netflix-tou-doum.mp3");
audio.play();

let dayNightButton;

if (sessionStorage.getItem("movie-list") === null) {
    sessionStorage.setItem("movie-list", JSON.stringify(MOVIE_LIST));
}
main(JSON.parse(sessionStorage.getItem("movie-list")));


if (localStorage.getItem("theme") === "dark") {
    document.body.className = "dark";
    dayNightButton.querySelector("i").className = "fa fa-sun";
}

function main(movieList) {

    let section = document.createElement("section");
    section.className = "section";
    let main = document.createElement("main");

    // Add article to section and section to main
    main.appendChild(section);
    document.body.insertBefore(main, document.querySelector("footer"));
    for (let movie of movieList) {
        let article = createMovieCards(movie);
        section.appendChild(article);

    }
    Array.from(document.querySelectorAll("article")).forEach(function (element) {
        element.addEventListener('click', () => {
            console.log(element.className);
            let article = document.getElementsByClassName(element.className)[0];
            article.style.display = "none";

        });
    });
    setListeners();
}

function deleteMovie(movieName) {
    sessionStorage.removeItem(movie);
    location.reload();
}

function createMovieCards(movie) {
    // Create the article
    let article = document.createElement("article");
    article.className = movie.name.replaceAll(" ", "-").toLowerCase();

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

function setListeners() {
    // Day-Night switch
    dayNightButton = document.createElement("button");
    dayNightButton.className = "day-night"
    let dayNightIcon = document.createElement("i");
    dayNightIcon.setAttribute("class", "fas fa-moon");
    dayNightButton.appendChild(dayNightIcon);
    document.body.appendChild(dayNightButton);

    dayNightButton.addEventListener("click", () => {
        if (document.body.className != "dark") {
            localStorage.setItem("theme", "dark");
            dayNightButton.querySelector("i").className = "fa fa-sun";
            document.body.className = "dark";
        } else {
            dayNightButton.querySelector("i").className = "fa fa-moon";
            localStorage.setItem("theme", "light")
            document.body.className = ""
        }
    });

    // Add movie fab
    let fab = document.createElement("button");
    fab.className = "fab-add"
    let fabIcon = document.createElement("i");
    fabIcon.setAttribute("class", "fa-solid fa-circle-plus");
    fab.appendChild(fabIcon);
    document.querySelector("section").appendChild(fab);

    fab.addEventListener("click", () => {
        let form = document.querySelector(".div-form");
        form.style.display = "block";
    })
}