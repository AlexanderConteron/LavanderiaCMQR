var marker1;
var direccion1 = '';
var latitudO = '';
var longitudO = '';


var latitud1='';
var longitud1='';

navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  latitudO = location.coords.latitude;
  longitudO =  location.coords.longitude;
  var mymap = L.map('myMap').setView(latlng, 15)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
}).addTo(mymap);

  marker1 = L.marker(latlng).addTo(mymap);
  mymap.on('click', function (e) {
    if (marker1) {
      mymap.removeLayer(marker1);
    }
    let latLng = mymap.mouseEventToLatLng(e.originalEvent);
    marker1 = new L.marker([latLng.lat, latLng.lng],13.5).addTo(mymap);
    latitud1=latLng.lat;
    longitud1=latLng.lng;
    //direccion1 = latitud1+' '+longitud1;
    
  });

});


