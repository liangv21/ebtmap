var zip = localStorage['objectToPass'];
localStorage.removeItem('objectToPass');

getData("data/zipoutput.csv", "zipcode", zip);

let mapData = null
let map = null;

function getData(filename, type, zip) {
	d3.csv(filename).then((data) => {
		if (type == "zipcode") {
			mapData = data;
			createMap(mapData, zip);
		} else {
			plotData = data;
			plotPoints(plotData, zip);
	}})
};

function createMap(mapData, zip) {
	mapData.forEach(function(point){
		if (point["zip"] == zip){ 
			// initialize leaflet map and set view to be Boston
			map = L.map("map-vis").setView([point["lat"], point["lng"]], 12);

			// connect w/ openstreetmap
			L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);
		};
	})

	getData("data/finaloutput.csv", "markers", zip);
};

function plotPoints(plotData, zip) {
	plotData.forEach(function(point) {

		let long = point["Longitude"];
		let lat = point["Latitude"];

		let name = point["Store Name"];
		let address1 = point["Street Number"] + " " + point["Street Name"];
		let address2 = point["Additional Address"];
		let city = point["City"];
		let state = point["State"];
		let zip_code = point["Zip Code"];
		if (zip_code == zip) {
			let marker = L.marker([lat, long]).addTo(map);
			let fullAddress = "<br>" + address1 + "<br>"; 
			if (address2 != "") {
				fullAddress = fullAddress + address2;
			} 
			let popUpText = name + "<br>" + address1 + "<br>" + address2 +
							city + ", " + state + " " + zip_code;
			let link = "<a href = \"https://www.google.com/search?q=" + name + " " + address1 + " " + address2 +
			city + ", " + state + " " + zip_code + " \">" + popUpText + "</a>";
			marker.bindPopup(popUpText);
		};
	})
};