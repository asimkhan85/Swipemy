let img = document.getElementById("product");
let total = 6;
let current = 1;

let startX = 0;

img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

img.addEventListener("touchmove", (e) => {
    let moveX = e.touches[0].clientX;

    if (moveX - startX > 20) {
        current--;
        if (current < 1) current = total;
        img.src = "images/" + current + ".png";
        startX = moveX;
    }

    if (startX - moveX > 20) {
        current++;
        if (current > total) current = 1;
        img.src = "images/" + current + ".png";
        startX = moveX;
    }
});
