var map = L.map('front-map').setView([41.7167, 44.7833], 13);;

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-ka/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(map);

var marker01 = L.marker([41.714013, 44.783325]).addTo(map);
marker01.bindPopup("<a href='ka/loc2.html'>გმირთა მოედანი, ცირკის შენობის კიბეების მიმდებარე ტერიტორია</a>");

var marker02 = L.marker([41.725919, 44.783589]).addTo(map);
marker02.bindPopup("<a href='ka/loc3.html'>მარცხენა სანაპირო, ვახუშტის ხიდის მიმდებარე ფერდობი (დიდუბის მხარე)</a>");

var marker03 = L.marker([41.697818, 44.806881]).addTo(map);
marker03.bindPopup("<a href='ka/loc1.html'>მარჯვენა სანაპირო, ნიკოლოზ ბარათაშვილის ხიდის მიმდებარე ფერდობი</a>");

var marker04 = L.marker([41.704244, 44.790550]).addTo(map);
marker04.bindPopup("<a href='ka/loc4.html'>რუსთაველი, რუსთაველის გამზირისა და ელბაქიძის დაღმართის კვეთა</a>");

var marker05 = L.marker([41.727985, 44.768082]).addTo(map);
marker05.bindPopup("<a href='ka/loc5.html'>საბურთალო, პეკინის გამზირისა და ვაჟა-ფშაველას გამზირის კვეთა</a>");
