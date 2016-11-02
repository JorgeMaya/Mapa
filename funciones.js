function registrar(){
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contra = document.getElementById('pass').value;
    
    if(!localStorage.getItem('contador')){
        localStorage.setItem('contador',0);
    }
    
    contador = localStorage.getItem('contador');
    
    console.log(contador);
    
    localStorage.setItem('nombre'+contador, nombre);
    localStorage.setItem('correo'+contador, correo);    
    localStorage.setItem('pass'+contador, contra);
    
    contador++;

    localStorage.setItem('contador', contador);
    
    /*localStorage.setItem('user', nombre);
    localStorage.setItem('mail', correo);
    localStorage.setItem('pass', contra);
    alert("Registrado exitosamente");
    window.location.assign('index.html');*/
}

function verificar(){
    var correo = document.getElementById('correo').value;
    var psswrd = document.getElementById('pass').value;
    var user = localStorage.getItem('mail');
    var pass = localStorage.getItem('pass');
    
    if(correo==user && psswrd==pass){
        window.location.assign('main.html');
    }
    else{
        alert("Usuario y/o contraseña incorrectos");
    }
}