var $button = $('#button');
var $off    = $('#off');
var $slider = $('#inputSlider');
var $sliderValue = $('#inputSliderValue');
var $lightTime = $('#lightTime');
var $tempField = $('#temperature-field');

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
	$slider.val(data.value);
	$sliderValue.text(data.value);
	// socket.emit('led:change',{value:data.value});
});
//when there is a lightChange event fired from the light-handler
socket.on('led:lightChange',function(data){
	console.log("the data returned is "+ data.value);
	$slider.val(data.value);
	$sliderValue.text(data.value);
	$lightTime.text(data.time);
	socket.emit('led:lightChange',{value:data.value});
});
socket.on('temperature',function(data){
	$tempField.text(data.value+" °C");
});



