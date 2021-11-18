var video = document.querySelector("#player1")


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

let speed = 1
document.querySelector("#slower").addEventListener("click",function() {
	speed = speed * 0.95;
	video.playbackRate = speed;
	console.log("Current speed is " + speed);
});

document.querySelector("#faster").addEventListener("click", function (){
	speed = speed + speed*0.05;
	video.playbackRate = speed;
	console.log("Current speed is " + speed);
});

let current = video.currentTime
document.querySelector("#skip").addEventListener("click", function (){
	let new_time = current + 15;
	video.currentTime += new_time
	console.log("Current location is " + video.currentTime + " seconds.");
});

var muteButton = document.querySelector("#mute")
current_volume = video.volume
document.querySelector("#mute").addEventListener("click", function(){
	if (muteButton.innerHTML === "Mute") {
		muteButton.innerHTML = "Unmute"
		video.volume = 0;
	} else {
		muteButton.innerHTML = "Mute";
		video.volume = current_volume
	}
});

document.querySelector("#orig").addEventListener("click",
function() {
	video.classList.remove("oldSchool");
});

document.querySelector("#vintage").addEventListener("click",
function() {
	video.classList.add("oldSchool");
});



var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
x  = this.value;
output.innerHTML = x + "%";
video.volume = (x/100)
}


