"use strict"

// Get width page
function getWidthPage() {
	return document.documentElement.clientWidth;
}



// Menu drop 
let serviceBtn = document.querySelector('.dropList');
let service = document.querySelector('.drop');

serviceBtn.addEventListener('mouseover', function (e) {
	service.classList.add('active__class')
})
serviceBtn.addEventListener('mouseout', function (e) {
	service.classList.remove('active__class')
})

serviceBtn.addEventListener('click', function (e) {
	let classItem = service.classList.contains('active__class');
	if(!classItem){
		service.classList.add('active__class');
	}else{
		service.classList.remove('active__class');
	}
})


// Toggle drop 
let toggleServiceBtn = document.querySelector('.dropListToggle');
let toggleService = document.querySelector('.dropToggle');


toggleServiceBtn.addEventListener('click', function (e) {
	let classItem = toggleService.classList.contains('active__class');
	console.log(classItem);
	if(!classItem){
		toggleService.classList.add('active__class');
	}else{
		toggleService.classList.remove('active__class');
	}
})

// Language drop



// Toggle menu
let plusBtn = document.querySelector('.toggle-btn');
let minBtn = document.querySelector('.fa-times')
let menu = document.querySelector('.toggle');

plusBtn.addEventListener('click', showToggleMenu);
minBtn.addEventListener('click', hideToggleMenu);

function showToggleMenu() {
	if(getWidthPage() <= 768){
		menu.classList.toggle('active');
	}
}

function hideToggleMenu() {
	if(getWidthPage() <= 768){
		menu.classList.toggle('active');
	}
}



// Home Slider
var slider = tns({
	container: '.homeSlider',
	items: 1,
	controlsContainer: '.homeSlider__buttons',
	nav: false,
	mouseDrag: true,
});

// Anime Slider
let title = anime({
	targets: '.slider__content .title',
	left: '0px',
	easing: 'easeInOutSine',
	duration: 500
});

let content = anime({
  targets: '.slider__content .content',
	left: '0px',
	easing: 'easeInOutSine',
  duration: 800
});

let next = document.querySelector('.next');
next.addEventListener('click', function(e){
	e.preventDefault();
	title.play();
	content.play();
})

let prev = document.querySelector('.prev');
prev.addEventListener('click', function(e){
	e.preventDefault();
	title.play();
	content.play();
})


// function tabs
let tabBtn = document.querySelectorAll('.tab');
let tabs = document.querySelectorAll('.tabs__item');
let tabL = document.querySelectorAll('.tabL');
let desc = document.querySelectorAll('.service__description');


tabBtn.forEach(function (item) {
	item.addEventListener('click', function(){
		tab(item, tabBtn, tabs, 'target-tab', 'tabAccent', 'tabActive', tabL, desc);
	});
});


function tab(item, btn, tabs, target, tabAccent, tabActive) {
	let element = item.getAttribute(target);

	if (item.classList.contains(tabAccent)) {
		btn.forEach(function (item) {
			if(element !== item.getAttribute(target)){
				item.classList.remove(tabAccent);
			}
		})
	}else{
		item.classList.add(tabAccent);

		btn.forEach(function (item) {
			if(element !== item.getAttribute(target)){
				item.classList.remove(tabAccent);
			}
		})
	}

	tabL.forEach(function (item) {
		item.classList.remove(tabAccent);
	})

	desc.forEach(function (item) {
		item.classList.remove(tabActive);
	})
	
	tabs.forEach(function (item) {
		if(element === item.getAttribute(target)){
			item.classList.add(tabActive)
			item.firstElementChild.firstElementChild.classList.add(tabAccent);
			item.children[1].classList.add(tabActive)
		}else{
			item.classList.remove(tabActive)
		}
	})
}

// Tabs Services

let tabServiceBtn1 = document.querySelectorAll('.btn__service_list-tab1');
let tabServiceBtn2 = document.querySelectorAll('.btn__service_list-tab2');
let tabServiceBtn3 = document.querySelectorAll('.btn__service_list-tab3');

let tabServiceDescription = document.querySelectorAll('.service__description');

tabServiceBtn1.forEach(function (item) {
	item.addEventListener('click', function () {
		tabList(item, tabServiceBtn1, tabServiceDescription, 'target-list', 'tabAccent', 'tabActive');
	} );
})

tabServiceBtn2.forEach(function (item) {
	item.addEventListener('click', function () {
		tabList(item, tabServiceBtn2, tabServiceDescription, 'target-list', 'tabAccent', 'tabActive');
	} );
})

tabServiceBtn3.forEach(function (item) {
	item.addEventListener('click', function () {
		tabList(item, tabServiceBtn3, tabServiceDescription, 'target-list', 'tabAccent', 'tabActive');
	} );
})

// Function tab list
function tabList(item, btn, tabs, target, tabAccent, tabActive) {
	let element = item.getAttribute(target);

	if (item.classList.contains(tabAccent)) {
		btn.forEach(function (item) {
			if(element !== item.getAttribute(target)){
				item.classList.remove(tabAccent);
			}
		})
	}else{
		item.classList.add(tabAccent);

		btn.forEach(function (item) {
			if(element !== item.getAttribute(target)){
				item.classList.remove(tabAccent);
			}
		})
	}
	
	tabs.forEach(function (item) {
		if(element === item.getAttribute(target)){
			item.classList.add(tabActive)
		}else{
			item.classList.remove(tabActive)
		}
	})
}

// Slider comments

let sliderComment = tns({
	container: '.slider__comment',
	items: 2,
	autoplay: true,
	autoplayButtonOutput: false,
	nav: true,
	navPosition: "bottom",
	controls: false,
	mouseDrag: true,
	responsive: {
		300: {
			items: 1
		},
		768: {
			items: 2
		}
	}
});