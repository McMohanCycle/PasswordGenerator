const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = "",
  password2 = "",
  passwordLeft = document.getElementById("password-left"),
  passwordRight = document.getElementById("password-right"),
  resetH4 = document.getElementById("reset-h4");

let allSpan = document.querySelector("span"),
  darkModeH4 = document.getElementById("dark-mode-h4"),
  labelH4 = document.querySelector(".label-h4"),
  passwordLengthH4 = document.getElementById("passwordLengthH4"),
  resetHidden = document.querySelector(".reset-hidden"),
  footerH4 = document.querySelector(".footer-h4"),
  allP = document.querySelector(".heading-p"),
  separator = document.querySelector(".separator"),
  main = document.querySelector("main");

function generatePassword() {
  let passwordLength = parseInt(passwordLengthH4.innerText);
  for (let i = 0; i < passwordLength; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
  passwordLeft.textContent = password1;
  passwordRight.textContent = password2;
  resetH4.classList.toggle("reset-hidden");
}

function resetPassword() {
  password1 = "";
  password2 = "";
  passwordLeft.textContent = "";
  passwordRight.textContent = "";
  resetH4.classList.toggle("reset-hidden");
}

function copyPassword(isRight) {
  if (password1.length)
    navigator.clipboard.writeText(isRight ? password2 : password1);
  alert("Password copied!");
}

function toggleDarkMode() {
  allSpan.classList.toggle("light-mode");
  darkModeH4.classList.toggle("light-mode");
  labelH4.classList.toggle("light-mode");
  passwordLengthH4.classList.toggle("light-mode");
  resetHidden.classList.toggle("light-mode");
  footerH4.classList.toggle("light-mode");
  allP.classList.toggle("light-mode");
  separator.classList.toggle("light-mode");
  main.classList.toggle("light-mode");
}
