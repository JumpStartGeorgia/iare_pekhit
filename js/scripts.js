var map = L.map('map').setView([41.7167, 44.7833], 13);;

L.tileLayer('http://ec2-54-76-157-122.eu-west-1.compute.amazonaws.com/open-ka/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18
}).addTo(map);

var marker01 = L.marker([41.714013, 44.783325]).addTo(map);
marker01.bindPopup("<b>Hero Square</b>");

var marker02 = L.marker([41.725919, 44.783589]).addTo(map);
marker02.bindPopup("<b>Left Embankment</b>");

var marker03 = L.marker([41.697818, 44.806881]).addTo(map);
marker03.bindPopup("<b>Right Embankment</b>");

var marker04 = L.marker([41.704244, 44.790550]).addTo(map);
marker04.bindPopup("<b>Rustaveli Avenue</b>");

var marker05 = L.marker([41.727985, 44.768082]).addTo(map);
marker05.bindPopup("<b>Saburtalo</b>");

# toggle rotation chevron based on collapsed state
function toggleChevron(e) {
    $(e.target)
        .prev('h3.contest-rule')
        .find('i.glyphicon')
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
}
$('.collapse').on('hidden.bs.collapse', toggleChevron);
$('.collapse').on('shown.bs.collapse', toggleChevron);
