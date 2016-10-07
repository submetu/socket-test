var $button = $('#button');
var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

$button.click(function(){
	socket.emit('click-event',{data : 1});
});






