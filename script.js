let parllex = document.getElementById("parllex");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parllex.style.backgroundPositionY = offset * 0.7 + "px";
});