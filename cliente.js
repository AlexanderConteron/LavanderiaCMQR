const cerrarSesion1 = document.querySelector('#cerrarSesion');
cerrarSesion1.addEventListener('click', e=>{
    autenticacion.signOut().then(()=>
    {
        window.location.href = "index.html";
        console.log("SESION CERRADA")
    })
})

const perfil = document.querySelector('#mostrarPerfil');
perfil.addEventListener('click', e=>{
    window.location.href = "perfilCliente.html";
})


const inicioP = document.querySelector('#inicioP');
inicioP.addEventListener('click', e=>{
    window.location.href = "inicio.html";
})

//Perfil




const fotoUsuario = document.querySelector('#saludos1');
function mostrarImagen1(var1,var2){
    fotoUsuario.innerHTML = `<h4 class="alert-heading">Bienvenido ${var1}</h4>
    <img src="${var2}" style="width:50px">`;
}

function NomostrarImagen1(){
    saludo.innerHTML = `<h4 class="alert-heading"></h4>`;
}




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


var clientes = fireStoreBD1.ref('pedidos/');
clientes.on("child_added",function(data){
    
    var taskValue = data.val();
    if(taskValue.usuarioP == autenticacion.currentUser.uid && taskValue.estado == 'porRecoger'){
    //console.log(taskValue.nombre
    //document.getElementById('entregar3').style.display = 'block';
    crearTabla('detalleRecoger');
    document.getElementById('recogerl').style.display = 'none';
    
    }
    if(taskValue.usuarioP == autenticacion.currentUser.uid && taskValue.estado == 'porEntregar'){
        //console.log(taskValue.nombre
        
       crearTabla('detalleRecoger2');
       document.getElementById('entragarl').style.display = 'none';   
        }
        if(taskValue.usuarioP == autenticacion.currentUser.uid && taskValue.estado == 'Entregado'){
            //console.log(taskValue.nombre
            
           crearTabla('detalleEntegado');
           document.getElementById('entregarl').style.display = 'none';   
            }
        
    //console.log(taskValue.estado);
    //document.getElementById
    function crearTabla(idtr){
        var elemntosr = document.createElement('tr');
        var elemntosd1 = document.createElement('td');
        var elemntosd3 = document.createElement('td');
        var elemntosd4 = document.createElement('td');
        var elemntosd5 = document.createElement('td');
        var elemntosd6 = document.createElement('td');
        var elemntosd7 = document.createElement('button');    
        elemntosd7.textContent = "Detalle"
        elemntosd1.textContent = taskValue.nombreP;
        var fecha1 = taskValue.fechaentrega;
        elemntosd3.textContent = fecha1;
        elemntosd4.textContent = taskValue.fechapedido;
        elemntosd5.textContent = '$ '+taskValue.total;
        elemntosd7.className="btn btn-outline-dark"
        document.getElementById(idtr).appendChild(elemntosr);
        elemntosr.appendChild(elemntosd1);
        elemntosr.appendChild(elemntosd3);
        elemntosr.appendChild(elemntosd4);
        elemntosr.appendChild(elemntosd5);
        elemntosr.appendChild(elemntosd6);
        elemntosd6.appendChild(elemntosd7);
        elemntosd7.addEventListener('click', e=>{
            $('#detalleModal7').modal('show');  
            var detallesq = fireStoreBD1.ref('pedidosdetallePrenda/');
detallesq.orderByChild("maestro").equalTo(taskValue.idPD).on("child_added",function(data){
    var taskValue1 = data.val();
    document.getElementById('lr1').textContent=taskValue1.prenda;
    document.getElementById('lr2').textContent=taskValue1.docena;
    document.getElementById('lr3').textContent=taskValue1.ropaInterior;
    document.getElementById('lr4').textContent='$ '+taskValue1.total;
    document.getElementById('n2').textContent='Por Prenda ($ 0.30)';
    document.getElementById('n6').textContent='Por Docena ($ 3.00)';
    document.getElementById('n10').textContent='Ropa Interior ($ 1.50)';
    if(taskValue1.prenda == '0'){
        document.getElementById('lr1').textContent='---';
    }
    if(taskValue1.docena == '0'){
        document.getElementById('lr2').textContent='---';
    }
    if(taskValue1.ropaInterior == '0'){
        document.getElementById('lr3').textContent='---';
    }
});
var detallesq1 = fireStoreBD1.ref('pedidosdetalleLavadoSeco/');
detallesq1.orderByChild("maestro").equalTo(taskValue.idPD).on("child_added",function(data){
    var taskValue2 = data.val();
    document.getElementById('lh1').textContent=taskValue2.vestido;
    document.getElementById('lh2').textContent=taskValue2.trajeCompleto;
    document.getElementById('lh3').textContent=taskValue2.poPrenda;
    document.getElementById('lh4').textContent='$ '+taskValue2.total;
    document.getElementById('n4').textContent='Vestido ($ 10.00)';
    document.getElementById('n8').textContent='Traje Completo ($ 15.00)';
    document.getElementById('n12').textContent='Por Prenda ($ 8.00)';
    if(taskValue2.vestido =='0'){
        document.getElementById('lh1').textContent='---';
    }
    if(taskValue2.trajeCompleto =='0'){
        document.getElementById('lh2').textContent='---';
    }
    if(taskValue2.poPrenda =='0'){
        document.getElementById('lh3').textContent='---';
    }
});
var detallesq2 = fireStoreBD1.ref('pedidosdetalleHogar/');
detallesq2.orderByChild("maestro").equalTo(taskValue.idPD).on("child_added",function(data){
    var taskValue3 = data.val();
    document.getElementById('ls1').textContent=taskValue3.cobertor +' / '+taskValue3.mantel ;
    document.getElementById('ls2').textContent=taskValue3.cortina+' / '+taskValue3.toalla;
    document.getElementById('ls3').textContent=taskValue3.sabana;
    document.getElementById('ls4').textContent='$ '+taskValue3.total;
    document.getElementById('n3').textContent='Cobertor ($ 3.50) /  Mantel ($ 2.50)';
    document.getElementById('n7').textContent='Cortina  ($ 2.50) /  Toalla + ($ 2.00)';
    document.getElementById('n11').textContent='Sabana'+'($ 2.50)';
    if(taskValue3.sabana =="0"){
        document.getElementById('ls3').textContent='---';
    }
});
limpiarTabla();
            });
    }
    
    

});

