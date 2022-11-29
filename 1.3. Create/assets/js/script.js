let learnerArray = [
    "Arno Volts",
    "Aurélien Mariaule",
    "Aurore Lemaire",
    "Benjamin Porsont",
    "Céline Verreydt",
    "Corentin Miserque",
    "Dominique Coppée",
    "Edouard de Romrée de Vichenet",
    "Hugo Goorickx",
    "Jofrey Houyoux",
    "Jonathan Manes",
    "Jonathan Bajoux",
    "Laura Wilhelmi",
    "Lysie Soyez",
    "Marnie Benalia",
    "Mathilde Cornelis",
    "Milo Bonnet",
    "Nadim El Nakadi",
    "Nathalie Vanden Abeele",
    "Nathalie Goffette",
    "Nour Everaert",
    "Pierre Mauriello",
    "Quentin Bource",
    "Virginie Dourson"];

let article = document.body.getElementsByTagName("article")[0];
learnerArray.sort(() => 0.5 - Math.random());

for (let learner of learnerArray) {
    let section = document.createElement("section");

    let randomColorArray = getRandomColor();

    section.style.backgroundColor = randomColorArray[1];

    let p = document.createElement("p");
    p.innerText = learner;
    section.appendChild(p);
    article.appendChild(section);

    if (randomColorArray[0] <= 90) {
        p.style.color = "white";
    } else {
        p.style.color = "black";
    }
}

// Random color function
// Return an array with the brightness and the rgb value
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [getBrightness(r, g, b), ("rgb(" + r + "," + g + "," + b + ")")];
}

// Check for brightness
// Solution taken at https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
function getBrightness(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b);
}
