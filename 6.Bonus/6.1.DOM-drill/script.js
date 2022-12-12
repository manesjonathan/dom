let ul = document.querySelector("ul");
let children = document.querySelector("ul").childNodes;

for (let child of children) {
    if (child.nodeType === 1) {
        if (child.textContent === "Fast and Furious") {
            let position = Array.from(child.parentNode.children).indexOf(child);
            if (position !== 1) {
                {
                    ul.prepend(child)
                    child.classList.toggle("important");
                }
            }
        }

        child.addEventListener("click", () => {
            if (child.textContent !== "Fast and Furious") {
                window.alert(child.textContent);
            } else {
                let message = "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
                window.alert(message);

            }

        });
    }

    children.forEach(element => {
        if (child.isEqualNode(element) && !child.isSameNode(element)) {
            ul.removeChild(element);
        }
    });
}

document.body.addEventListener("keyup", (e) => {
    if (e.code === "KeyR") {
        for (let child of children) {
            if (child.nodeType === 1) {
                if (child.textContent !== "Fast and Furious") {
                    ul.insertBefore(child, children[Math.floor(Math.random() * children.length)]);

                } else if (child.textContent === "Fast and Furious"){
                    ul.prepend(child);

                }
            }
        }
    }
})

let div = document.createElement("div");
document.body.insertBefore(div, ul);

let select = document.createElement("select");
let optionOne = document.createElement("option");
optionOne.textContent = "important franchises";
let optionTwo = document.createElement("option");
optionTwo.textContent = "normal franchises";

select.appendChild(optionOne);
select.appendChild(optionTwo);
div.appendChild(select);

select.addEventListener("change", () => {

    switch (select.value) {
        case optionOne.textContent:
            for (let child of children) {
                if (child.nodeType === 1) {
                    console.log(child);
                    if (child.className === "important") {
                        child.style.visibility = "visible";
                    } else {
                        child.style.visibility = "hidden";

                    }
                }
            }
            break;
        case optionTwo.textContent:
            for (let child of children) {
                if (child.nodeType === 1) {
                    child.style.visibility = "hidden";
                    if (child.className !== "important") {
                        child.style.visibility = "visible";
                    }
                }
            }
            break;
        default:
            child.style.visibility = "visible";
    }
});
