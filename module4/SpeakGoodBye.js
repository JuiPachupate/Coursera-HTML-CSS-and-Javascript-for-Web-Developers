(function(window) { 
	var speakWord = "Good Bye"; 
	var gByeSpeaker = function (name) {  
		console.log(speakWord + " " + name); 
	}  
    window.gByeSpeaker = gByeSpeaker; 
})(window);