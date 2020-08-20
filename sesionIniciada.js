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


var referencia1 = fireStoreBD1.ref('usuarios');
referencia1.orderByChild("uid").equalTo('RfEskmnBb9ezzWcoOa5N3SujKke2').once('value',function(snapshot){
   
    console.log('correcto')
    console.log(autenticacion.currentUser.email);
    console.log(snapshot.val());
})





autenticacion.onAuthStateChanged(user=>{
    if(user){
        //const general = autenticacion.currentUser.photoURL;
        //console.log(autenticacion.currentUser);
        /*if(autenticacion.currentUser.displayName == null){
            mostrarImagen1(autenticacion.currentUser.displayName,"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png");
        }else{
            mostrarImagen1(autenticacion.currentUser.displayName,general);
        }*/
        
     //   mostrarBienvenido(user);
        verificarElementos();
        
    }else{
        
        
        //NomostrarImagen1();
    }
})

//mostrarBienvenido
function mostrarBienvenido(user){
    var referencia1 = fireStoreBD1.ref('usuarios/'+user.uid);
    referencia1.on('value',function(snapshot){
        var data=snapshot.val();
        document.getElementById("titular").textContent =  "  "+"BIENVENIDO"+" "+data.nombre;
    })
}

//VENTANA LAVADO EN SECO

const lavadoSeco = document.querySelector('#lseco');


function ocultarElemento(){
    document.getElementById('caja15').style.display = 'none';    
    document.getElementById('caja20').style.display = 'none';    
    document.getElementById('caja21').style.display = 'none';    
    document.getElementById('caja19').style.display = 'none';    
}
function verificarElementos(){
lavadoSeco.addEventListener('click', e=>{
    ocultarElemento();
    document.getElementById('caja19').style.display = 'block';    
});
const hogar = document.querySelector('#hogar');
hogar.addEventListener('click', e=>{
    ocultarElemento();
    document.getElementById('caja20').style.display = 'block';    
});
const lavado1 = document.querySelector('#lavanderia1');
lavado1.addEventListener('click', e=>{
    ocultarElemento();
    document.getElementById('caja21').style.display = 'block';    
});
}


//Lavanderia Ropa Calculos

var datosLavadoRopa =  new Array();
var ropaLavanderia1 =  new Array();
var ropaLavanderia2 =  new Array();
var ropaLavanderia3 =  new Array();
var ropaLavanderia4 =  new Array();
var ropaLavanderia5 =  new Array();
var ropaLavanderia6 =  new Array();

console.log(datosLavadoRopa[0]);
var pUnitario = '';
var pDocena = '';
var pRopaInterior = '';
var lavanderiaFinal = '';
agregarLavanderia  =  document.querySelector('#agregarLP');
agregarLavanderia.addEventListener('click', e=>{
    //por prenda
    cantidadPrendas  =  document.querySelector('#cantidadPrendas').value;
    planchadoP = document.getElementById("comboboxPlp").value; 
    //por docena
    cantidadDocena  =  document.querySelector('#cantidadDocenas').value;
    planchadoD = document.getElementById("comboboxDlp").value; 
    //cantidad docenas ropa interior
    cantidadRopaInterior  =  document.querySelector('#cantidadRopaInterior').value;
    document.getElementById("labelExito").textContent = "INGRESE LOS DATOS CORRECTAMENTE";
    if(cantidadDocena  == '' && cantidadPrendas == ''&& cantidadRopaInterior == ''){
    }else{
        contador1 = contador1+1;
        if(planchadoP == 'SI'){
            pUnitario =  cantidadPrendas*0.3+(cantidadPrendas* 0.5);
        } else{
            pUnitario =  cantidadPrendas*0.3;
        }
        if (planchadoD == 'SI'){
            pDocena =  cantidadDocena *3+(cantidadDocena* 5);
        }else{
            pDocena =  cantidadDocena *3;
        }
        pRopaInterior = cantidadRopaInterior * 1.5;
        lavanderiaFinal = pUnitario+pDocena+pRopaInterior;
        datosLavadoRopa[0] = ["Detalle","Prenda","Cantidad","Costo","Planchado","Total","Docena","Cantidad","Costo","Planchado","Total","Ropa Interior","Cantidad","Costo","Total", "Total Total"];
        datosLavadoRopa.push(["Lavado de Ropa"+contador1,"Por Prenda", cantidadPrendas, "0.30",planchadoP,pUnitario,"Por Docena", cantidadDocena, "3.00",planchadoD,pDocena,"Ropa Interior", cantidadRopaInterior, "1.50",pRopaInterior,lavanderiaFinal]);
        finalTotal.push(lavanderiaFinal);
        ropaLavanderia1.push(parseInt(cantidadPrendas));
        ropaLavanderia2.push(parseInt(cantidadDocena));
        ropaLavanderia3.push(parseInt(cantidadRopaInterior));
        ropaLavanderia4.push(parseInt(lavanderiaFinal));
        ropaLavanderia5.push(planchadoP);
        ropaLavanderia6.push(planchadoD);
        vaciar1();
agregarDetalleLavadorRopa();
botonesCesta();
sumtotal();
sumaRopa();

    }
     });

     function botonesCesta(){
        document.getElementById("labelExito").textContent = "SE HA AGREGADO A LA CESTA"; 
calcularFecha();        
document.getElementById('guardarLavado').style.display = 'block';
document.getElementById('caja14').style.marginTop = '10%';
document.getElementById('subtotalesTexto').style.display = 'block';
document.getElementById('guardarLavado').style.marginLeft="74%";    
document.getElementById('tablaFechas').style.display = 'block'; 

    }

