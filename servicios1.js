var listar = document.querySelector('#adminPerfil');
    listar.addEventListener('click', e=>{
        window.location.href = "perfilGenerall.html";
        
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


var elemntosd9;
var clientes = fireStoreBD1.ref('pedidos/');
clientes.on("child_added",function(data){
    
    var taskValue = data.val();
    if(taskValue.estado == 'porRecoger'){
    //console.log(taskValue.nombre
    //document.getElementById('entregar3').style.display = 'block';
    crearTabla('detalleRecoger');
    
    document.getElementById('recogerl').style.display = 'none';
    //document.getElementById("seleccionar2").textContent = '';
    }
    if(taskValue.estado == 'porEntregar'){
        //console.log(taskValue.nombre
        
       crearTabla('detalleRecoger2');
       document.getElementById('entragarl').style.display = 'none';   
       elemntosd9.style.display = 'none';
       document.getElementById("seleccionar2").textContent = '';
    }
        if(taskValue.estado == 'Entregado'){
            //console.log(taskValue.nombre
            
           crearTabla('detalleEntegado');
           document.getElementById('entregarl').style.display = 'none';   
           elemntosd9.style.display = 'none';
       document.getElementById("seleccionar3").textContent = '';
            }
            if(taskValue.estado == 'porRecogerA'){
                //console.log(taskValue.nombre
                
               crearTabla('detalleRecoger12');
               document.getElementById('recogerl2').style.display = 'none';   
               elemntosd9.style.display = 'none';
           document.getElementById("seleccionar4").textContent = '';
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
            console.log(taskValue5.empleado2)
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
        /*var elemntosd45 = document.createElement('select');    
        var elemntosd46 = document.createElement('td');
         elemntosd47 = document.createElement('option');*/
         codigoUsuario= taskValue.idPD;
        elemntosd7.textContent = "Detalle"
        elemntosd9.textContent = "Seleccionar Empleado"
        elemntosd1.textContent = taskValue.nombreP;
        var fecha1 = taskValue.fechaentrega;
        elemntosd3.textContent = fecha1;
        elemntosd4.textContent = taskValue.fechapedido;
        var nombreEmpleados = fireStoreBD1.ref('maestroEmpleado/');
        nombreEmpleados.on("child_added",function(data){
        
        var taskValue5 = data.val();
        
        if(taskValue5.maestro == taskValue.idPD){
            console.log()
            console.log(taskValue5.empleado2)
            elemntosd11.textContent = taskValue5.empleado1;
        //elemntosd12.textContent = taskValue5.empleado2;
        }
        });
        var nombreUsuario = fireStoreBD1.ref('usuarios/');
        nombreUsuario.orderByChild("uid").equalTo(taskValue.usuarioP).on("child_added",function(data){
        
        var taskValue2 = data.val();
        nombre1 = taskValue2.nombre
        elemntosd8.textContent = nombre1;
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
        document.getElementById(idtr).appendChild(elemntosr);
        elemntosr.appendChild(elemntosd8);
        elemntosr.appendChild(elemntosd1);
        elemntosr.appendChild(elemntosd3);
        elemntosr.appendChild(elemntosd4);
        elemntosr.appendChild(elemntosd5);
        elemntosr.appendChild(elemntosd6);
        elemntosr.appendChild(elemntosd10);
        elemntosd10.appendChild(elemntosd9);
        elemntosd6.appendChild(elemntosd7);
        elemntosr.appendChild(elemntosd11);
      //  elemntosr.appendChild(elemntosd12);
        /*elemntosd46.appendChild(elemntosd45);
        elemntosd45.appendChild(elemntosd47);
        elemntosr.appendChild(elemntosd46);*/
        elemntosd9.addEventListener('click', e=>{
            
            $('#detalleModal8').modal('show');  
            var nombreClientes = fireStoreBD1.ref('usuarios/');
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
    
    });

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
/*var entregados = document.querySelector('#pedidosEntregados');
    entregados.addEventListener('click', e=>{
        
    })*/


    

    var subirBD2 = document.querySelector('#guardarEmpleadoMaestro');
    subirBD2.addEventListener('click', e=>{
        //window.location.href = "perfilGenerall.html";
        setTimeout(function(){
            window.location.reload(1);
         }, 1000);
        guardarDatosMaestroEmpleado();
        actualizarDatosDatosMaestroEmpleado();
        
    });

    function guardarDatosMaestroEmpleado(){
        codigo1 = document.getElementById("codigoMaestro").textContent;
        var clavep1 = uuid.v4()
        var empleado1 = document.getElementById("comboboxEm1").value; 
        //var empleado2 = document.getElementById("comboboxEm2").value; 
            var maestroEmpleado={
            idME: clavep1,
            empleado1:empleado1,
            maestro:codigo1
         }
         
 fireStoreBD1.ref('maestroEmpleado/'+clavep1).set(maestroEmpleado) 
}


function actualizarDatosDatosMaestroEmpleado(){
    codigo2 = document.getElementById("codigoMaestro").textContent;  
    var pedidos1={
        estado: "porRecogerA"

     }
fireStoreBD1.ref('pedidos/'+codigo2).update(pedidos1) 
}