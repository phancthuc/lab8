function initMap() {
	// add your code here
  L.mapquest.key = 'cK2Vm5FArNkXYXgIaJFkFARcnT3sAewc';
  var map = L.mapquest.map('map', {
    center: [32.878842, -117.235904],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.878842, -117.235904]).addTo(map);
}