function calcularFecha(){
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var dia = fecha.getDate();
    var _mes = fecha.getMonth();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    _mes = _mes + 1;
    if (_mes < 10)
    { var mes = "0" + _mes;}
    else
    { var mes = _mes.toString;}
    //document.getElementById("fechaRecepcion").min = anio+"-"+mes+"-"+dia+"T"+hora+":"+minutos+":00"; 
    document.getElementById("fechaRecepcion").min = anio+"-"+mes+"-"+dia+"T"+hora+":"+minutos+":00"  ;
    document.getElementById("fechaEntrega").min = anio+"-"+mes+"-"+(dia+1)+"T08:00:00"  ;
}

    var finalTotal = new Array();
    var contadorFinal =0;

var hogarFinal = "";
var hogar1 =  new Array();
var datosLavadoHogar =  new Array();
var hogar2 =  new Array();
var hogar3 =  new Array();
var hogar4 =  new Array();
var hogar5 =  new Array();
var hogar6 =  new Array();
     agregarLavadoHogar =  document.querySelector('#agregarLH');
     agregarLavadoHogar.addEventListener('click', e=>{
        cantidadSabana  =  document.querySelector('#cantidadSabana').value;
        cantidadCobertor  =  document.querySelector('#cantidadCobertor').value;
        cantidadMantel  =  document.querySelector('#cantidadMantel').value;
        cantidadToalla  =  document.querySelector('#cantidadToalla').value;
        cantidadCortina  =  document.querySelector('#cantidadCortina').value;
        subtotalSabana = cantidadSabana * 2.5;
        subtotalCobertor = cantidadCobertor * 3.5;
        subtotalToalla = cantidadToalla * 2;
        subtotalCortina = cantidadCortina * 2.5;
        subtotalMantel= cantidadMantel * 2.5;
        if(cantidadSabana == '' && cantidadCortina =='' && cantidadCobertor==''&&cantidadMantel==''&&cantidadToalla==''){
            document.getElementById("labelExito").textContent = "INGRESE LOS DATOS CORRECTAMENTE";
        }else{
            contador2 = contador2+1;
            hogarFinal = subtotalSabana+subtotalToalla+subtotalMantel+subtotalCortina+subtotalCobertor;
            datosLavadoHogar[0] = ["Detalle","Sabana","Cantidad","Precio","Subtotal","Cobertor","Cantidad","Precio","Subtotal","Cortina","Cantidad","Precio","Subtotal","Toalla","Cantidad","Precio","Subtotal","Mantel","Cantidad","Precio","Subtotal","Total"];
            datosLavadoHogar.push(["Limpieza Hogar"+contador2,"Sabana", cantidadSabana, "2.50",subtotalSabana,"Cobertor", cantidadCobertor, "3.50",subtotalCobertor,
            "Cortina", cantidadCortina, "2.50",subtotalCortina,"Toalla", cantidadToalla, "2.00",subtotalToalla,"Mantel", cantidadMantel, "2.50",subtotalMantel,hogarFinal]);
            finalTotal.push(hogarFinal);
            hogar1.push(parseInt(cantidadToalla));
            hogar2.push(parseInt(cantidadSabana));
            hogar3.push(parseInt(cantidadCobertor));
            hogar4.push(parseInt(cantidadCortina));
            hogar5.push(parseInt(cantidadMantel));
            hogar6.push(parseInt(hogarFinal));
         botonesCesta();   
         vaciar2();
         agregarDetalleLavadoHogar();
         sumtotal();
         sumaHogar();
        }
        
    });

    var LSecoFinal = "";
    var LEseco1 =  new Array();
