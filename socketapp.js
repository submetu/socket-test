var ledHandler = require('./led-handler');
var readyBoard = require('./ready-board');
var tempHandler = require('./temperature-handler');
var lightHandler = require('./light-handler');
function socketapp(server,callback){
	var io   = require('socket.io').listen(server);

 	readyBoard(function(inits){
 		io.sockets.on('connection', function (socket) {  
	        console.log(socket.id);
	        console.log('Wating for inputs ...');
	        lightHandler(socket,inits.light,io.sockets);
	 		ledHandler(socket,inits.led,io.sockets);
	 		tempHandler(socket,inits.temperature,io.sockets);

    	});
 	});

}

module.exports = socketapp;