function limpiarTabla(){
    document.getElementById('ls1').textContent='';
    document.getElementById('ls2').textContent='';
    document.getElementById('ls3').textContent='';
    document.getElementById('ls4').textContent='';
    document.getElementById('lh1').textContent='';
    document.getElementById('lh2').textContent='';
    document.getElementById('lh3').textContent='';
    document.getElementById('lh4').textContent='';
    document.getElementById('lr1').textContent='';
    document.getElementById('lr2').textContent='';
    document.getElementById('lr3').textContent='';
    document.getElementById('lr4').textContent='';
    document.getElementById('n2').textContent='';
    document.getElementById('n3').textContent='';
    document.getElementById('n4').textContent='';
    document.getElementById('n6').textContent='';
    document.getElementById('n7').textContent='';
    document.getElementById('n8').textContent='';
    document.getElementById('n10').textContent='';
    document.getElementById('n11').textContent='';
    document.getElementById('n12').textContent='';
}
var entregados = document.querySelector('#pedidosEntregados');
    entregados.addEventListener('click', e=>{
        
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



/*var clientes = fireStoreBD1.ref('pedidos/');
clientes.orderByChild("fechapedido").equalTo('fecha2').on("child_added",function(data){
    var taskValue = data.val();
    //console.log(taskValue.nombre)
    if(taskValue.nombre=='ki'){
    console.log("correcto")
    }
})*/