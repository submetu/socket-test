var five = require("johnny-five");
var board = new five.Board();

//Arduino board connection
function readyBoard(callback){
	board.on("ready", function() {  
	    console.log('Arduino connected');
	    var led = new five.Led(11);
	 //    var temperature = new five.Thermometer({
	 //      controller: "LM35",
		//   pin: "A1",
		//   freq:2000
		// });
		var tempPin = new five.Pin({
		  pin: "A1",
		  mode: 0
		});
		var light = new five.Light({
			pin: "A0",
			freq: 1000
		});

	    var inits = {
	    	led:led,
	    	temperature:tempPin,
	    	light:light
	    }
	    callback(inits)
	});
}

module.exports = readyBoard;