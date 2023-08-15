document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    console.log(email, password);

    if (email === 'sontan@gmail.com' && password === 'secret') {
        window.location.href = "bank.html";
    }
    else {
        alert('Invalid')
    }

})