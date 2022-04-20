function handleSignIn(){
    document.getElementById('sign-up').classList.remove('right','animaltion-right')
    document.getElementById('sign-up').classList.add('left','animaltion-left')
    document.getElementById('form-sign-up').classList.replace('d-none','d-block')
    document.getElementById('form-login').classList.replace('d-block','d-none')
}

function handleLogin(){
    document.getElementById('sign-up').classList.add('right','animaltion-right')
    document.getElementById('sign-up').classList.remove('left','animaltion-left')
    document.getElementById('form-login').classList.replace('d-none','d-block')
    document.getElementById('form-sign-up').classList.replace('d-block','d-none')
}