var LEseco2 =  new Array();
var LEseco3 =  new Array();
var LEseco4 =  new Array();
var datosLavadoSeco =  new Array();

    agregarLavadoenSeco =  document.querySelector('#agregarES');
    agregarLavadoenSeco.addEventListener('click', e=>{
        cantidadVestido = document.querySelector('#cantidadVestido').value;
        cantidadTrajeCompleto = document.querySelector('#cantidadTrajeCompleto').value;
        cantidadPPrenda = document.querySelector('#cantidadPPrenda').value;
        subtotalVestido = cantidadVestido * 10;
        subotalTraje  = cantidadTrajeCompleto*15;
        subtotalPPrenda = cantidadPPrenda * 8;
        if(cantidadVestido =='' && cantidadTrajeCompleto == '' && cantidadPPrenda == ''){
            document.getElementById("labelExito").textContent = "INGRESE LOS DATOS CORRECTAMENTE";
        }else{
            contador3 = contador3+1;
            LSecoFinal = subtotalVestido +subotalTraje+subtotalPPrenda;
            datosLavadoSeco [0] = ["Detalle","Vestido","Cantidad","Precio","Subtotal","Traje Completo","Cantidad","Precio","Subtotal","Por Prenda","Cantidad","Precio","Subtotal","Total"];
            datosLavadoSeco.push(["Lavado en Seco"+contador3,"Vestido",cantidadVestido,"10.00", subtotalVestido,"Traje Completo",cantidadTrajeCompleto,"15.00",subotalTraje,"Por Prenda",cantidadPPrenda,"8.00",subtotalPPrenda, LSecoFinal]);
            finalTotal.push(LSecoFinal);
            LEseco1.push(parseInt(cantidadVestido));
            LEseco2.push(parseInt(cantidadTrajeCompleto));
            LEseco3.push(parseInt(cantidadPPrenda));
            LEseco4.push(parseInt(LSecoFinal));
            botonesCesta();
            vaciar3();
            agregarDetalleLavadoenSeco();
            sumtotal();
            sumaEnSeco();
        }
        
        
        //agregarDetalleLavadorRopa();
        //agregarDetalleLavadoenSeco();
        
    });


    
    guardarprueb  =  document.querySelector('#guardarLavado');
    guardarprueb.addEventListener('click', e=>{
        if(document.getElementById("fechaRecepcion").value == '' ||
        document.getElementById("fechaEntrega").value == ''){
            document.getElementById("labelExito").textContent = "Ingrese las fechas Correctamente"; 
        }else{
            guardarDatosMaestroDetalle();
            document.getElementById("labelExito").textContent = "Guardado Correctamente"; 
            //window.location.reload();
            setTimeout(function(){
                window.location.reload(1);
             }, 1500);
        }
        
    }); 






    function vaciar3(){
        document.querySelector('#cantidadVestido').value = '';
        document.querySelector('#cantidadTrajeCompleto').value= '';
        document.querySelector('#cantidadPPrenda').value = '';
    }

function vaciar2(){
    document.querySelector('#cantidadSabana').value = '';
    document.querySelector('#cantidadCobertor').value= '';
    document.querySelector('#cantidadMantel').value = '';
    document.querySelector('#cantidadToalla').value = '';
    document.querySelector('#cantidadCortina').value = '';
}
function vaciar1(){
    document.querySelector('#cantidadPrendas').value = '';
    document.querySelector('#cantidadDocenas').value= '';
    document.querySelector('#cantidadRopaInterior').value = '';
} 

