// initialize leaflet map and set view to be Boston
let map = L.map('map-vis').setView([42.361145, -71.057083], 13);

// connect w/ openstreetmap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// read json file for plotting w/ leaflet
let plotData = null;
getData();

function getData(){
	fetch('data/suffolk-ebt-acceptors.json')
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			plotData = data;
			console.log(plotData);
			plotPoints(plotData);
		});
};

function plotPoints(plotData) {
	plotData.features.forEach(function(point) {

		let long = point.geometry.x / 100000;
		let lat = point.geometry.y / 100000;

		let marker = L.marker([lat, long]).addTo(map);

		let name = point.attributes.Store_Name;
		let address1 = point.attributes.Address;
		let address2 = point.attributes.Address_Line__2;
		let city = point.attributes.City;
		let state = point.attributes.State;
		let zip = point.attributes.Zip5;

		if (address2 != null) {
			let text = name + "\n" + address1 + "\n" + address2 +
						city + ", " + state + " " + zip
			marker.bindPopup(text);
		} else {
			let text = name + "\n" + address1 + "\n" +
						city + ", " + state + " " + zip
			marker.bindPopup(text);
		};
	console.log("plotted" + lat + long)
		
	})};