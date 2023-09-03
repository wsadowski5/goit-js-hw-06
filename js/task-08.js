const loginForm = document.querySelector('.login-form')

const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    if ( emailValue === '' || passwordValue === ''){
        alert('Please fill in all the fields!')
    }
    const values = {
        email : `${emailValue}`,
        password : `${passwordValue}`,
    }

    console.log(values);
    form.reset();
}

loginForm.addEventListener("submit", handleSubmit)