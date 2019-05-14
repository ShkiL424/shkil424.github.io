"use strict"

let toggleBtnOpen = document.querySelector('.toggle-menu__btn_op');
let toggleBtnClose = document.querySelector('.toggle-menu__btn_cl');
let toggleMenu = document.querySelector('.toggle__menu')

toggleBtnOpen.addEventListener('click', function () {
	toggleMenu.style.top = '0px'
})
toggleBtnClose.addEventListener('click', function () {
	toggleMenu.style.top = '-200%'
})

// Date background
let bgc = ['#2d95bf','#f2ca5b','#2e8a7d','#000000','#ff4c36','#33282c'];
let dateItems = document.querySelectorAll('.date');

function setBgc(arr, items){
	for (let i = 0; i < items.length; i++) {
		dateItems[i].style.backgroundColor = bgc[i];
	}
}

setBgc(bgc, dateItems);


let sliderGame = tns({
	container: '.games__slider',
	items: 2,
	controlsContainer: '.games_control',
	navContainer: '.games_pagination'
	// autoWidth: true,


	// responsive: {
	// 	640: {
	// 		edgePadding: 20,
	// 		gutter: 20,
	// 		items: 2
	// 	},
	// 	700: {
	// 		gutter: 20
	// 	},
	// 	900: {
	// 		items: 2,
	// 		gutter: 10
	// 	}
	// }
});

let sliderTrailers = tns({
	container: '.trailers__slider',
	items: 2,
	controlsContainer: '.trailer_control',
	navContainer: '.trailer_pagination',
	gutter: 20

	// responsive: {
	// 	640: {
	// 		edgePadding: 20,
	// 		gutter: 20,
	// 		items: 2
	// 	},
	// 	700: {
	// 		gutter: 20
	// 	},
	// 	900: {
	// 		items: 2,
	// 		gutter: 10
	// 	}
	// }
});