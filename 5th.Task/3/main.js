let text_area = document.getElementById("my-text");
document
.querySelectorAll(`input[type="checkbox"]`)
.forEach((check_box) => {
    check_box.addEventListener("change", (event) => {
    text_area.style[check_box.value] = check_box.checked
        ? check_box.name
        : "";
    });
});
document
.querySelector("#fontsize")
.addEventListener("change", (event) => {
    text_area.style.fontSize = event.target.value;
});
document
.querySelector("#fontfamily")
.addEventListener("change", (event) => {
    text_area.style.fontFamily = event.target.value;
});