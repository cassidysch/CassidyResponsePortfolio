let home = document.querySelector(".homepage");
let about = document.querySelector(".about");
let responseOne = document.querySelector(".firstresponsepage");
let aboutButton = document.querySelector(".aboutbutton");
let responseOneButton = document.querySelector(".response1button");
let backHomeButton = document.querySelector(".backhome");
let backHomeButton2 = document.querySelector(".backhome2");
let backHomeButton3 = document.querySelector(".backhome3");
let lyricButton = document.querySelector("#lyricbtn");
let lyrics = document.querySelector("#lyrics");
let responseTwo = document.querySelector(".secondresponsepage");
let responseTwoButton = document.querySelector(".response2button");
let lyricButtonTwo = document.querySelector("#lyricbtn2");
let lyricsTwo = document.querySelector("#lyrics2");

about.style.display = "none";
responseOne.style.display = "none";
responseTwo.style.display = "none";
lyrics.style.display = "none";
lyricsTwo.style.display = "none";

aboutButton.onclick = function() {
  home.style.display = "none";
  about.style.display = "flex";
};

responseOneButton.onclick = function() {
  home.style.display = "none";
  responseOne.style.display = "block";
};

responseTwoButton.onclick = function() {
  home.style.display = "none";
  responseTwo.style.display = "block";
};

backHomeButton.onclick = function() {
  about.style.display = "none";
  home.style.display = "flex";
};

backHomeButton2.onclick = function() {
  responseOne.style.display = "none";
  home.style.display = "flex";
};

backHomeButton3.onclick = function() {
  responseTwo.style.display = "none";
  home.style.display = "flex";
};

lyricButton.onclick = function() {
  lyrics.style.display = "block";
};

lyricButtonTwo.onclick = function() {
  lyricsTwo.style.display = "block";
};