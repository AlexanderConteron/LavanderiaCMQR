/*const/ direccion2 = document.querySelector('#g1');
direccion2.addEventListener('click', e=>{
    direccionp = direccion1.split(" ")
    const latitud1 = direccionp[0];
    const longitud1 = direccionp[1];
    console.log(latitud1);
    console.log(longitud1);
});*/

//REGISTRO PERSONA
const formularioRegistro1 = document.querySelector('#FormregistroUsuario');
formularioRegistro1.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const clave1 = document.querySelector('#clave1').value;
    
    autenticacion.createUserWithEmailAndPassword(email, clave1).then(userCredential=>{
        guardarDatos1(userCredential.user)
        verificarCorreo();
        formularioRegistro1.reset();
        $('#registrarmodal').modal('hide');
    }).catch(function(error) {
        formularioRegistro1.reset();
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            document.getElementById('labelExito').textContent="Clave insegura (Minimo 7 caracteres)"
            $('#modal5').modal('show');
            
        } else {
            document.getElementById('labelExito').textContent="Correo ya registrado ingrese uno nuevo"
            $('#modal5').modal('show');
        }
        console.log(error);
      });

})

/*const saludo = document.querySelector('#saludos1');
*/
//INICIAR SESION NORMAL
const formularioInicioSesion1 = document.querySelector('#FormIniciarSesionUsuario');
formularioInicioSesion1.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.querySelector('#email1').value;
    const clave1 = document.querySelector('#clave11').value;
    autenticacion.signInWithEmailAndPassword(email, clave1).then(userCredential=>{
        console.log("SESION INICIADA")
        formularioInicioSesion1 .reset();
        //window.location.href = "inicio.html";
        $('#iniciarSesionmodal').modal('hide');
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            document.getElementById('labelExito').textContent="Ingrese credenciales correctas"
            $('#modal5').modal('show');
            $('#iniciarSesionmodal').modal('hide');
            
            //credenciales Icorrdadsd
        } else {
            document.getElementById('labelExito').textContent="El usuario aun no ha sido registrado"
            $('#modal5').modal('show');
            $('#iniciarSesionmodal').modal('hide');
        }
        //console.log(error);
        //document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
    
    

})

//INICIAR SESION FACEBOOK

const iniciarFacebook =document.querySelector('#botonFacebook');

iniciarFacebook.addEventListener('click',e=>{

    const provider =new firebase.auth.FacebookAuthProvider();
    
    autenticacion.signInWithPopup(provider)
    .then(result =>{
    var vari1=result.credential.accessToken;
    var usuario11= result.user; 
    console.log("SESION INICIADA")
    //window.location.href = "inicio.html";
    guardarDatos(usuario11);    
        formularioInicioSesion1 .reset();
        $('#iniciarSesionmodal').modal('hide');  
    })
    .catch(err=>{
        console.log(err)
    })
})

//INICIAR SESION GMAIL

const iniciarGoogle =document.querySelector('#botonGoogle');
const provider1 =new firebase.auth.GoogleAuthProvider();
iniciarGoogle.addEventListener('click',e=>{
    autenticacion.signInWithPopup(provider1)
    .then(result =>{
        console.log("SESION INICIADA")
        var vari2=result.credential.accessToken;
    var usuario12= result.user;  
        formularioInicioSesion1 .reset();
        $('#iniciarSesionmodal').modal('hide');
        guardarDatos(usuario12);    
        
    })
    .catch(err=>{
        console.log(err)
    })
})



function verificarEmpleado(user1){
    fireStoreBD1.ref('usuarios/'+user1).once("child_added",function(data){
        var datos = data.val();
        if(datos == 'Cliente'){
            window.location.href = "inicio.html";
        }else if(datos == 'Empleado'){
            window.location.href = "serviciosE.html";
        }else{
            window.location.href = "servicios.html";
    }
});
}
autenticacion.onAuthStateChanged(user=>{
    if(user){
        verificarEmpleado(user.uid)
    }else{

    }
})




function guardarDatos(user){
    var usuario={
        uid:user.uid,
        nombre: user.displayName,
        email: user.email,
        foto: user.photoURL,
        cargo: 'Cliente',
        latitud: latitudO,
        longitud: longitudO
        
    }
    fireStoreBD1.ref('usuarios/'+user.uid).set(usuario)       
}
function guardarDatos1(user){
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    var cargo1 = document.getElementById("combobox1").value; 
    var usuario={
        uid:user.uid,
        nombre: nombre+ " "+apellido ,
        email: user.email,
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png",
        cargo:cargo1,
        latitud: latitud1,
        longitud: longitud1
    }
fireStoreBD1.ref('usuarios/'+user.uid).set(usuario)   
}



/*var referencia1 = fireStoreBD1.ref('usuarios');
referencia1.orderByChild("uid").equalTo('zpeX4AK83tenE4mr0rVTd6T2H982').once('value',function(snapshot){
    console.log(snapshot.val());
})*/
/*function mostrarPtuebita1(user){
    var referencia1 = fireStoreBD1.ref('usuarios/'+user.uid);
    referencia1.on('value',function(snapshot){
        var data=snapshot.val();
        document.getElementById("titular").textContent =  data.nombre;
        console.log(referencia1);
        console.log(user.uid);
        console.log(data.nombre);
        console.log(referencia1);
        
        
    })
}*/

//VERIFICAR CORREO

function verificarCorreo(){
    var usuariov = autenticacion.currentUser;
    usuariov.sendEmailVerification().then(function(){
        console.log('VERIFICANDO');
    }).catch(function(error){
        console.log('ERRORRRRRRRRRR');
    })


}

/*function mostrarImagen(url){
    fireStoreBD1.ref("usuarios").on("child_added",function(s){
    
        var img = document.createElement('img');
        img.src=url;
        img.width=50;
    document.getElementById('imagenPerfil').appendChild(img);
    })
    
}*/
/*function mostrarImagen1(var1,var2){
    saludo.innerHTML = `<h4 class="alert-heading">Bienvenido ${var1}</h4>
    <img src="${var2}" style="width:50px">`;
}
function NomostrarImagen1(){
    saludo.innerHTML = `<h4 class="alert-heading"></h4>`;
}*/


