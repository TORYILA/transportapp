

const regbutton = document.getElementById("regbtn");
const reg_menu = document.getElementById("regmenu");

regbutton.addEventListener("click", () => {
    reg_menu.classList.toggle("regactive");
});

document.addEventListener("click", function(event) {
    if (!reg_menu.contains(event.target) && event.target !== regbutton) {
        reg_menu.classList.remove("regactive");
    }
});