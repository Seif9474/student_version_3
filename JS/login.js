let rememberMe = document.querySelector(".remember"),
    checkbox = document.querySelector(".checkbox"),
    inputPassword = document.getElementById("input_password"),
    inputEmail = document.getElementById("input_email"),
    span = document.querySelector(".spans"),
    loginBtn = document.querySelector(".login h3"),
    inputContainer = document.querySelectorAll(".input_container");


const emailRegex = /^[a-zA-Z0-9._%+-]+@std.mans.edu.eg/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

rememberMe.addEventListener("click", (e) => {
    if (checkbox.classList.contains("active")) {
        checkbox.classList.remove("active")
    } else {
        checkbox.classList.add("active")
    }
})


inputPassword.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
        span.style.display = "none"; 
        inputContainer[1].classList.remove("error")
     }
});

inputEmail.addEventListener("click", (e) => {
    inputContainer[0].classList.remove("error")
})


loginBtn.addEventListener("click",(e) => {
    if(emailRegex.test(inputEmail.value)  &&  passwordRegex.test(inputPassword.value)){
     window.location.href = "http://127.0.0.1:5500/welcomePage.html"
    } else {
        if(!emailRegex.test(inputEmail.value)){
            inputContainer[0].classList.add("error")
        }
        if(!passwordRegex.test(inputPassword.value)){
            inputContainer[1].classList.add("error")
        }
    }
})