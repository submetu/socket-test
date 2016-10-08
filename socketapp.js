function socketapp(server,callback){

	var io   = require('socket.io').listen(server);
	var five = require("johnny-five");
	var board = new five.Board();
	
	//Arduino board connection
	 board.on("ready", function() {  
	    console.log('Arduino connected');
	    led = new five.Led(13);
	});
 
	//Socket connection handler
	io.on('connection', function (socket) {  
        console.log(socket.id);
 
        socket.on('led:on', function (data) {
           led.on();
           console.log('LED ON RECEIVED');
        });
 
        socket.on('led:off', function (data) {
            led.off();
            console.log('LED OFF RECEIVED');
 
        });
    });
}


	
	

	module.exports = socketapp;