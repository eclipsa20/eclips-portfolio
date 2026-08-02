const tileCount = 100;

for (let i = 0; i < tileCount; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";

    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 30;
    const randomRotate = Math.random() * 90;

    tile.style.top = randomTop + "%";
    tile.style.left = randomLeft + "%";

    document.body.appendChild(tile);
   const randomDuration = 15 + Math.random() * 20;
tile.style.animationDuration = randomDuration + "s";
const randomDelay = Math.random() * 20;
tile.style.animationDelay = "-" + randomDelay + "s";
}
