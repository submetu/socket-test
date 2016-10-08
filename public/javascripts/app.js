var $button = $('#button');
var $off    = $('#off');
var $slider = $('#inputSlider');
var socket = io.connect();
 

$button.click(function(){
	console.log('on button clicked');
	socket.emit('led:on',{data : 1});
});

$off.click(function(){
	socket.emit('led:off',{data : 1});
	console.log('Off button clicked');
});

// function showValue(value){
// 	socket.emit('led:change',{value:value});
// }

$slider.on('change',function(){
	var newVal = $(this).val();
	socket.emit('led:change',{value:newVal});
});
socket.on('led:change',function(data){
	console.log("the data returned is "+ data.value);
	$('#inputSlider').val(data.value);
	$('#inputSliderValue').text(data.value);
	// socket.emit('led:change',{value:data.value});
});




