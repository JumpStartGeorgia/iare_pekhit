var map = L.map('front-map').setView([41.7167, 44.7833], 13);;

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-en/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(map);

var marker01 = L.marker([41.714013, 44.783325]).addTo(map);
marker01.bindPopup("<a href='en/loc2.html'>Hero Square, Area In front of the Circus Building Staircase</a>");

var marker02 = L.marker([41.725919, 44.783589]).addTo(map);
marker02.bindPopup("<a href='en/loc3.html'>Left Embankment, Slope of Vakhushti Bridge (on the side of Didube)</a>");

var marker03 = L.marker([41.697818, 44.806881]).addTo(map);
marker03.bindPopup("<a href='en/loc1.html'>The Right Bank, The Slope of Nikoloz Baratashvili Bridge</a>");

var marker04 = L.marker([41.704244, 44.790550]).addTo(map);
marker04.bindPopup("<a href='en/loc4.html'>Rustaveli, Rustaveli Ave./Elbakidze Slope Corner</a>");

var marker05 = L.marker([41.727985, 44.768082]).addTo(map);
marker05.bindPopup("<a href='en/loc5.html'>Saburtalo, Pekini Ave./Vazha Pshavela Ave. Intersection</a>");
