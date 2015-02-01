var site_map = L.map('map').setView([41.727985, 44.768082], 18);

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-en/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(site_map);

var marker01 = L.marker([41.727985, 44.768082]).addTo(site_map);
marker01.bindPopup("<b>Saburtalo, Pekini Ave./Vazha Pshavela Ave. Intersection</b>");
