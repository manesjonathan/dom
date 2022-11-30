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


/**
 * 
 * Create a new section with a random background-color for each learner.
 * The section should contain a paragraph with the name of the leaner.
 * Those sections should be appended in the article
 * 
*/
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


/**
 * 
 * Generate a random color with its brightness level.
 * @return {Array} a Number with the brightness level and a String with the RGB value.
 * 
*/
function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [getBrightness(r, g, b), ("rgb(" + r + "," + g + "," + b + ")")];
}


/**
 *
 * Calculate the brightness of a color.
 * @param {number} r The red value of the color
 * @param {number} g The green value of the color
 * @param {number} b The blue value of the color
 * @return {number} The value of the brightness level
 * Solution taken at https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
 *
*/
function getBrightness(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b);
}