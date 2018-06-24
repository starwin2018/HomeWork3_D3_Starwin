
//Q1
function function1(){
	d3.select("body").select("h1").text("My first D3 code");
	}
//Q2
function function2(){
	d3.selectAll("li").text("learning D3");
}
//Q3
function function3a(){
		d3.select("body").select("h2").text("Data Binding").style("color","blue");
}
function function3b(){
	const dataset = [0, 10, 27, 22, 17, 67, 18, 9, 54, 91];
		d3.select("body").selectAll("h2")
		.data(dataset).enter()
		.append("h2")
		.text(function(dataset) { return dataset; });
}
//Q4
function function4(){
	const dataset = [10, 27, 22, 17, 67, 18, 9, 54, 91];
        		d3.select("body").selectAll(".dummy h2")
        		.data(dataset)
       			.enter()
        		.append("h2")
        		.text(function(dataset) {return  dataset + " USD"; });

}
//Q5
function function5(){
	d3.selectAll("h2").style("color", "green");
}//Q6
function function6(){
	const dataset = [10, 27, 22, 17, 67, 18, 9, 54, 91];
	d3.selectAll("h2").style("color", function(dataset) {
       	if (dataset < 20) { 
            return "red"; 
        } else {
            return "green"; 
        }
    });
}
//Q7
var svgTag;
function function7(){
	svgTag = d3.select("body")
	    .append("svg")
	    .attr("width", 500)
	    .attr("height", 200);
}    

//Q8
function function8(){
	const dataset = [10, 27, 22, 17, 67, 18, 9, 54, 91];

	var svgrect = svgTag.selectAll('rect')
				.data(dataset)
				.enter()
       			.append("rect")
                .attr("x", function(dataset, iterator){return iterator * 30})
                .attr("y", 0)
                .attr("width", 20)
				.attr("height", function(dataset){return 2 * dataset})
				.attr("fill", "red");
}

//Q9
function function9(){
	svgTag2 = d3.select("body")
	    .append("svg")
	    .attr('display', 'block')
	    .attr("width", 500)
	    .attr("height", 200);
	const dataset = [10, 27, 22, 17, 67, 18, 9, 54, 91];
	var height = svgTag2.attr('height');

	var svgrect = svgTag2.selectAll('rect')
				.data(dataset)
				.enter()
       			.append("rect")
                .attr("x", function(dataset, iterator){return iterator * 30})
                .attr("y", function(dataset){return  height-(2 * dataset)})
                .attr("width", 20)
                .attr("height", function(dataset){return 2 * dataset})
                .attr("fill", "blue");
}

//Q10
function function10(){
  svgTag3 = d3.select("body")
	    .append("svg")
	    .attr("width", 500)
	    .attr("height", 200).style("background","url('https://ak0.picdn.net/shutterstock/videos/31244470/thumb/1.jpg') no-repeat").attr("width", 300)
	    .attr("height", 200);
	const dataset = [10, 27, 22, 17, 67, 18, 9, 54, 91];
	var height = svgTag3.attr('height');

	var svgrect = svgTag3.selectAll('rect')
		.data(dataset)
		.enter()
		.append("rect")
        .attr("x", function(dataset, iterator){return iterator * 30})
        .attr("y", function(dataset){return  height-(2 * dataset)})
        .attr("width", 20)
        .attr("height", function(dataset){return (2 * dataset)})
        .attr("fill", "green")

    svgTag3.selectAll('text')
		.data(dataset)
		.enter()
		.append("text")
		.text(function(dataset){ return dataset;})
		.attr('x', function(dataset, iterator){ return iterator * 30})
		.attr('y', function(dataset, iterator){return height-(2 * dataset)-4});

}


