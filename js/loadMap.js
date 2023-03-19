var zip = localStorage['objectToPass'];
localStorage.removeItem('objectToPass');

getData("data/zipoutput.csv", "zipcode", zip);

let mapData = null;
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

let stateData = null;
function readStateData(state) {
	d3.csv("data/snap-ebt-resources.csv").then((data) => {
		stateData = data;
		getStateData(state, data)
	})
};

function getStateData(state, stateData) {
	stateData.forEach(function(point) {
		if (point["state"] == state) {
			document.getElementById("state-name").innerHTML = state.toUpperCase();
			document.getElementById("snap-link").href = point["snap_web"];
			document.getElementById("snap-schedule").href = point["snap_sched"];
			document.getElementById("snap-offices").href = point["snap_office"];
			document.getElementById("ebt-link").href = point["ebt_web"];
			document.getElementById("snap-num").innerHTML = "SNAP Phone: " + point["snap_phone"];
			document.getElementById("ebt-num").innerHTML = "EBT Phone: " + point["ebt_phone"]
		}
	})
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

			// get snap office/ebt data from snap-ebt-resources.csv
			state = point["state_name"];
			// pass state into function that pulls the data from csv file
			readStateData(state);
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
			city + ", " + state + " " + zip_code + " \" target=”_blank” >" + popUpText + "</a>";
			marker.bindPopup(link);
		};
	})
};