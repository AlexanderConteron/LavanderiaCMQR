crearElemento  =  document.querySelector('#crear1');
var ropa =  new Array();
ropa[0]=0;
ropa[1]=0;
ropa[2]=0;
var totalRopa;
crearElemento.addEventListener('click', e=>{
ropa[0].push(1);
ropa[1].push(2);
ropa[2].push(3);
console.log(ropa);
totalRopa = ropa[1].reduce((a, b) => a + b, 0);
console.log(totalRopa);
});


