var site_map = L.map('map').setView([41.714013, 44.783325], 18);

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-en/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(site_map);

var marker01 = L.marker([41.714013, 44.783325]).addTo(site_map);
marker01.bindPopup("<b>Hero Square, Area In Front of the Circus Building Staircase</b>");
