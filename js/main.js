// initialize leaflet map and set view to be Boston
let map = L.map('map-vis').setView([42.361145, -71.057083], 13);

// connect w/ openstreetmap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let plotData = null;
getData();

function getData() {
	d3.csv("data/finaloutput.csv").then((data) => {
		plotData = data;
		plotPoints(plotData);
	})
};

function plotPoints(plotData) {
	plotData.forEach(function(point) {

		let long = point["Longitude"];
		let lat = point["Latitude"];


		let name = point["Store Name"];
		let address1 = point["Street Number"] + " " + point["Street Name"];
		let address2 = point["Additional Address"];
		let city = point["City"];
		let state = point["State"];
		let zip = point["Zip Code"];

		if (zip == "02115") {
			let marker = L.marker([lat, long]).addTo(map);
			if (address2 != "") {
				let text = name + "\n" + address1 + "\n" + address2 +
							city + ", " + state + " " + zip
				marker.bindPopup(text);
			} else {
				let text = name + "\n" + address1 + "\n" +
							city + ", " + state + " " + zip
				marker.bindPopup(text);
			};
		};

		
	
		
	})};