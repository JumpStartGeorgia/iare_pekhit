var site_map = L.map('map').setView([41.704244, 44.790550], 18);

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-en/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(site_map);

var marker01 = L.marker([41.704244, 44.790550]).addTo(site_map);
marker01.bindPopup("<b>Rustaveli, Rustaveli Ave./Elbakidze Slope Corner</b>");
