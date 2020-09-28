"   use strict";
const img = ["./img/aliss.png", "./img/im.png", "./img/ann.png"];

let count = img.length;
console.log(count);

function randomRotation(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
const cover = document.querySelector(".cover");
function init() {
  for (let i = 0; i < img.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.background = `url('${img[i]}')`;
    card.style.backgroundSize = "cover";
    card.style.transform = `rotate(${randomRotation(-5, 5)}deg)`;
    cover.append(card);
  }
}
cover.addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    event.target.classList.add("go");
    count--;
  }
  if (count == 0) {
    cover.innerHTML = "";
    init();
    count = img.length;
    console.log(cover); 
  }
});
init();
