let home = document.querySelector(".homepage");
let about = document.querySelector(".about");
let responseOne = document.querySelector(".firstresponsepage");
let aboutButton = document.querySelector(".aboutbutton");
let responseOneButton = document.querySelector(".response1button");
let backHomeButton = document.querySelector(".backhome");
let backHomeButton2 = document.querySelector(".backhome2")

about.style.display = "none";
responseOne.style.display = "none";

aboutButton.onclick = function() {
  home.style.display = "none";
  about.style.display = "flex";
};

responseOneButton.onclick = function() {
  home.style.display = "none";
  responseOne.style.display = "block";
};

backHomeButton.onclick = function() {
  about.style.display = "none"; 
  home.style.display = "flex";
};

backHomeButton2.onclick = function() {
  responseOne.style.display = "none";
  home.style.display = "flex";
};