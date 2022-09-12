let count = 0;

const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const counter = document.getElementById("counter");
const heart = document.querySelector(".heart");

const healthBar = () => {
  heart.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const heartDiv = document.createElement("div");
    const newHeart = document.createElement("img");
    newHeart.classList.add("heart");
    newHeart.src =
      "https://ih1.redbubble.net/image.1283444257.9427/st,small,845x845-pad,1000x1000,f8f8f8.jpg";
    heartDiv.appendChild(newHeart);
    heart.append(heartDiv);
  }
};

const updateHealthBar = () => {
  counter.textContent = count;
  healthBar();
};
updateHealthBar();

subtract.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    updateHealthBar();
  }
});

add.addEventListener("click", () => {
  if (count <= 4) {
    count += 1;
    updateHealthBar();
  }
});
