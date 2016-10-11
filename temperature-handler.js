function tempHandler(socket,temperature,io){
	// temperature.on("data", function() {
	//     console.log("CELSIUS: %d", this.C);
	//   });
	
	temperature.read(function(error, value) {
	  //I CHANGED THE VALUE IN PIN.JS IN JOHNNY-FIVE LIBRARY IN LINE 141!!!!!!!!!!!!!!!!!!!!!!!!!!

	  //Make the temperature in Celsius rounded to one decimal place
	  var temperature = Math.round( (value/9.31)* 10) / 10;
	  //function that emits a temperature event that sends out the temperature value to the client
	  function emitTempEvent(){
	  	io.emit('temperature',{value:temperature});
	  }
	  //To make the temperature event emission slower
	  setTimeout(emitTempEvent,10000);
	});



}
module.exports = tempHandler;