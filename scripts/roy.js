d3.csv("../../source_code/cities.csv").then(function (data) {
    dataViz(data);
});


function dataViz(incomingData) {
    d3.select("body").selectAll("div.cities")
        .data(incomingData)
        .enter()
        .append("div")
        .attr("class", "citiess")
        .html(function (d, i) { return d.label; });
}

var yScale = d3.scaleLinear().domain([0, 500, 1000]).range([0, 50, 100]);

d3.select("svg").selectAll("rect")
    .data([14, 68, 24500, 430, 19, 1000, 5555])
    .enter()
    .append("rect")
    .attr("width", 10)
    .attr("height", function (d) { return yScale(d); })
    .attr("x", function (d, i) { return i * 10; })
    .attr("y", function (d) { return 100 - yScale(d); })
    .attr("text", function (d) { return d; })
    .style("fill", "blue")
    .style("stroke", "red")
    .style("stroke-width", "1px")
    .style("opacity", .25);