var totals1;
function sumtotal(){
    totals1 = finalTotal.reduce((a, b) => a + b, 0);
    document.getElementById("totaltotalFinal").textContent ="$ "+ totals1;
}

var finaltotalr1;
var finaltotalr2;
var finaltotalr3;
var finaltotalr4;
function sumaRopa(){

if(isNaN(ropaLavanderia1)){
ropaLavanderia1[0]=''
}
if(isNaN(ropaLavanderia2)){
    ropaLavanderia2[0]=''
}
if(isNaN(ropaLavanderia3)){
    ropaLavanderia3[0]=''
}
finaltotalr1 = ropaLavanderia1.reduce((a, b) => a + b, 0);
    finaltotalr2 = ropaLavanderia2.reduce((a, b) => a + b, 0);
    finaltotalr3 = ropaLavanderia3.reduce((a, b) => a + b, 0);
    finaltotalr4 = ropaLavanderia4.reduce((a, b) => a + b, 0);    
}

var finahogar1;
var finahogar2;
var finahogar3;
var finahogar4;
var finahogar5;
var finahogar6;
function sumaHogar(){

if(isNaN(hogar1)){
hogar1[0]=''
}
if(isNaN(hogar2)){
    hogar2[0]=''
    }
if(isNaN(hogar3)){
        hogar3[0]=''
     }
if(isNaN(hogar4)){
            hogar4[0]=''
    }
if(isNaN(hogar5)){
        hogar5[0]=''
}

finahogar1  = hogar1.reduce((a, b) => a + b, 0);
finahogar2 = hogar2.reduce((a, b) => a + b, 0);
finahogar3 = hogar3.reduce((a, b) => a + b, 0);
finahogar4 = hogar4.reduce((a, b) => a + b, 0);    
finahogar5 = hogar5.reduce((a, b) => a + b, 0);    
finahogar6 = hogar6.reduce((a, b) => a + b, 0);    
}

var finalSeco1;
var finalSeco2;
var finalSeco3;
var finalSeco4;

function sumaEnSeco(){

if(isNaN(LEseco1)){
LEseco1[0]=''
}
if(isNaN(LEseco2)){
    LEseco2[0]=''
    }
if(isNaN(LEseco3)){
        LEseco3[0]=''
        }

finalSeco1  = LEseco1.reduce((a, b) => a + b, 0);
finalSeco2 = LEseco2.reduce((a, b) => a + b, 0);
finalSeco3 = LEseco3.reduce((a, b) => a + b, 0);
finalSeco4 = LEseco4.reduce((a, b) => a + b, 0);    
}




var cont1 = 0;
function guardarDatosMaestroDetalle(){
var clavep1 = uuid.v4()

contadorFinal = contadorFinal+1;
    var pedidos={
    idPD: clavep1,
    usuarioP: autenticacion.currentUser.uid,
    nombreP: "Pedido "+contadorFinal,
    estado:"porRecoger",
    fechapedido:document.getElementById("fechaRecepcion").value, 
    fechaentrega:document.getElementById("fechaEntrega").value,
    total: totals1
 }
 
 fireStoreBD1.ref('pedidos/'+clavep1).set(pedidos)
 if(!isNaN(finaltotalr4)){
    guardarfbRopa(clavep1); 
 }
 if(!isNaN(finahogar6)){
 guardarfbHogar(clavep1);
 }
 if(!isNaN(finalSeco4)){
    guardarfbLEseco(clavep1); 
} 
}

function guardarfbRopa(clavep1){
    var clavep2 = uuid.v4()
    var pedidosDetallePrenda={
        maestro:clavep1,
        estado:'porRecoger',
        detalle1: 'Lavado de Ropa'+contador1,
        prenda: finaltotalr1,
        pPrenda: ropaLavanderia5,
        docena : finaltotalr2,
        pDocena:ropaLavanderia6,
        ropaInterior : finaltotalr3,
        total: finaltotalr4,
        ipdR: clavep2
    }
    fireStoreBD1.ref('pedidosdetallePrenda/'+clavep2).set(pedidosDetallePrenda)
}

