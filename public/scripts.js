window.onload = function() {
  var location = new google.maps.LatLng(41.8462348, -87.949075);
  var map = new google.maps.Map(document.getElementById('map-container'), {
    center: location,
    zoom: 18
  });

  var marker = new google.maps.Marker({
    position: location,
    "map": map,
    title: "MITS"
  });
console.log(map);


};
