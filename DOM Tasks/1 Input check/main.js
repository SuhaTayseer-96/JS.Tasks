let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let warning = document.getElementById("warning");
//   console.log(password);
[password, confirm_password].forEach((field) =>
field.addEventListener("input", () => {
    let password_value = password.value;
    let confirm_password_value = confirm_password.value;
    console.log(password_value);
    if (password_value.length < 6)
    warning.innerText = "passwords must be at least 6 characters long.";
    else if (password_value !== confirm_password_value)
    warning.innerText = "The two passwords must match.";
    else warning.innerText = "";
})
);