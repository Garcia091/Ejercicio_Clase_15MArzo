let nombre, correo, mensaje;
let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje = document.querySelector('#textarea')
 console.log(nombre)
}