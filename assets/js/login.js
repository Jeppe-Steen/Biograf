const registrationSection = document.querySelector("#registrationSection");
const loginSection = document.querySelector("#loginSection");


const loginIcon = document.querySelector("#logIn");
const loginButton = document.querySelector(".loginButton");
const registrationButton = document.querySelector(".registrationButton");
const closeSection = document.querySelector("#closeButton");

function toggleLoginSection() {
    registrationSection.classList.remove("loginAndRegistrationActive")
    registrationButton.classList.remove("buttonActive");
    loginSection.classList.add("loginAndRegistrationActive");
    loginButton.classList.add("buttonActive");
};

function toggleRegistrationSection() {
    loginSection.classList.remove("loginAndRegistrationActive");
    loginButton.classList.remove("buttonActive");
    registrationSection.classList.add("loginAndRegistrationActive")
    registrationButton.classList.add("buttonActive");
};

registrationButton.addEventListener("click", (e) => {
    toggleRegistrationSection();
});

loginButton.addEventListener("click", (e) => {
    toggleLoginSection();
});

loginIcon.addEventListener("click", (e)=> {
    toggleLoginSection();
});

closeSection.addEventListener("click", (e)=> {
    loginSection.classList.remove("loginAndRegistrationActive");
    registrationSection.classList.remove("loginAndRegistrationActive")
});
