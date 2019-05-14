"use strict"

// Back to top
function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		goTopBtn.classList.add('back-to-top-show');
	}
	if (scrolled < coords) {
		goTopBtn.classList.remove('back-to-top-show');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -100);
		setTimeout(backToTop, 20);
	}
}

var goTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);


// Hamburger Menu

let closeIcon = document.querySelector('.fa-grip-lines')
let menuToggle = document.querySelector('.toggle-menu');
menuToggle.addEventListener("click", toggleMenuClickHandler);

function toggleMenuClickHandler(e) {
	let menu = document.querySelector('.main');
	menu.classList.toggle("toggle");

	if(closeIcon.classList.contains('fa-grip-lines')){
		closeIcon.classList.remove('fa-grip-lines')
		closeIcon.classList.add('fa-times')
	} else if(closeIcon.classList.contains('fa-times')){
		closeIcon.classList.remove('fa-times')
		closeIcon.classList.add('fa-grip-lines')
	}
}