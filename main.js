var startTime = new Date().getTime();

function getRandomColor() {
	var colors = "0123456789ABCDEF".split('');
	var tag = "#";
	for(var i = 0; i < 6; i++) {
		tag += colors[Math.floor(Math.random() * 16)];
	}
	return tag;
}

function makeFigureShow() {
	var figure = document.getElementById("figure");
	var top = Math.random() * 400;
	var left = Math.random() * 700;
	var width = Math.random() * 200 + 50;
	figure.style.top = top + "px";
	figure.style.left = left + "px";
	figure.style.width = width + "px";
	

	if(Math.random() < 0.3) {
		figure.style.borderRadius = "50%";
		figure.style.backgroundColor = getRandomColor();
		figure.style.borderBottom = "0";
	} else if(Math.random() >= 0.3 && Math.random() <= 0.7) {
		figure.style.borderRadius = "0";
		figure.style.backgroundColor = getRandomColor();
		figure.style.borderBottom = "0";
	} else if(Math.random() > 0.7) {
		figure.style.borderRadius = "0";
		figure.style.width = "0";
      	figure.style.left = "0";
		figure.style.borderLeft = "50px solid transparent";
      	figure.style.borderRight = "50px solid transparent";
      	figure.style.borderBottom = "100px solid" + getRandomColor();
      	figure.style.backgroundColor = "transparent";
      	
	}

	figure.style.display = "block";
	startTime = new Date().getTime();
}

setTimeout(makeFigureShow, Math.random() * 1000);

document.getElementById("figure").onclick = function() {
	var figure = document.getElementById("figure");
	figure.style.display = "none";
	var finishTime = new Date().getTime();
	var timeReact = (finishTime - startTime) / 1000;
	document.getElementById("h2").innerHTML = timeReact + " " + "second.";
	setTimeout(makeFigureShow, Math.random() * 1000);
}

// var startTime = new Date().getTime();

// function getRandomColor() {
// 	var coor = "0123456789ABCDEF".split('');
// 	var her = "#";
// 	for (var i = 0; i < 6; i++) {
// 		her += coor[Math.floor(Math.random() * 16)];
// 	}
// 	return her;
// }

// var timeBack = function() {
// 	var square = document.getElementById("figure");
// 	var top = Math.random() * 400;
// 	var left = Math.random() * 800;
// 	var width = Math.random() * 200 + 50;
	
// 	square.style.top = top + "px";
// 	square.style.left = left + "px";
// 	square.style.width = width + "px";

// 	if(Math.random() < 0.3) {
// 		square.style.borderRadius = "50%";
// 		square.style.backgroundColor = getRandomColor();
// 		square.style.borderBottom = "0";
// 	} else if (Math.random() >= 0.3 && Math.random() <= 0.7) {
// 		square.style.borderRadius = "0";
// 		square.style.backgroundColor = getRandomColor();
// 		square.style.borderBottom = "0";
// 	} else if (Math.random() > 0.7) {
// 		square.style.borderRadius = "0";
// 		square.style.left = "0";
// 		square.style.width = "0";
// 		square.style.borderLeft = "50px solid transparent";
// 		square.style.borderRight = "50px solid transparent";
// 		square.style.borderBottom = "100px solid" + getRandomColor();
// 		square.style.backgroundColor = "transparent";
// 	}

// 	square.style.display = "block";
// 	startTime = new Date().getTime();
// }

// setTimeout(timeBack, Math.random() * 1000);

// document.getElementById("figure").onclick = function() {
// 	var square = document.getElementById("figure");

// 	square.style.display = "none";
// 	var finishTime = new Date().getTime();
// 	var differenceTime = (finishTime - startTime) / 1000;
// 	document.getElementById("diftime").innerHTML = differenceTime + " " + "seconds.";
// 	document.getElementById("diftime").style.color = "red";
// 	setTimeout(timeBack, Math.random() * 500);
// }
