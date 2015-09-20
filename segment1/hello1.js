var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello!");
	
	setTimeout(function(){
	response.write("Sorry to keep you waiting.");	
	response.end();
	},5000);



}).listen(8080);

console.log('listening on port 8080');
