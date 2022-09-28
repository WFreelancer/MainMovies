const Magnetic = () => {
	const $$ = (s, o = document) => o.querySelectorAll(s);
	$$('[data-button-animation]').forEach(el => el.addEventListener('mousemove', function(e) {
		const pos = el.getBoundingClientRect();
		const mx = e.clientX - pos.left - pos.width/2; 
		const my = e.clientY - pos.top - pos.height/2;
		const child = el.querySelector('[data-magnetic-child]');
		let speedX = 0.4;
		let speedY = 0.7;
		el.style.transform = 'translate('+ mx * speedX +'px, '+ my * speedY +'px)';
		el.style.transform += 'rotate3d('+ mx * -speedX +', '+ my * -speedY +', 0, 12deg)';
		if(child) child.style.transform = 'translate('+ mx * 0.13 +'px, '+ my * 0.3 +'px)';
	
	}));
	$$('[data-button-animation]').forEach(el => el.addEventListener('mouseleave', function() {
		const child = el.querySelector('[data-magnetic-child]');
		el.style.transform = 'translate3d(0px, 0px, 0px)';
		el.style.transform += 'rotate3d(0, 0, 0, 0deg)';
		if(child) child.style.transform = 'translate3d(0px, 0px, 0px)';
	}));
}

export {Magnetic}