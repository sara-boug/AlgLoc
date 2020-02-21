$(document).ready(function(){
  var data1= {
    date: ["saturday", "sunday","monday","tuesday", "wednesday","thursday","friday"],
    income:[5000, 20000,33333,3000, 70000, 700, 9000]

  }
  var data2= {
    date:["January","February","March","April","May","June","July",
            "August","September","October","November","December"],
    income:[5000, 20000,33333,3000, 20000,60000,7000,8000,90000,60000,20000,17000]

  }

  var margin = {top: 10, right:30, bottom: 30, left: 40},
  width = 800 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

  var svg= d3.select("#graph")
  .append("svg")
  .attr("width", width+margin.left+margin.right)
  .attr("height", height+margin.top+margin.bottom)
  .append("g")
  .attr("transform", "translate("+margin.left+","+margin.top+")");

  var x= d3.scalePoint().range([0,width]);
  var xAxis =d3.axisBottom().scale(x);
  svg.append("g")
  .attr("transform", "translate(0,"+ height+")")
  .attr("class","xAxis");

  var y = d3.scaleLinear().range([height,0]);
  var yAxis=d3.axisLeft().scale(y);
  svg.append("g").attr("class","yAxis");


  function  updatedata(data){
    var dataObject = []
    data.date.forEach((item, i) => {
      return  dataObject.push({date:item , income:data.income[i]})
    });
    x.domain(data.date);
    svg.selectAll(".xAxis").transition().duration(1000).call(xAxis);

    y.domain([0, d3.max(data.income)]);
    svg.selectAll(".yAxis").transition().duration(1000).call(yAxis);


    var SVG = svg.selectAll(".graph").data([dataObject])

    SVG
    .enter()
    .append("path")
    .attr("class","graph")
    .merge(SVG)
    .attr("d", d3.area()
    .x(function(d){return x(d.date)})
    .y0(y(0))
    .y1(function(d){return y(d.income)}))
    .attr("fill", "grey")
    .attr("stroke", "white")
    .attr("stroke-width", 1.5)
    .attr("opacity",0.2)


}
updatedata(data2);
$(".graph button.data1").click(()=> {
   updatedata(data1)
})
$(".graph button.data2").click(()=>{
   updatedata(data2)
})
});
