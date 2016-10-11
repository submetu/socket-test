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
		console.log("the brighness is:"+brightness);
		io.emit('led:change',{value:brightness});
	});
	//when there is a light change event fired from the app.js of index.html
	socket.on('led:lightChange',function(data){
		var brightness = data.value;
		led.brightness(brightness);
	});
}
module.exports = ledHandler;