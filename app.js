const emailChecker = () => {
    const mailInput = document.getElementById('mail').value;
    console.log(mailInput);
    validateEmail(mailInput);

}

function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        document.getElementById('error').innerText = 'Your Email Address is Correct';
        document.getElementById('error').style.color = "green";

    } else {
        document.getElementById('error').innerText = 'Your Email Address is incorrect';
        document.getElementById('error').style.color = "red";
    }
}

// let emailAdress = "test@gmail.com";
// console.log(validateEmail(emailAdress));
