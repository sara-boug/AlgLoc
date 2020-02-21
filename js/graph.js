$(document).ready(function(){
 var data= {
    date: ["saturday", "sunday","monday","tuesday", "wednesday","thursday","friday"],
    income:[5000, 20000,33333,3000, 70000, 700, 9000]

}
var dataObject = []
 data.date.forEach((item, i) => {
  return  dataObject.push({date:item , income:data.income[i]})
 });


var margin = {top: 10, right:30, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var svg= d3.select("#graph")
.append("svg")
.attr("width", width+margin.left+margin.right)
.attr("height", height+margin.top+margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");

var x= d3.scalePoint()
.round(false)
.domain(data.date)
.range([0,width]);
svg.append("g")
.attr("transform", "translate(0,"+ height+")")
.call(d3.axisBottom(x));

var y = d3.scaleLinear()
.domain([d3.min(data.income), d3.max(data.income)])
.range([height,0]);
svg.append("g")
.call(d3.axisLeft(y));

svg.append("path")
.datum(dataObject)
.attr("fill", "white")
.attr("stroke", "lightgrey")
.attr("stroke-width", 1.5)
.attr("d", d3.area()
  .x(function(d){return x(d.date)})
  .y(function(d){return y(d.income)})
)
});
