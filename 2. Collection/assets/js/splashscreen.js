let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let cw = window.innerWidth;
let ch = window.innerHeight;
console.log(sessionStorage.getItem("first-time"));

if (sessionStorage.getItem("first-time") === null) {
  let header = document.querySelector("header");
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");
  let dayNightButton = document.querySelector(".day-night");

  header.style.display = "none";
  main.style.display = "none";
  footer.style.display = "none";
  dayNightButton.style.display = "none";
  console.log(sessionStorage.getItem("first-time"));
  document.body.prepend(canvas)
  let button = document.createElement("button");
  button.className = "enter";
  button.innerText = "Enter the movie list"
  button.addEventListener("click", () => {
    canvas.style.display = "none";
    button.style.display = "none";

    let header = document.querySelector("header");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let dayNightButton = document.querySelector(".day-night");

    header.style.display = "block";
    main.style.display = "block";
    footer.style.display = "block";
    dayNightButton.style.display = "block";
    let audio = new Audio("https://www.cjoint.com/doc/21_02/KBwqN2tAvxs_netflix-tou-doum.mp3");
    audio.play();
  })
  document.body.appendChild(button);

  canvas.width = cw;
  canvas.height = ch;
  window.addEventListener('resize', function (event) {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw
    canvas.height = ch;
    maxColumns = cw / fontSize;
  }, true);

  sessionStorage.setItem("first-time", "true");
}

let charArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "А",
  "В",
  "Г",
  "Д",
  "Є",
  "Ѕ",
  "З",
  "И",
  "Ѳ",
  "І",
  "К",
  "Л",
  "М",
  "Н",
  "Ѯ",
  "Ѻ",
  "П",
  "Ч",
  "Р",
  "С",
  "Т",
  "Ѵ",
  "Ф",
  "Х",
  "Ѱ",
  "Ѿ",
  "Ц",
];

let maxCharCount = 300;
let fallingCharArr = [];
let fontSize = 13;
let maxColumns = cw / fontSize;


let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

    ctx.fillStyle = "coral";
    ctx.font = fontSize + "px sans-serif";
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > ch) {
      this.y = (Math.random() * ch) / 2 - 50;
      this.x = Math.floor(Math.random() * maxColumns) * fontSize;
      this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
    }
  }
}

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * ch) / 2 - 50
    );
    fallingCharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, cw, ch);
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();