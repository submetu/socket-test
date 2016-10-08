var five = require("johnny-five");
var board = new five.Board();

//Arduino board connection
function readyBoard(callback){
	board.on("ready", function() {  
	    console.log('Arduino connected');
	    led = new five.Led(11);

	    var inits = {
	    	led:led
	    }
	    callback(inits)
	});
}

module.exports = readyBoard;