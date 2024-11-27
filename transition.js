document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menudisplay = document.querySelector(".menudisplay");
    const overlay = document.querySelector(".overlay");
    const backBtn = document.getElementById("backbtn");

    menuBtn.addEventListener("click", () => {
        menudisplay.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        menudisplay.classList.remove("active");
        overlay.classList.remove("active");
    });

    backBtn.addEventListener("click", () => {
        menudisplay.classList.remove("active");
        overlay.classList.remove("active");
    });
});
