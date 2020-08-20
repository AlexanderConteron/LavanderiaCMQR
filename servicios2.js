var listar = document.querySelector('#empleadoPerfil');
    listar.addEventListener('click', e=>{
        window.location.href = "perfilEmpleado.html";
        
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


function obtenerTodo(varNombreTotal){
var empleadosF = fireStoreBD1.ref('maestroEmpleado/');
empleadosF.on("child_added",function(data){
    var nombreUsuarios = data.val();
        var taskValue = fireStoreBD1.ref('pedidos/');
        taskValue.on("child_added",function(data){
            var taskValue = data.val();
            //console.log(autenticacion.currentUser.uid)
        if(nombreUsuarios.maestro == taskValue.idPD && nombreUsuarios.empleado1==varNombreTotal){
            if(taskValue.estado == 'porEntregar'){
                //console.log(taskValue.nombre
                
               crearTabla('detalleRecoger2');
               document.getElementById('entragarl').style.display = 'none';   
               elemntosd14.style.display='none';
               elemntosd19.style.display='none';
            
            }
                if(taskValue.estado == 'Entregado'){
                    //console.log(taskValue.nombre
                    
                   crearTabla('detalleEntegado');
                   document.getElementById('entregarl').style.display = 'none';   
                   elemntosd14.style.display='none';
                   elemntosd16.style.display='none';
                    }
                    if(taskValue.estado == 'porRecogerA'){
                        //console.log(taskValue.nombre
                        
                       crearTabla('detalleRecoger12');
                       document.getElementById('recogerl2').style.display = 'none';   
                       elemntosd16.style.display='none';
                       elemntosd19.style.display='none';
                        }
                    
                var elemntosd47;
            //console.log(taskValue.estado);
            //document.getElementById
            var nombre1;
            var codigoUsuario;
            function crearTabla(idtr){
                var nombreUsuario = fireStoreBD1.ref('usuarios/');
                nombreUsuario.orderByChild("uid").equalTo(taskValue.usuarioP).on("child_added",function(data){
                
                var taskValue2 = data.val();
                nombre1 = taskValue2.nombre
                
                });
        
                var nombreEmpleados = fireStoreBD1.ref('maestroEmpleado/');
                nombreEmpleados.on("child_added",function(data){
                
                var taskValue5 = data.val();
                
                if(taskValue5.maestro == taskValue.idPD){
                    console.log(taskValue5.empleado1)
                }
                });
                
                var elemntosr = document.createElement('tr');
                var elemntosd8 = document.createElement('td');
                var elemntosd1 = document.createElement('td');
                var elemntosd3 = document.createElement('td');
                var elemntosd4 = document.createElement('td');
                var elemntosd5 = document.createElement('td');
                var elemntosd6 = document.createElement('td');
                var elemntosd11 = document.createElement('td');
                var elemntosd12 = document.createElement('td');
                var elemntosd7 = document.createElement('button');    
                elemntosd9 = document.createElement('button');    
                var elemntosd10 = document.createElement('td');
                var elemntosd13 = document.createElement('button');    
                elemntosd14 = document.createElement('td');
                var elemntosd15 = document.createElement('button');    
                elemntosd16 = document.createElement('td');
                elemntosd19 = document.createElement('td');
                /*var elemntosd45 = document.createElement('select');    
                var elemntosd46 = document.createElement('td');
                 elemntosd47 = document.createElement('option');*/
                 codigoUsuario= taskValue.idPD;
                 document.getElementById("codigoMaestro").textContent =codigoUsuario ;
                //document.getElementById("codigoMaestro").style.display='none';
                elemntosd7.textContent = "Detalle"
                elemntosd9.textContent = "Direccion"
                elemntosd13.textContent = "Servicio Recogido"
                elemntosd15.textContent = "Servicio Entregado"
                elemntosd19.textContent = "Entregado"
                elemntosd1.textContent = taskValue.nombreP;
                var fecha1 = taskValue.fechaentrega;
                elemntosd3.textContent = fecha1;
                elemntosd4.textContent = taskValue.fechapedido;
                
                var nombreUsuario = fireStoreBD1.ref('usuarios/');
                nombreUsuario.orderByChild("uid").equalTo(taskValue.usuarioP).on("child_added",function(data){
                
                var taskValue2 = data.val();
                nombre1 = taskValue2.nombre
                elemntosd8.textContent = nombre1;
                document.getElementById('mostrarLa1').textContent = taskValue2.latitud;   
                document.getElementById('mostrarLo1').textContent = taskValue2.longitud;   
                });
               
                /*var nombreClientes = fireStoreBD1.ref('usuarios/');
            nombreClientes.on("child_added",function(data){
            
            var taskValue3 = data.val();
            console.log(taskValue3.nombre)
            elemntosd47.textContent=taskValue3.email;    
            elemntosd47.textContent=taskValue3.nombre;    
            });*/
                
                elemntosd5.textContent = '$ '+taskValue.total;
                elemntosd7.className="btn btn-outline-dark"
                elemntosd9.className="btn btn-outline-dark"
                elemntosd13.className="btn btn-outline-dark"
                elemntosd15.className="btn btn-outline-dark"
                document.getElementById(idtr).appendChild(elemntosr);
                elemntosr.appendChild(elemntosd8);
                elemntosr.appendChild(elemntosd1);
                elemntosr.appendChild(elemntosd3);
                elemntosr.appendChild(elemntosd4);
                elemntosr.appendChild(elemntosd5);
                elemntosr.appendChild(elemntosd6);
                elemntosr.appendChild(elemntosd10);
                elemntosd10.appendChild(elemntosd9);
                elemntosd14.appendChild(elemntosd13);
                elemntosd16.appendChild(elemntosd15);
                elemntosd6.appendChild(elemntosd7);
                elemntosr.appendChild(elemntosd14);
                elemntosr.appendChild(elemntosd16);
                elemntosr.appendChild(elemntosd19);
                /*elemntosd46.appendChild(elemntosd45);
                elemntosd45.appendChild(elemntosd47);
                elemntosr.appendChild(elemntosd46);*/
                elemntosd13.addEventListener('click', e=>{
                    actualizarDatosDatosMaestroEmpleado();
                    setTimeout(function(){
                        window.location.reload(1);
                     }, 0);
                });
                elemntosd15.addEventListener('click', e=>{
                    actualizarDatosDatosMaestroEmpleado1();
                    setTimeout(function(){
                        window.location.reload(1);
                     }, 500);
                });
                elemntosd9.addEventListener('click', e=>{
                  //  console.log(taskValue2.latitud);
                //console.log(taskValue2.longitud);
                    $('#detalleModal8').modal('show');  
                    var latitud12 = document.getElementById('mostrarLa1').textContent;
                    var longitud12 = document.getElementById('mostrarLo1').textContent;
                    agregarMapa(latitud12,longitud12);
                    
             /*       var nombreClientes = fireStoreBD1.ref('usuarios/');
            nombreClientes.on("child_added",function(data){
            
            var taskValue3 = data.val();
            if(taskValue3.cargo =='Empleado'){
                //alert(codigoUsuario);
        
                elemntosd47 = document.createElement('option');
                elemntosd48 = document.createElement('option');
                elemntosd48.textContent = taskValue3.nombre;
                elemntosd47.textContent = taskValue3.nombre;
                
                document.getElementById("codigoMaestro").textContent =codigoUsuario ;
                document.getElementById("codigoMaestro").style.display='none';
                document.getElementById("comboboxEm1").appendChild(elemntosd47);
                document.getElementById("comboboxEm2").appendChild(elemntosd48);
            }
            
            });*/
        
                });
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
        }
});
});

}

var elemntosd9;
var elemntosd14;
var elemntosd16;
var elemntosd19;


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
/*var entregados = document.querySelector('#pedidosEntregados');
    entregados.addEventListener('click', e=>{
        
    })*/


    

    /*var subirBD2 = document.querySelector('#guardarEmpleadoMaestro');
    subirBD2.addEventListener('click', e=>{
        //window.location.href = "perfilGenerall.html";
        setTimeout(function(){
            window.location.reload(1);
         }, 1000);
        guardarDatosMaestroEmpleado();
        actualizarDatosDatosMaestroEmpleado();
        
    });*/

    function guardarDatosMaestroEmpleado(){
        codigo1 = document.getElementById("codigoMaestro").textContent;
        var clavep1 = uuid.v4()
        var empleado1 = document.getElementById("comboboxEm1").value; 
        var empleado2 = document.getElementById("comboboxEm2").value; 
            var maestroEmpleado={
            idME: clavep1,
            empleado2:empleado2,
            empleado1:empleado1,
            maestro:codigo1
         }
         
 fireStoreBD1.ref('maestroEmpleado/'+clavep1).set(maestroEmpleado) 
}


function actualizarDatosDatosMaestroEmpleado(){
    codigo2 = document.getElementById("codigoMaestro").textContent;  
    var pedidos1={
        estado: "porEntregar"

     }
fireStoreBD1.ref('pedidos/'+codigo2).update(pedidos1) 
}
function actualizarDatosDatosMaestroEmpleado1(){
    codigo2 = document.getElementById("codigoMaestro").textContent;  
    var pedidos2={
        estado: "Entregado"

     }
fireStoreBD1.ref('pedidos/'+codigo2).update(pedidos2) 
}


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



autenticacion.onAuthStateChanged(user=>{
    if(user){
        var referencia1 = fireStoreBD1.ref('usuarios/'+user.uid);
        referencia1.once('value',function(data){
            var taskValue2 = data.val();
            
            obtenerTodo(taskValue2.nombre);
        });
        
        
        

    }else{
        
    
    }
})