// 2.1 Add a title attribute to element that has the important class
let importantEl = document.getElementsByClassName("important");
for (el of importantEl) {
    el.title = "This is an important item";
    console.log(el.title);
}



// 2.2 Select all img and hide those who doesn't have an important class
let imgList = document.querySelectorAll("img");
for (img of imgList) {
    if (img.className != "important") {
        img.style.display = "none";
    }
}


// 2.3 Display content of each paragraph + class name if there is one
// 2.4 Give a random color to each paragraph that has no class.
let paragraphs = document.querySelectorAll("p");
for (p of paragraphs) {
    console.log(p.innerText);

    if (p.className == false) {
        p.style.color = getRandomColor();
    } else {
        console.log("Class name = " + p.className);
    }
}


// Random color function
function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return ("rgb(" + r + "," + g + "," + b + ")")
}