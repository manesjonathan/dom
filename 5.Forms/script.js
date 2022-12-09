let firstName = document.querySelector("#firstname");
firstName.addEventListener("keyup", () => {
    let display = document.querySelector("#display-firstname");
    display.textContent = firstName.value;
});


let age = document.querySelector("#age");
age.addEventListener("keyup", () => {
    let section = document.querySelector("#a-hard-truth");

    if (Number(age.value) >= 18) {
        section.style.visibility = "visible";
    } else {
        section.style.visibility = "hidden";

    }
})

let pwd = document.querySelector("#pwd");
let pwdConfirm = document.querySelector("#pwd-confirm");

pwd.addEventListener("keyup", () => {
    if (pwd.value.length < 6) {
        pwd.style.backgroundColor = "red";
    } else {
        pwd.style.background = "white";
    }
});

pwdConfirm.addEventListener("keyup", () => {
    console.log(pwd.value);
    if (pwdConfirm.value === pwd.value) {
        console.log(pwdConfirm.value);
        pwdConfirm.style.background = "white";
    } else {
        pwdConfirm.style.backgroundColor = "red";
    }
});

let toggleDarkMode = document.querySelector("#toggle-darkmode");
toggleDarkMode.addEventListener("change", (e) => {
    if (e.target.value === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector("")
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});