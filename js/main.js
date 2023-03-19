var ZIP_VALUE = "02120";

let mapData = null
let map = null;

getData("data/zipoutput.csv", "zipcode");

function getData(filename, type) {
	d3.csv(filename).then((data) => {
		if (type == "zipcode") {
			mapData = data;
			createMap(mapData);
		} else {
			plotData = data;
			plotPoints(plotData);
	}})
};

function createMap(mapData) {
	mapData.forEach(function(point){
		if (point["zip"] == ZIP_VALUE){
			// initialize leaflet map and set view to be Boston
			map = L.map("map-vis").setView([point["lat"], point["lng"]], 12);

			// connect w/ openstreetmap
			L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);
		};
	})

	getData("data/finaloutput.csv", "markers");
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

		if (zip == ZIP_VALUE) {
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
	})
};