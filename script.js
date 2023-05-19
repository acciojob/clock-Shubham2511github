//your JS code here. If required.
// create p tag
function Timer() {
	var currentTime = new Date();
	// format the date and time
	var date = currentTime.toLocaleDateString();
	var time = currentTime.toLocaleTimeString();

	// create p tag 
	var para = document.createElement("p");
    para.id = "timer";
	// add date and time inside para
	para.textContent = date+ ", " +time;
	document.body.appendChild(para);
}

Timer();
setInterval(Timer,1000);
