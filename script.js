// varification email & password 
const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    const emailname = document.getElementById('emailName').value;
    const password = document.getElementById('password').value;

    if (emailname == 'bipul@gmail.com' && password == 12345) {
        window.location.href = 'bank.html';
    }
})


