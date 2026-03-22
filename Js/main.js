const text = "Front End Developer";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;
function s() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}