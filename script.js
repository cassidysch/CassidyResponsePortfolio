let home = document.querySelector(".homepage");
let about = document.querySelector(".about");
let responseOne = document.querySelector(".firstresponsepage");
let aboutButton = document.querySelector(".aboutbutton");
let responseOneButton = document.querySelector(".response1button");

about.style.display = "none";
responseOne.style.display = "none";

aboutButton.onclick = function() {
    home.style.display = "none";
    about.style.display = "block";
};

responseOneButton.onclick = function() {
    home.style.display = "none";
    responseOne.style.display = "block";
};