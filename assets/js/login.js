const formSection = document.querySelector(".loginAndRegistration"); 
const form = document.querySelector(".loginAndRegistration form");

const loginIcon = document.querySelector("#logIn");
const loginButton = document.querySelector(".loginButton");
const registrationButton = document.querySelector(".registrationButton");

localStorage.setItem("whatIsActive", 0);

let none = ``;

let login = `<span class="buttons">
                <a class="loginButton" onclick="openForm(1)" href="javascript:void(0)" style="background-color: #af0404;">Login</a>
                <a class="registrationButton" onclick="openForm(2)" href="javascript:void(0)">registrer</a>
            </span><input type="text" placeholder="Brugernavn">
            <input type="text" placeholder="Kodeord">
            <button type="button">Login</button>
            <button onclick="openForm(0)" type="button">close</button>`;

let registration = `<span class="buttons">
                        <a class="loginButton" onclick="openForm(1)" href="javascript:void(0)">Login</a>
                        <a class="registrationButton" onclick="openForm(2)" href="javascript:void(0)" style="background-color: #af0404;">registrer</a>
                    </span>
                    <input type="text" placeholder="Brugernavn">
                    <input type="text" placeholder="Email">
                    <input type="text" placeholder="Kodeord">
                    <input type="date">
                    <button type="button">Registrer</button>
                    <button onclick="openForm(0)" type="button">close</button>`;

function openForm(n) {
    localStorage.setItem("whatIsActive", n);

    if(localStorage.getItem("whatIsActive") == 0) { //dette er for at lukke loginAndRegistration sektionen
        formSection.style.display = "none";
        form.innerHTML = none;
    } else if(localStorage.getItem("whatIsActive") == 1) { //dette er for at åbne login sektionen
        formSection.style.display = "flex";
        form.innerHTML = login;
    } else if(localStorage.getItem("whatIsActive") == 2) { //dette er for at åbne Registration sektionen
        formSection.style.display = "flex";
        form.innerHTML = registration;
    }
}

function closeForm() {
    localStorage.setItem("whatIsActive", 0);
};










// const loginButton = document.querySelector(".loginButton");
// const registrationButton = document.querySelector(".registrationButton");
// const closeSection = document.querySelector("#closeButton");

// function toggleLoginSection() {
//     registrationSection.classList.remove("loginAndRegistrationActive")
//     registrationButton.classList.remove("buttonActive");
//     loginSection.classList.add("loginAndRegistrationActive");
//     loginButton.classList.add("buttonActive");
// };

// function toggleRegistrationSection() {
//     loginSection.classList.remove("loginAndRegistrationActive");
//     loginButton.classList.remove("buttonActive");
//     registrationSection.classList.add("loginAndRegistrationActive")
//     registrationButton.classList.add("buttonActive");
// };

// registrationButton.addEventListener("click", (e) => {
//     toggleRegistrationSection();
// });

// loginButton.addEventListener("click", (e) => {
//     toggleLoginSection();
// });

// loginIcon.addEventListener("click", (e)=> {
//     toggleLoginSection();
// });

// closeSection.addEventListener("click", (e)=> {
//     loginSection.classList.remove("loginAndRegistrationActive");
//     registrationSection.classList.remove("loginAndRegistrationActive")
// });
