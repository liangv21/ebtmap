fetch('data/suffolk-ebt-acceptors.json', {method: 'GET'})
    .then((response) => response.json())
    .then((json) => console.log(json.features));

// initialize map
let map = L.map('map-vis').setView([42.361145, -71.057083], 13);

// connect w/ openstreetmap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

