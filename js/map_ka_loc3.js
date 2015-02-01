var site_map = L.map('map').setView([41.725919, 44.783589], 18);

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-ka/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(site_map);

var marker01 = L.marker([41.725919, 44.783589]).addTo(site_map);
marker01.bindPopup("<b>მარცხენა სანაპირო, ვახუშტის ხიდის მიმდებარე ფერდობი (დიდუბის მხარე)</b>");