function guardarfbHogar(clavep1){
    var clavep2 = uuid.v4()
    var pedidosDetalleHogar={
        maestro:clavep1,
        estado:'porRecoger',
        detalle1: 'Limpieza Hogar'+contador2,
        sabana:finahogar2,
        cobertor:finahogar3,
        toalla:finahogar1,
        mantel:finahogar5,
        cortina:finahogar4,
        total: finahogar6,
        ipdR: clavep2
    }
    fireStoreBD1.ref('pedidosdetalleHogar/'+clavep2).set(pedidosDetalleHogar)
}

function guardarfbLEseco(clavep1){
    var clavep2 = uuid.v4()
    var pedidosDetalleLSeco={
        maestro:clavep1,
        estado:'porRecoger',
        detalle1: 'Lavado Seco'+contador3,
        vestido:finalSeco1,
        trajeCompleto:finalSeco2,
        poPrenda:finalSeco3,
        total: finalSeco4,
        ipdR: clavep2
    }
    fireStoreBD1.ref('pedidosdetalleLavadoSeco/'+clavep2).set(pedidosDetalleLSeco)
}

 /*var clientes = fireStoreBD1.ref('pedidos/');
clientes.on("child_added",function(data){
    var taskValue = data.val();
    console.log(taskValue.nombre)
})
}*/
//PRUEBITA SELECTTTTTTTTT
/*var clientes = fireStoreBD1.ref('pedidos/');
clientes.orderByChild("fechapedido").equalTo('fecha2').on("child_added",function(data){
    var taskValue = data.val();
    //console.log(taskValue.nombre)
    if(taskValue.nombre=='ki'){
    console.log("correcto")
    }
})*/

 
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
/*
crearElemento  =  document.querySelector('#guardarLavado');
pruebita123 = document.querySelector('#lop');
var contador1= 0;
var contador2 = 0;
crearElemento.addEventListener('click', e=>{
    document.getElementById('vacio').style.display = 'none';    
    var elemnto1 = document.createElement('label');
    var elemnto2 = document.createElement('br');
    var elemnto4 = document.createElement('br');
    var elemnto3 = document.createElement('button');    
    var elemnto5 = document.createElement('button');    
   contador1 = contador1+1;
    elemnto1.textContent='Lavado de Ropa'+"  "+contador1+"  ";
    elemnto3.textContent = "Mostrar Detalle"
    elemnto5.textContent = "Eliminar"
    
    //pruebita123.innerHTML = `<h4>Bienvenido "HOLAAAAAAAAAAA"${num1}</h4>`
    
    document.getElementById('detalleProductos').appendChild(elemnto1);
    document.getElementById('detalleProductos').appendChild(elemnto3);
    document.getElementById('detalleProductos').appendChild(elemnto5);
    document.getElementById('detalleProductos').appendChild(elemnto4);
  elemnto3.addEventListener('click', e=>{
    
var numero = elemnto1.textContent[16];
    alert("la suma es :"+numero*5)

});
});*/

/*botonPr  =  document.querySelector('#');
botonPr.addEventListener('click', e=>{
alert('saludosssssssss  ');
}); */
var contador1= 0;
function agregarDetalleLavadorRopa(){
    document.getElementById('vacio').style.display = 'none';    
    var elemnto1r = document.createElement('label');
    var elemnto2r = document.createElement('label');
    var elemnto4r = document.createElement('br');
    var elemnto3r = document.createElement('button');    
 //   var elemnto5r = document.createElement('button');    
    elemnto1r.textContent='Lavado de Ropa'+"  "+contador1;
    elemnto2r.textContent = '$ '+datosLavadoRopa[contador1][15];
    elemnto3r.textContent = "Detalle"
   // elemnto5r.textContent = "Eliminar"
    elemnto3r.className="btn btn-outline-dark"
    //elemnto5r.className="btn btn-outline-dark"
    elemnto2r.style.marginLeft ="5%" ;
    elemnto3r.style.marginLeft ="1%" ;
    //elemnto5r.style.marginLeft ="2%" ;
    document.getElementById('detalleProductos').appendChild(elemnto1r);
    document.getElementById('detalleProductos').appendChild(elemnto3r);
    document.getElementById('detalleProductos').appendChild(elemnto2r);
    //document.getElementById('detalleProductos').appendChild(elemnto5r);
    document.getElementById('detalleProductos').appendChild(elemnto4r);
  elemnto3r.addEventListener('click', e=>{
    
var numero = elemnto1r.textContent[16];
agregarDetalleRopaM(numero);
    $('#detalleModal1').modal('show');
});

/*elemnto5r.addEventListener('click', e=>{
    document.getElementById('detalleProductos').removeChild(elemnto1r);
    document.getElementById('detalleProductos').removeChild(elemnto3r);
    document.getElementById('detalleProductos').removeChild(elemnto5r);
    document.getElementById('detalleProductos').removeChild(elemnto4r);

    });*/
    
}


