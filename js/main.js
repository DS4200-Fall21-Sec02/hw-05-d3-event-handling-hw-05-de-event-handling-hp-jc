// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

// margins
let margin = {
  top: 60,
  left: 50,
  right: 30,
  bottom: 35
},
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white')
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))


// set j = 0 for the colors to switch off
let j = 0
// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on('click', function () { // change the circle color
    d3.select('circle')
      .transition()
      .attr('fill', determineColorRedBlack(j))
    j++
  }) // border when mouse is over
  .on("mouseover", function () {
    d3.select(this)
      .attr('stroke', '#FF007F')
      .attr('stroke-width', '15')
  }) // get rid of border
  .on("mouseout", function () {
    d3.select(this)
      .attr("stroke", "none")
  }) // allow dragging
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", draggedWithXY)
    .on("end", dragended)
  );


// set k = 0 for the colors to switch off
let k = 0
// Add a circle 
let circle = svg.append('circle')
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on("mouseover", function () { // border when mouse is over
    d3.select(this)
      .attr('stroke', '#FFFF00')
      .attr('stroke-width', '15')
  }) // get rid of border
  .on("mouseout", function () {
    d3.select(this)
      .attr("stroke", "none")
  }) // change both shapes color when double click
  .on('dblclick', function () {
    d3.select(this)
      .transition()
      .attr('fill', determineColorOrangeTeal(k))
    d3.select('rect')
      .transition()
      .attr('fill', determineColorOrangeTeal(k))
    k++
  }) // allow dragging
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", draggedWithCxCy)
    .on("end", dragended)
  );


// function to start drag
function dragstarted() {
  d3.select(this)
    .raise().classed("active", true);
}

// drag square using x and y 
function draggedWithXY(event) {
  d3.select(this).attr("x", event.x).attr("y", event.y);
}

// drag circle using Cx and Cy 
function draggedWithCxCy(event) {
  d3.select(this).attr("cx", event.x).attr("cy", event.y);
}

// function to end drag
function dragended() {
  d3.select(this).classed("active", false);
}

// changes the circle's color between red and black for the single click
function determineColorRedBlack(c) {
  if (c % 2 == 0) {
    return '#ff0000'
  } else {
    return '#000000'
  }
}

// changes both shapes colors from orange to teal for the double click
function determineColorOrangeTeal(c) {
  if (c % 2 == 0) {
    return '#FF6700'
  } else {
    return '#008080'
  }
}











