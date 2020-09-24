let mailInput = document.querySelector("#emailInput");

function validateEmail(mail) {
    let hasError = false;

    if(!mailInput.value) {
        mailInput.focus();
        mailInput.placeholder = "Husk en mail";
        hasError = true;
        return false;
    } else {
        if(!isValidEmail(mailInput.value)) {
            mailInput.focus();
            mailInput.value = null;
            mailInput.placeholder = "Dette er ikke en Mail..";
            hasErrors = true;
            return false;
        };
    };

    if(!hasError) {
        mail.submit();
    };
};

function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}