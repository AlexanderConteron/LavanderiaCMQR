var listar = document.querySelector('#adminPerfil');
    listar.addEventListener('click', e=>{
        window.location.href = "perfilGenerall.html";
        
    });

    var reiniciar1 = document.querySelector('#reiniciar1');
    reiniciar1.addEventListener('click', e=>{
        setTimeout(function(){
            window.location.reload(1);
         }, 0);
    });
    var reiniciar2 = document.querySelector('#reiniciar2');
    reiniciar2.addEventListener('click', e=>{
        setTimeout(function(){
            window.location.reload(1);
         }, 0);
    });
    

    var usuarios = document.querySelector('#adminUsuarios1');
    usuarios.addEventListener('click', e=>{
        window.location.href = "administrador.html";
        
    });
    
    var serviciosusuarios = document.querySelector('#serviciosUsuarios');
    serviciosusuarios.addEventListener('click', e=>{
        window.location.href = "servicios.html";
        
    });

    const cerrarSesion1 = document.querySelector('#cerrarSesion');
cerrarSesion1.addEventListener('click', e=>{
    autenticacion.signOut().then(()=>
    {
        window.location.href = "index.html";
        console.log("SESION CERRADA")
    })
})


        var clientes = fireStoreBD1.ref('usuarios/');
clientes.on("child_added",function(data){
    var taskValue = data.val();
    if(taskValue.cargo == 'Cliente'){
        crearTablaUsuarios('adminUsuarios');
}
if(taskValue.cargo == 'Empleado'){
    crearTablaUsuarios('adminUsuariosC');
}
function crearTablaUsuarios(idTabla1){
    var elemntostra = document.createElement('tr');
    var elemntostd1a = document.createElement('td');
    var elemntostd2a = document.createElement('td');
    var elemntostd3a = document.createElement('td');
    var elemntostd4a = document.createElement('td');
    var elemntostd5a = document.createElement('button');
    var elemntostd7a = document.createElement('td');
   // var elemntostd8a = document.createElement('button');
    var elemntostd9a = document.createElement('td');
    var elemntostd10a = document.createElement('img');
    elemntostd5a.textContent='Direccion' ;
    elemntostd5a.className="btn btn-outline-dark";
    //elemntostd8a.textContent='Editar Cargo' ;
    //elemntostd8a.className="btn btn-outline-dark";
    elemntostd2a.textContent = taskValue.nombre;
    elemntostd1a.textContent = taskValue.cargo;
    elemntostd4a.textContent = taskValue.email;
    elemntostd10a.src= taskValue.foto;
    elemntostd10a.style.width= '60px';
    elemntostd7a.appendChild(elemntostd5a);
    //elemntostd9a.appendChild(elemntostd8a);
    elemntostd3a.appendChild(elemntostd10a);
    //elemntostd3a.textContent = taskValue.foto;
    document.getElementById(idTabla1).appendChild(elemntostra);
    elemntostra.appendChild(elemntostd3a);
    elemntostra.appendChild(elemntostd2a);    
    elemntostra.appendChild(elemntostd1a);
    elemntostra.appendChild(elemntostd4a);
    elemntostra.appendChild(elemntostd7a);
    elemntostra.appendChild(elemntostd9a);
    elemntostd5a.addEventListener('click', e=>{
            
        $('#detalleModal9').modal('show'); 
        
        agregarMapa(taskValue.latitud,taskValue.longitud);
        
        /*var detallesq = fireStoreBD1.ref('pedidosdetallePrenda/');
detallesq.orderByChild("maestro").equalTo(taskValue.idPD).on("child_added",function(data){});*/
    });
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