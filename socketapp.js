function socketapp(server,callback){
	var io   = require('socket.io').listen(server);
	var serialport = require('./serialport');

	io.on('connection', function (socket) {
	  socket.emit('news', { hello: 'world' });
	  socket.on('my other event', function (data) {
	    console.log(data);
	  });

	  socket.on('click-event',function(data){
	    serialport(data);
	  });
	});
}

module.exports = socketapp;
	