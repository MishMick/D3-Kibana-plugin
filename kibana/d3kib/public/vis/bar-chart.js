var d3 = require("d3");

export function barChart(){
    var container = document.createElement("div");
    container.setAttribute("id", "chart");
    document.getElementById('vis-div').appendChild(container);

    var width = 400;
    var height = 400;
    // PROPERTIES OF THE d3 graph
    var data = [
        { name: "E", value: 0.12702 },
        { name: "T", value: 0.09056 },
        { name: "A", value: 0.08167 },
        { name: "O", value: 0.07507 },
        { name: "I", value: 0.06966 },
        { name: "N", value: 0.06749 },
        { name: "S", value: 0.06327 },
        { name: "H", value: 0.06094 },
        { name: "R", value: 0.05987 },
        { name: "D", value: 0.04253 },
        { name: "L", value: 0.04025 },
        { name: "C", value: 0.02782 },
        { name: "U", value: 0.02758 },
        { name: "M", value: 0.02406 },
        { name: "W", value: 0.0236 }
    ];
    const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);

    var x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([40, width - 0])
        .padding(0.1)

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - 30, 20])

    var xAxis = g => g
        .attr("transform", `translate(0,${width - 30})`)
        .call(d3.axisBottom(x)
            .tickSizeOuter(0))

    var yAxis = g => g
        .attr("transform", `translate(${40},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())

    svg.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect").data(data).enter().append("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth());

    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);
}