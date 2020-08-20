var listar = document.querySelector('#empleadoPerfil');
    listar.addEventListener('click', e=>{
        window.location.href = "perfilEmpleado.html";
        
    });

    
    var serviciosusuarios = document.querySelector('#serviciosEmpleados');
    serviciosusuarios.addEventListener('click', e=>{
        window.location.href = "serviciosE.html";
        
    });

    const cerrarSesion1 = document.querySelector('#cerrarSesion');
cerrarSesion1.addEventListener('click', e=>{
    autenticacion.signOut().then(()=>
    {
        window.location.href = "index.html";
        console.log("SESION CERRADA")
    })
})

function mostrarBienvenido(user){
    var referencia1 = fireStoreBD1.ref('usuarios/'+user.uid);
    referencia1.on('value',function(snapshot){
        var data=snapshot.val();
        //document.getElementById("titular").textContent =  "  "+"BIENVENIDO"+" "+data.nombre;
        document.getElementById("imagen1").src=data.foto;
        nombre1=data.nombre.split(' ');
        document.getElementById("nombreCliente").value = nombre1[0]; 
        document.getElementById("apellidoCliente").value =nombre1[1];
        document.getElementById("emailCliente").value = data.email; 
        agregarMapa(data.latitud, data.longitud);
        /*console.log(data.latitud);
        console.log(data.longitud);*/
        
    })
}
autenticacion.onAuthStateChanged(user=>{
    if(user){
          mostrarBienvenido(user);
                      //mostrarImagen1(autenticacion.currentUser.displayName,"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png");

        
    }else{
        
    }
})
function agregarMapa(var1,var2){
    var mymap = L.map('myMap1').setView([var1, var2], 15)
    navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
      }).addTo(mymap);
        marker1 = new L.marker([var1, var2],13.5).addTo(mymap);
      });     
}


