const form = document.querySelector('.forms');
let userName = document.getElementById('name');
let email = document.getElementById('email');
const error = document.querySelector('.error-message');
const btn = document.querySelector('.btn');

function errorMsg() {
    error.style.display = 'none';
}

btn.addEventListener('click', function(){
    // preventDefault();

    if(userName.value === '' ||  email.value === ''){
        error.style.display = 'block';
        setTimeout(errorMsg, 5000)
        return;
    }
    let result = `Hello ${userName.value}🎊👨‍💻, your form has been submitted successfully. Your email is ${email.value}`
    alert(result);

    userName.value = '';
    email.value = '';
    
});