var video = document.querySelector("#player1")


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
var slider = document.getElementById("slider");
var output = document.getElementById("volume");
document.querySelector("#play").addEventListener("click", function() {
	output.innerHTML = slider.value + "%";
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
	console.log(video.currentTime);
	video.currentTime += 15;

	if((video.currentTime >= video.duration)){
		video.currentTime=0;
		console.log(video.currentTime);
	}
	
});

var muteButton = document.querySelector("#mute")
current_volume = video.volume


document.querySelector("#mute").addEventListener("click", function(){
	if (muteButton.innerHTML === "Mute") {
		muteButton.innerHTML = "Unmute"
		video.volume = 0;
		output.innerHTML = video.volume

	} else {
		muteButton.innerHTML = "Mute";
		video.volume = current_volume
		output.innerHTML = video.volume*100 + "%"
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



 // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
x  = this.value;
output.innerHTML = x + "%";
video.volume = (x/100)
}


