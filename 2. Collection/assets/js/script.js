/**
 * Initialization of movies collection.
 */
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


const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "



/**
 * This function generate cards based on the MOVIE_LIST
 * Each card is added to the HTML document.
 */
function generateCards() {
    let main = document.createElement("main");
    let section = document.createElement("section");
    section.className = "section";

    for (let movie of MOVIE_LIST) {
        // Create the article
        let article = document.createElement("article");

        // Create the picture
        let picture = document.createElement("img");
        picture.setAttribute("alt", movie.name);
        picture.setAttribute("src", movie.pictureUrl);
        article.appendChild(picture);

        let innerSection = document.createElement("section");
        innerSection.className = "inner-section";

        // Create the title
        let title = document.createElement("h2");
        title.innerText = movie.name;
        innerSection.appendChild(title);

        // Create the gender pin
        let gender = document.createElement("h4");
        gender.innerText = movie.gender.join(", ");
        innerSection.appendChild(gender);

        // Create the director
        let director = document.createElement("h3");
        director.innerText = movie.director + ", " + movie.releaseYear;
        innerSection.appendChild(director);

        // Create summary
        let summary = document.createElement("p");
        summary.innerText = LOREM_IPSUM;
        innerSection.appendChild(summary);

        // Create YouTube Pin
        let link = document.createElement("a")
        link.setAttribute("href", movie.trailerUrl);
        link.setAttribute("target", "_blank");
        let icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-youtube-play");
        link.appendChild(icon);
        innerSection.appendChild(link);

        // Add article to section and section to main
        article.appendChild(innerSection);
        section.appendChild(article);
        main.appendChild(section);
        document.body.insertBefore(main, document.getElementsByTagName("footer")[0]);
    }
}
generateCards();