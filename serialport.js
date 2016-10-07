function sendData(data){
	var SerialPort = require("serialport");
	// var SerialPort = require("serialport").SerialPort;


	var sp = new SerialPort("/dev/ttyUSB0", {
	      baudrate: 9600
	}, false);

	console.log("Starting up serial host...");
	var message = data;

	function write() {
	    sp.open(function(err) {
	        console.log("Writing serial data: " + message);
	        sp.write(message, function(err, res) {
	                if (err) { console.log(err); }
	                sp.close();
	        });
	    });
	}

	setTimeout(write, 1000); //wait 1s for everything to initialize correctly
	setInterval(write, 5000); //write data every 5s
}
	
module.exports = sendData;