function agregarDetalleRopaM(numero){
    document.getElementById('datoslavan1').textContent=datosLavadoRopa[numero][0];
    document.getElementById('nombreL1').textContent=datosLavadoRopa[numero][1];
    document.getElementById('cantidadL1').textContent=datosLavadoRopa[numero][2];
    document.getElementById('precioL1').textContent=datosLavadoRopa[numero][3];
    document.getElementById('planchadoL1').textContent=datosLavadoRopa[numero][4];
    document.getElementById('subtotalL1').textContent="$ "+datosLavadoRopa[numero][5];
    document.getElementById('nombreL2').textContent=datosLavadoRopa[numero][6];
    document.getElementById('cantidadL2').textContent=datosLavadoRopa[numero][7];
    document.getElementById('precioL2').textContent=datosLavadoRopa[numero][8];
    document.getElementById('planchadoL2').textContent=datosLavadoRopa[numero][9];
    document.getElementById('subtotalL2').textContent="$ "+datosLavadoRopa[numero][10];
    document.getElementById('nombreL3').textContent=datosLavadoRopa[numero][11];
    document.getElementById('cantidadL3').textContent=datosLavadoRopa[numero][12];
    document.getElementById('precioL3').textContent=datosLavadoRopa[numero][13];
    document.getElementById('planchadoL3').textContent="";
    document.getElementById('subtotalL3').textContent="$ "+datosLavadoRopa[numero][14];
    document.getElementById('TotalL1').textContent="$ "+datosLavadoRopa[numero][15];
    if(datosLavadoRopa[numero][2]==""){
        document.getElementById('nombreL1').textContent="----";
        document.getElementById('cantidadL1').textContent="----";
        document.getElementById('precioL1').textContent="----";
        document.getElementById('planchadoL1').textContent="----";
        document.getElementById('subtotalL1').textContent="----";
        
    }
    if(datosLavadoRopa[numero][7]==""){
        document.getElementById('nombreL2').textContent="----";
        document.getElementById('cantidadL2').textContent="----";
        document.getElementById('precioL2').textContent="----";
        document.getElementById('planchadoL2').textContent="----";
        document.getElementById('subtotalL2').textContent="----";
        
    }
    if(datosLavadoRopa[numero][12]==""){
        document.getElementById('nombreL3').textContent="-----";
        document.getElementById('cantidadL3').textContent="----";
        document.getElementById('precioL3').textContent="----";
        document.getElementById('planchadoL3').textContent="----";
        document.getElementById('subtotalL3').textContent="----";
        
    }
}

