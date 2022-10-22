const btnRegistration = document.querySelector('.btn-registration')
const btnBack = document.querySelector('.btn-back')
const formLogin = document.querySelector('.login')
const formRegistration = document.querySelector('.registration')

btnRegistration.addEventListener('click', ()=>{
    formLogin.style.display = "none"
    formRegistration.style.display = "flex"
    document.title = "Cadastrar"
})
btnBack.addEventListener('click', ()=>{
    formLogin.style.display = "flex"
    formRegistration.style.display = "none"
    console.log('clicou')
    document.title = "Login"
})