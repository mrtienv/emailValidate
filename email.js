let check = document.querySelector('.check');
let password = document.querySelector('.password');
let text = document.querySelector('.text');
let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
let text1 = [3, 4];
let example = '4 va 3 la doi ban than';
console.log(example.match(text1));
check.addEventListener('click', ()=>{
    if(password.value == '') {
        text.textContent = 'Please enter 334  an email address';
        text.style.color = '#000';
    } else if(password.value.match(regex)) {
        text.innerHTML = 'Congrats! You enter a valid email';
        text.style.color = 'rgba(4, 125, 9, 1)';
    } else {
        text.textContent = 'Sorry, your email is invalid';
        text.style.color = 'rgba(255, 0, 0, 1)';
    }
})