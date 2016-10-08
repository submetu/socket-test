var ledHandler = require('./led-handler');
var readyBoard = require('./ready-board');

function socketapp(server,callback){
	var io   = require('socket.io').listen(server);

 	readyBoard(function(inits){
 		io.sockets.on('connection', function (socket) {  
	        console.log(socket.id);
	        console.log('Wating for inputs ...');
	 		ledHandler(socket,inits.led,io.sockets);
    	});
 	});

}

module.exports = socketapp;