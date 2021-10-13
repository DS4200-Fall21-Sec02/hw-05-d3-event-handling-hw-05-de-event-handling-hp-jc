// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

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


let j = 0
// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on('click', function () {
    d3.select('circle')
      .transition()
      .attr('fill', determineColor(j))
    j++
  }
  )
  .on("mouseover", function () {
    d3.select(this)
      .attr('stroke', '#FF007F')
      .attr('stroke-width', '20')
  })
  .on("mouseout", function () {
    d3.select(this)
      .attr("stroke", "none")
  })


let k = 0
// Add a circle 
let circle = svg.append('circle')
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on("mouseover", function () {
    d3.select(this)
      .attr('stroke', '#FFFF00')
      .attr('stroke-width', '20')
  })
  .on("mouseout", function () {
    d3.select(this)
      .attr("stroke", "none")
  })
  .on('dblclick', function () {
    d3.select(this)
      .transition()
      .attr('fill', determineColor2(k))
    d3.select('rect')
      .transition()
      .attr('fill', determineColor2(k))
    k++
  }
  )

// changes the circle's color between red and black for the single click
function determineColor(c) {
  if (c % 2 == 0) {
    return '#ff0000'
  } else {
    return '#000000'
  }
}

// changes both shapes colors from orange to teal for the double click
function determineColor2(c) {
  if (c % 2 == 0) {
    return '#FF6700'
  } else {
    return '#008080'
  }
}











