function playSound() {
	console.log("playing");
	var paths = ["sound (1).wav", "sound (2).wav", "sound (3).wav", "sound (4).wav", "sound (5).wav", "sound (6).wav", "sound (7).wav", "sound (8).wav", "sound (9).wav", "sound (10).wav", "sound (11).wav", "sound (12).wav",];
	var snd = new Pizzicato.Sound(paths[Math.floor(Math.random() * paths.length)], function() {
		// Sound loaded!
		snd.play();
	});
}