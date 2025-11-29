const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png"
];

let currentIndex = 0;
const imgElement = document.getElementById("productImage");

imgElement.src = images[currentIndex];

let startX = 0;

imgElement.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

imgElement.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (endX < startX - 50) {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (endX > startX + 50) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    imgElement.src = images[currentIndex];
});
