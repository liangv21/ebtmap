// Declare constants
const FRAME_HEIGHT = 600;
const FRAME_WIDTH = 1100;
const MARGINS = {left: 70, right: 70, top: 70, bottom: 70};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

// Create frame for map visualization
const FRAME1 = d3.select("#map-vis") 
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "map");




d3.json("data/boston-zip-codes.geojson").then(geodata => {
	// D3 Projection for USA map (albersUSA projection)
	let projection = d3.geoMercator()
						.fitSize([360, 200], geodata);

	// Define path for map
	let path = d3.geoPath()
					.projection(projection);

	FRAME1.selectAll("path")
			.data(geodata.features)
			.enter()
			.append("path")
				.attr("d", path)
				.attr("transform", "scale(3)")
});
