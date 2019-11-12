function playSound() {
	console.log("playing");
	var paths = ["sound1.mp3, sound2.mp3"];
	var snd = new Audio(path[Math.floor(Math.random() * paths.length)]);
	snd.play();
}