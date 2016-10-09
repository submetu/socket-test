function ledHandler(socket,led,io){
	socket.on('led:on', function (data) {
	   led.brightness(255);
	   console.log('LED ON RECEIVED');
	});

	socket.on('led:off', function (data) {
		led.brightness(0);
	    console.log('LED OFF RECEIVED');

	});
	socket.on('led:change',function(data){
		var brightness = data.value;
		led.brightness(brightness);
		console.log(brightness);
		io.emit('led:change',{value:brightness});
	});
}
module.exports = ledHandler;