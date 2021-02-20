function Up() {
    let tmp = document.getElementById('up');
    if (window.scrollY >= 100){ tmp.style.display = 'block'; }
    else{ tmp.style.display = 'none'; }
};
function scrollToTop() { window.scrollTo({top: 0, behavior: 'smooth'});}

window.addEventListener("scroll", Up);
let btn = document.getElementById("btm-img");
btn.addEventListener("mouseenter", function(){
    let btn = document.getElementById("btm-img");
    btn.style.width = "50px";
    btn.style.height = "50px";
});
btn.addEventListener("mouseleave", function(){
    let btn = document.getElementById("btm-img");
    btn.style.width = "45px";
    btn.style.height = "45px";
});
let btn_up = document.getElementById("up");
btn_up.onclick = scrollToTop;


