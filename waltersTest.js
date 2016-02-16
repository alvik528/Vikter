


//check boxes
//Inspection type
<div class="inspect_options">
<input class="inspect_button" id="a_button" type="checkbox">a</input><br>
<input class="inspect_button" id="b_button" type="checkbox">b</input><br>
<input class="inspect_button" id="c_button" type="checkbox">c</input><br>
</div>

d3.selectAll(".inspect_button").on("change", function() {
  var type = this.value, 
  // I *think* "inline" is the default.
  display = this.checked ? "inline" : "none";

  svg.selectAll(".symbol")
    .filter(function(d) { return d.properties.inspectionType === type; })
    .attr("display", display);
});

//Violation type
<div class="viol_options">
<input class="viol_button" id="a_button" type="checkbox">a</input><br>
<input class="viol_button" id="b_button" type="checkbox">b</input><br>
<input class="viol_button" id="c_button" type="checkbox">c</input><br>
</div>

d3.selectAll(".viol_button").on("change", function() {
  var type = this.value, 
  // I *think* "inline" is the default.
  display = this.checked ? "inline" : "none";

  svg.selectAll(".symbol")
    .filter(function(d) { return d.properties.violationType === type; })
    .attr("display", display);
});

//risk category

<div class="desc_options">
<input class="desc_button" id="a_button" type="checkbox">a</input><br>
<input class="desc_button" id="b_button" type="checkbox">b</input><br>
<input class="desc_button" id="c_button" type="checkbox">c</input><br>
</div>

d3.selectAll(".desc_button").on("change", function() {
  var type = this.value, 
  // I *think* "inline" is the default.
  display = this.checked ? "inline" : "none";

  svg.selectAll(".symbol")
    .filter(function(d) { return d.properties.descType === type; })
    .attr("display", display);
});

//sliders, need to have some html for these things tho, divs with the right id

//date - snapping, limited date, range

d3.select('#slider3').call(d3.slider().scale(d3.time.scale()
	.domain([new Date(2006,1,1), new Date(2016,1,1)]))
	.axis( d3.svg.axis() ).snap(true).value([new Date(2000,1,1),new Date(2005,1,1)])
	.on("slide", function(evt, value) {
	  //value[ 0 ]
	  //value[ 1 ]
	}));


//number of failed inspections - range

d3.select('#slider3').call(d3.slider().axis(true).min(0).max(10).value( [ 0, 10 ] ).on("slide", function(evt, value) {
  //value[ 0 ]
	  //value[ 1 ]
}));



//inspection score - range
d3.select('#slider3').call(d3.slider().axis(true).min(0).max(100).value( [ 0, 100 ] ).on("slide", function(evt, value) {
  //value[ 0 ]
	  //value[ 1 ]
}));
//total violation points - range
d3.select('#slider3').call(d3.slider().axis(true).min(0).max(500).value( [ 0, 500 ] ).on("slide", function(evt, value) {
  //value[ 0 ]
	  //value[ 1 ]
}));
//number of red flags -  range
d3.select('#slider3').call(d3.slider().axis(true).min(0).max(10).value( [ 0, 10 ] ).on("slide", function(evt, value) {
  //value[ 0 ]
	  //value[ 1 ]
}));
//number of blue flags -  range
d3.select('#slider3').call(d3.slider().axis(true).min(0).max(10).value( [ 0, 10 ] ).on("slide", function(evt, value) {
  //value[ 0 ]
	  //value[ 1 ]
}));

