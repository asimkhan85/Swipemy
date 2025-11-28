let index=1;
const total=6;
const img=document.getElementById("mainImage");
let startX=0;

document.addEventListener("touchstart", e=>{
  startX=e.touches[0].clientX;
});
document.addEventListener("touchend", e=>{
  let endX=e.changedTouches[0].clientX;
  if(endX-startX>50){
    index=index-1<1?total:index-1;
  }else if(startX-endX>50){
    index=index+1>total?1:index+1;
  }
  img.src=`images/${index}.png`;
});
