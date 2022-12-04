let inputName = document.querySelector(".name");
let inputYear = document.querySelector(".release-year");
let inputDirector = document.querySelector(".director");
let inputPictureUrl = document.querySelector(".picture-url");
let inputGender = document.querySelector(".gender");
let inputCast = document.querySelector(".cast");
let inputTrailerUrl = document.querySelector(".trailer-url");
let submitButton = document.querySelector(".submit-button");
let closeButton = document.querySelector(".close-button");
let divForm = document.querySelector(".div-form");

// Configure submit button
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newMovie = {
        name: inputName.value,
        releaseYear: inputYear.value,
        director: inputDirector.value,
        pictureUrl: inputPictureUrl.value,
        gender: inputGender.value,
        cast: inputCast.value,
        trailerUrl: inputTrailerUrl.value,
    }

    // Save new entry in session storage
    if (newMovie.name && newMovie.releaseYear && newMovie.director && newMovie.pictureUrl) {
        let existingEntries = JSON.parse(sessionStorage.getItem("movie-list"));
        sessionStorage.setItem(newMovie.name.replaceAll(" ", "-").toLowerCase(), JSON.stringify(newMovie));
        existingEntries.push(newMovie);
        sessionStorage.setItem("movie-list", JSON.stringify(existingEntries));

        location.reload();
        divForm.style.display = "none";

    } else {
        alert("Please complete each field");
        return;
    }
});

// Configure close button
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    divForm.style.display = "none";
});