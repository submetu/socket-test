function lightHandler(socket,light,io){
	light.on("data", function() {
	    console.log(this.level);
	    if(this.level >0.90){
	    	io.emit('led:lightChange',{value:0 , time:"Day Time"});
	    }
	    else if (this.level >0.85){
	    	io.emit('led:lightChange',{value:30 , time:"Day Time"});
	    }
	    else if (this.level >0.6){
	    	io.emit('led:lightChange',{value:80, time:"Evening Time"});
	    }
	    else{
	    	io.emit('led:lightChange',{value:255 , time:"Night Time"});
	    }
	});

	
	
}
module.exports = lightHandler;