let images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png"
];

let current = 0;
let img = document.getElementById("productImage");

let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (endX < startX - 50) {
        current = (current + 1) % images.length; // next
    }

    if (endX > startX + 50) {
        current = (current - 1 + images.length) % images.length; // prev
    }

    img.src = images[current];
});
