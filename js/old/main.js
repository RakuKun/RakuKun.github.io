import Meteor from "./meteor.js";

var cvs = document.getElementById('canvas'),
	ctx = cvs.getContext('2d'),
	width = window.innerWidth,
	height = window.innerHeight,
	meteors = [],
	isUpper = true;
let maxMeteors = 7;

function ResizeCanvas() {
	cvs.width = width;
	cvs.height = height;
}

const meteorGenerator = () => {
	let meteorInternal = Math.random() * 1000 + 1200;
	if (meteors.length > maxMeteors) {
		return;
	}
	meteors.push(new Meteor(ctx, cvs, isUpper));
	isUpper = !isUpper;
	setTimeout(() => {
		meteorGenerator()
	}, meteorInternal);
}

function updateMeteor() {
	meteors.forEach((meteor, index, arr) => {
		if (meteor.flow()) {
			meteor.draw()
		} else {
			arr.splice(index, 1)
		}
	})
	ctx.fillStyle = "rgba(252, 250, 242,0.3)";
	ctx.fillRect(0, 0, cvs.offsetWidth, cvs.offsetHeight);
	requestAnimationFrame(updateMeteor)
}

window.onresize = window.location.reload;

ResizeCanvas();
meteorGenerator();
updateMeteor();