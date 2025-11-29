let images = ["1.png","2.png","3.png","4.png","5.png","6.png"];
let current = 0;

const img = document.getElementById("productImage");

img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

img.addEventListener("touchmove", (e) => {
    let diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 20) {
        if (diff > 0) {
            current = (current - 1 + images.length) % images.length;
        } else {
            current = (current + 1) % images.length;
        }
        img.src = images[current];
        startX = e.touches[0].clientX;
    }
});
