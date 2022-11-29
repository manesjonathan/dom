// Get title h1 and display it in console
let body = document.body;
let title = body.getElementsByTagName("h1")[0];
console.log(title.innerText);

// Change title and display it in console
title.innerText = "Modifying the DOM";
console.log(title.innerText);


// Change bg color with hot pink
body.style.backgroundColor = "#FF69B4";

// Change bg color with a random rgb color
body.style.backgroundColor = getRandomColor();

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return ("rgb(" + r + "," + g + "," + b + ")")
}

// Display in console each nodes of body (second document child)
for (node of body.childNodes){
    console.log(node)
}