var contador2= 0;
function agregarDetalleLavadoHogar(){
    document.getElementById('vacio').style.display = 'none';    
    var elemnto1d = document.createElement('label');
    var elemnto2d = document.createElement('label');
    var elemnto4d = document.createElement('br');
    var elemnto3d = document.createElement('button');    
    //var elemnto5d = document.createElement('button');    
    elemnto1d.textContent='Lavado del Hogar'+"  "+contador2;
    elemnto1d.textContent='Limpieza Hogar'+"  "+contador2;
    elemnto2d.textContent = '$ '+datosLavadoHogar[contador2][21];
    elemnto3d.textContent = "Detalle"
    //elemnto5d.textContent = "Eliminar"
    elemnto3d.className="btn btn-outline-dark"
    //elemnto5d.className="btn btn-outline-dark"
    elemnto3d.style.marginLeft ="2%" ;
    elemnto2d.style.marginLeft ="5%" ;
    //elemnto5d.style.marginLeft ="2%" ;
    document.getElementById('detalleProductos').appendChild(elemnto1d);
    document.getElementById('detalleProductos').appendChild(elemnto3d);
    document.getElementById('detalleProductos').appendChild(elemnto2d);
    //document.getElementById('detalleProductos').appendChild(elemnto5d);
    document.getElementById('detalleProductos').appendChild(elemnto4d);
  elemnto3d.addEventListener('click', e=>{
    
var numero67 = elemnto1d.textContent[16];
    //alert(numero67)
    agregarDetalleHogarM(numero67);
    $('#detalleModal2').modal('show');
});
/*elemnto5d.addEventListener('click', e=>{
    document.getElementById('detalleProductos').removeChild(elemnto1d);
    document.getElementById('detalleProductos').removeChild(elemnto3d);
    document.getElementById('detalleProductos').removeChild(elemnto5d);
    document.getElementById('detalleProductos').removeChild(elemnto4d);

    });*/
    
}



function agregarDetalleHogarM(numero){
    document.getElementById('datoshogar1').textContent=datosLavadoHogar[numero][0];
    document.getElementById('nombreH1').textContent=datosLavadoHogar[numero][1];
    document.getElementById('cantidadH1').textContent=datosLavadoHogar[numero][2];
    document.getElementById('precioH1').textContent="$ "+datosLavadoHogar[numero][3];
    document.getElementById('subtotalH1').textContent="$ "+datosLavadoHogar[numero][4];
    document.getElementById('nombreH2').textContent=datosLavadoHogar[numero][5];
    document.getElementById('cantidadH2').textContent=datosLavadoHogar[numero][6];
    document.getElementById('precioH2').textContent="$ "+datosLavadoHogar[numero][7];
    document.getElementById('subtotalH2').textContent="$ "+datosLavadoHogar[numero][8];
    document.getElementById('nombreH3').textContent=datosLavadoHogar[numero][9];
    document.getElementById('cantidadH3').textContent=datosLavadoHogar[numero][10];
    document.getElementById('precioH3').textContent="$ "+datosLavadoHogar[numero][11];
    document.getElementById('subtotalH3').textContent="$ "+datosLavadoHogar[numero][12];
    document.getElementById('nombreH4').textContent=datosLavadoHogar[numero][13];
    document.getElementById('cantidadH4').textContent=datosLavadoHogar[numero][14];
    document.getElementById('precioH4').textContent="$ "+datosLavadoHogar[numero][15];
    document.getElementById('subtotalH4').textContent="$ "+datosLavadoHogar[numero][16];
    document.getElementById('nombreH5').textContent=datosLavadoHogar[numero][17];
    document.getElementById('cantidadH5').textContent=datosLavadoHogar[numero][18];
    document.getElementById('precioH5').textContent="$ "+datosLavadoHogar[numero][19];
    document.getElementById('subtotalH5').textContent="$ "+datosLavadoHogar[numero][20];
    document.getElementById('TotalH1').textContent="$ "+datosLavadoHogar[numero][21];
   if(datosLavadoHogar[numero][2] ==""){
    document.getElementById('nombreH1').textContent="----";
    document.getElementById('cantidadH1').textContent="----";
    document.getElementById('precioH1').textContent="----";
    document.getElementById('subtotalH1').textContent="----"; 
}
if(datosLavadoHogar[numero][6] ==""){
    document.getElementById('nombreH2').textContent="----";
    document.getElementById('cantidadH2').textContent="----";
    document.getElementById('precioH2').textContent="----";
    document.getElementById('subtotalH2').textContent="----";
}
if(datosLavadoHogar[numero][10] ==""){
    document.getElementById('nombreH3').textContent="----";
    document.getElementById('cantidadH3').textContent="----";
    document.getElementById('precioH3').textContent="----";
    document.getElementById('subtotalH3').textContent="----";  
}
if(datosLavadoHogar[numero][14] ==""){
    document.getElementById('nombreH4').textContent="----";
    document.getElementById('cantidadH4').textContent="----";
    document.getElementById('precioH4').textContent="----";
    document.getElementById('subtotalH4').textContent="----";
}
if(datosLavadoHogar[numero][18] ==""){
    document.getElementById('nombreH5').textContent="----";
    document.getElementById('cantidadH5').textContent="----";
    document.getElementById('precioH5').textContent="----";
    document.getElementById('subtotalH5').textContent="----";  
}
    
}


