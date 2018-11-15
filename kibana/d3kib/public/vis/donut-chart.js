var d3 = require("d3");

export function donutChart() {
    var donut = document.createElement("div");
    donut.setAttribute("id", "donut");
    document.getElementById('vis-div').appendChild(donut);
    //const svg = d3.select("#donut").append("svg").attr("width", 300).attr("height", 300);
/*
    // Pie object
    var pie = d3.pie()
        .padAngle(0.005)
        .sort(null)
        .value(d => d.value)

    //Define arc
    var radius = Math.min(width, height) / 2;
    var arc = d3.arc().innerRadius(radius * 0.67).outerRadius(radius - 1);

    // Dimensions
    var width = 200;
    var height = 200;

    //Data
    var data = [
        { name: B01001_003E, value: "<5" },
        { name: B01001_004E, value: "5-9" }
    ];

    // Define color properties
    var color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())
    /*
        B01001_003E: "<5", // Male
        B01001_005E: "10-14",
        B01001_006E: "15-19", // 15-17,
        B01001_007E: "15-19", // 18-19,
        B01001_008E: "20-24", // 20
        B01001_009E: "20-24", // 21
        B01001_010E: "20-24", // 22-24
        B01001_011E: "25-29",
        B01001_012E: "30-34",
        B01001_013E: "35-39",
        B01001_014E: "40-44",
        B01001_015E: "45-49",
        B01001_016E: "50-54",
        B01001_017E: "55-59",
        B01001_018E: "60-64", // 60-61
        B01001_019E: "60-64", // 62-64
        B01001_020E: "65-69", // 65-66
        B01001_021E: "65-69", // 67-69
        B01001_022E: "70-74",
        B01001_023E: "75-79",
        B01001_024E: "80-84",
        B01001_025E: "≥85",
        B01001_027E: "<5", // Female
        B01001_028E: "5-9",
        B01001_029E: "10-14",
        B01001_030E: "15-19", // 15-17
        B01001_031E: "15-19", // 18-19
        B01001_032E: "20-24", // 20
        B01001_033E: "20-24", // 21
        B01001_034E: "20-24", // 22-24
        B01001_035E: "25-29",
        B01001_036E: "30-34",
        B01001_037E: "35-39",
        B01001_038E: "40-44",
        B01001_039E: "45-49",
        B01001_040E: "50-54",
        B01001_041E: "55-59",
        B01001_042E: "60-64", // 60-61
        B01001_043E: "60-64", // 62-64
        B01001_044E: "65-69", // 65-66
        B01001_045E: "65-69", // 67-69
        B01001_046E: "70-74",
        B01001_047E: "75-79",
        B01001_048E: "80-84",
        B01001_049E: "≥85"
    })
    
    const arcs = pie(data);
    const svg = d3.select("#donut").append("svg").attr("width", width).attr("height", height).attr("text-anchor", "middle").style("font", "12px sans-serif");

    const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    g.selectAll("path")
        .data(arcs)
        .enter().append("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    const text = g.selectAll("text")
        .data(arcs)
        .enter().append("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("dy", "0.35em");

    text.append("tspan")
        .attr("x", 0)
        .attr("y", "-0.7em")
        .style("font-weight", "bold")
        .text(d => d.data.name);

    text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString());
    */
}
