
var http = require("http");

var url = require("url");

function serverStart(route, handler){
	http.createServer(function(request, response) {
		
		var postData = null;
	
		var pathname = url.parse(request.url).pathname;
		
		request.setEncoding("utf8");
		
		console.log("Received petition for "+ pathname);
		
		request.addListener("data", function(chunk) {
            postData += chunk;
            console.log("\n************************************************************\n"+
                "Received POST data chunk '\n"+chunk+"'\n"+
                "************************************************************\n");
        });
        request.addListener("end", function() {
            route(handler, pathname, response, postData);
        });
		
		
	}).listen(4444);
	console.log("Server Started...");
}

exports.start = serverStart