var $button = $('#button');
var $off    = $('#off');
var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

$button.click(function(){
	console.log('on button clicked');
	socket.emit('led:on',{data : 1});
});

$off.click(function(){
	
	socket.emit('led:off',{data : 1});
	console.log('Off button clicked');
});






