// Declare constants
const FRAME_HEIGHT = 400;
const FRAME_WIDTH = 800;
const MARGINS = {left: 70, right: 70, top: 70, bottom: 70};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

// Frame1: airport 
const FRAME1 = d3.select("#map-vis") 
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "world-map");

// Plot world map using d3 projection
var projection = d3.geoNaturalEarth1()
					.scale(FRAME_WIDTH / 5.5)
    				.translate([FRAME_WIDTH / 2, FRAME_HEIGHT / 2]);;

var path = d3.geoPath()
    	.projection(projection);

// Add world map to frame
FRAME1.selectAll("path")
		.append("path")
		.attr("class", "sphere")
		.attr("d", path({type: "Sphere"}));

// Read maps json file to add the world map svgs
d3.json("data/usstatesgeojson-master/massachusetts.geojson")
	  .then(data => {
		const countries = topojson.feature(data, data.objects.countries);
		FRAME1.selectAll("path").data(countries.features)
		  		.enter()
				.append("path")
				.attr("class", "country")
				.attr("d", path);
	  });