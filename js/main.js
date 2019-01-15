import Meteor from "./meteor.js";

let cvs = document.getElementById('canvas'),
	ctx = cvs.getContext('2d'),
	width = window.innerWidth,
	height = window.innerHeight,
	meteors = [],
	maxMeteors = 7
var isUpper = true
cvs.width = width
cvs.height = height

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
	ctx.fillStyle = 'rgba(255,255,255,0.25)';
	ctx.fillRect(0, 0, cvs.offsetWidth, cvs.offsetHeight);
	requestAnimationFrame(updateMeteor)
}

meteorGenerator();
updateMeteor();