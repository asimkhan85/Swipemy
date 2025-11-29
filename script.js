let current = 1;
let total = 6;  // jitni photos hain

const img = document.getElementById("galleryImage");
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 40) {
    // NEXT
    current++;
    if (current > total) current = total;
  } 
  else if (endX - startX > 40) {
    // PREVIOUS
    current--;
    if (current < 1) current = 1;
  }

  img.src = `images/${current}.png`;
});
