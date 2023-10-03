document.addEventListener("DOMContentLoaded", check);
const form = document.querySelector('.form');
const result = document.querySelector('.result');

function check() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.querySelector("input[name='name']").value
        const especie = document.querySelector("input[name='especie']").value
        const age = document.querySelector("input[name='age']").value
        
        if(!title || !especie || !age) {
            result.classList.add('error');
            result.innerHTML = 'Preencha os campos em branco'
        }
        else {
            result.classList.remove('error');
            result.classList.add('ok');
            result.innerHTML = 'Enviado!'
            form.submit();
        }
    })
}