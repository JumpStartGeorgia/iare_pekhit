var site_map = L.map('map').setView([41.697818, 44.806881], 18);

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-ka/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(site_map);

var marker01 = L.marker([41.697818, 44.806881]).addTo(site_map);
marker01.bindPopup("<b>მარჯვენა სანაპირო, ნიკოლოზ ბარათაშვილის ხიდის მიმდებარე ფერდობი</b>");
