let home = document.querySelector(".homepage");
let about = document.querySelector(".about");
let responseOne = document.querySelector(".firstresponsepage");
let aboutButton = document.querySelector(".aboutbutton");
let responseOneButton = document.querySelector(".response1button");
let backHomeButton = document.querySelector(".backhome");
let backHomeButton2 = document.querySelector(".backhome2");
let backHomeButton3 = document.querySelector(".backhome3");
let backHomeButton4 = document.querySelector(".backhome4");
let lyricButton = document.querySelector("#lyricbtn");
let lyrics = document.querySelector("#lyrics");

let responseTwo = document.querySelector(".secondresponsepage");
let responseTwoButton = document.querySelector(".response2button");
let lyricButtonTwo = document.querySelector("#lyricbtn2");
let lyricsTwo = document.querySelector("#lyrics2");

let responseThree = document.querySelector(".thirdresponsepage");
let responseThreeButton = document.querySelector(".response3button");
let lyricsButtonThree = document.querySelector("#lyricsbtn3");
let lyricsThree = document.querySelector("#lyrics3");


about.style.display = "none";
responseOne.style.display = "none";
responseTwo.style.display = "none";
responseThree.style.display = "none";
lyrics.style.display = "none";
lyricsTwo.style.display = "none";
lyricsThree.style.display = "none";

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

responseThreeButton.onclick = function() {
  home.style.display = "none";
  responseThree.style.display = "block";
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

backHomeButton4.onclick = function() {
  responseThree.style.display = "none";
  home.style.display = "flex";
};

lyricButton.onclick = function() {
  lyrics.style.display = "block";
};

lyricButtonTwo.onclick = function() {
  lyricsTwo.style.display = "block";
};

lyricsButtonThree.onclick = function() {
  lyricsThree.style.display = "block";
};