var contador3= 0;
function agregarDetalleLavadoenSeco(){
    document.getElementById('vacio').style.display = 'none';    
    var elemnto1 = document.createElement('label');
    var elemnto2 = document.createElement('label');
    var elemnto4 = document.createElement('br');
    var elemnto3 = document.createElement('button');    
    //var elemnto5 = document.createElement('button');    
    elemnto1.textContent='Lavado en seco'+"  "+contador3;
    elemnto2.textContent = '$ '+datosLavadoSeco[contador3][13];
    elemnto3.textContent = "Detalle"
    //elemnto5.textContent = "Eliminar"
    elemnto3.className="btn btn-outline-dark"
    //elemnto5.className="btn btn-outline-dark"
    elemnto3.style.marginLeft ="3%" ;
    elemnto2.style.marginLeft ="5%" ;
    //elemnto5.style.marginLeft ="2%" ;
    document.getElementById('detalleProductos').appendChild(elemnto1);
    document.getElementById('detalleProductos').appendChild(elemnto3);
    document.getElementById('detalleProductos').appendChild(elemnto2);
    //document.getElementById('detalleProductos').appendChild(elemnto5);
    document.getElementById('detalleProductos').appendChild(elemnto4);
  elemnto3.addEventListener('click', e=>{
    
var numero68 = elemnto1.textContent[16];
agregarDetalleEnSecoM(numero68);
$('#detalleModal3').modal('show');

});

    
}


function agregarDetalleEnSecoM(numero){
    document.getElementById('datosSeco1').textContent=datosLavadoSeco[numero][0];
    document.getElementById('nombreS1').textContent=datosLavadoSeco[numero][1];
    document.getElementById('cantidadS1').textContent=datosLavadoSeco[numero][2];
    document.getElementById('precioS1').textContent="$ "+datosLavadoSeco[numero][3];
    document.getElementById('subtotalS1').textContent="$ "+datosLavadoSeco[numero][4];
    document.getElementById('nombreS2').textContent=datosLavadoSeco[numero][5];
    document.getElementById('cantidadS2').textContent=datosLavadoSeco[numero][6];
    document.getElementById('precioS2').textContent="$ "+datosLavadoSeco[numero][7];
    document.getElementById('subtotalS2').textContent="$ "+datosLavadoSeco[numero][8];
    document.getElementById('nombreS3').textContent=datosLavadoSeco[numero][9];
    document.getElementById('cantidadS3').textContent=datosLavadoSeco[numero][10];
    document.getElementById('precioS3').textContent="$ "+datosLavadoSeco[numero][11];
    document.getElementById('subtotalS3').textContent="$ "+datosLavadoSeco[numero][12];
    document.getElementById('TotalS1').textContent="$ "+datosLavadoSeco[numero][13];
   if(datosLavadoSeco[numero][2] ==""){
    document.getElementById('nombreS1').textContent="----";
    document.getElementById('cantidadS1').textContent="----";
    document.getElementById('precioS1').textContent="----";
    document.getElementById('subtotalS1').textContent="----"; 
}
if(datosLavadoSeco[numero][6] ==""){
    document.getElementById('nombreS2').textContent="----";
    document.getElementById('cantidadS2').textContent="----";
    document.getElementById('precioS2').textContent="----";
    document.getElementById('subtotalS2').textContent="----";
}
if(datosLavadoSeco[numero][10] ==""){
    document.getElementById('nombreS3').textContent="----";
    document.getElementById('cantidadS3').textContent="----";
    document.getElementById('precioS3').textContent="----";
    document.getElementById('subtotalS3').textContent="----";  
}
    
}


//modal por cierto tiempo
$(function(){
    $('#exito').on('show.bs.modal', function(){
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function(){
            myModal.modal('hide');
        }, 1500));
    });
});