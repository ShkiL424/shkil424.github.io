// Fixed nav bar
window.addEventListener('scroll', function() {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	let navBar = document.querySelector('.navbar');

	if (scrolled !== 0) {
		navBar.classList.add('afix');
	}else if (scrolled === 0) {
		navBar.classList.remove('afix');
	}
});

// Back to top button
function trackScroll() {
	let scrolled = window.pageYOffset;
	let coords = document.documentElement.clientHeight;

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

let goTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

// get width page
function getWidthPage() {
	return document.documentElement.clientWidth;
}

// Slider
function getWidhtElem(elem) {
	return document.querySelector(elem).offsetWidth;
}

function elemChild(clas){
	let elem = document.querySelector(clas);
	return elem.children.length
}

function setWidhtElem(slider, element) {
	let elem = document.querySelector(element);
	if(getWidthPage() <= 880){
		let elemWidth = getWidhtElem(slider) * elemChild(element);
		elem.style.width = elemWidth + 'px';
	}else {
		let elemWidth = getWidhtElem(slider) / 2 * elemChild(element);
		elem.style.width = elemWidth + 'px';
	}

}

window.onload = window.onresize = function() {
	setWidhtElem('.my_works-slider', '.my_works-slider-wraper');
};


function mySlider(slider, wraper, item, button) {
	let maineSlider = document.querySelector(slider);
	let sliderWraper = maineSlider.querySelector(wraper);
	let slidderItems = maineSlider.querySelectorAll(item);
	let sliderConyrols = maineSlider.querySelectorAll(button);

	let wraperWidth = parseFloat(getComputedStyle(sliderWraper).width);
	let itemWidth = parseFloat(getComputedStyle(slidderItems[0]).width);

	let positionLeftItem = 0;
	let transform = 0;
	let step = itemWidth / wraperWidth * 100;
	let items = [];


	slidderItems.forEach(function(item, index) {
		items.push({item: item, position: index, transform: 0})
	});


	let position = {
		getItemMin: function () {
			let indexItem = 0;
			items.forEach(function(item, index) {
				if(item.position < items[indexItem].position) {
					indexItem = index;
				}
			});
			return indexItem;
		},
		getItemMax: function () {
			let indexItem = 0;
			items.forEach(function(item, index) {
				if(item.position > items[indexItem].position) {
					indexItem = index;
				}
			});
			return indexItem;
		},
		getMin: function () {
			return items[position.getItemMin()].position;
		},
		getMax: function () {
			return items[position.getItemMax()].position;
		}
	};


	let transformItrem = function (direction) {
		let nextItem;

		if(direction === 'right') {
			positionLeftItem++;
			if((positionLeftItem + wraperWidth / itemWidth - 1) > position.getMax()){
				nextItem = position.getItemMin();
				items[nextItem].position = position.getMax() + 1;
				items[nextItem].transform += items.length * 100;
				setTimeout(function(){
					items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
				}, 700);
			}
			transform -= step;
		}
		if(direction === 'left') {
			positionLeftItem--;
			if(positionLeftItem < position.getMin()){
				nextItem = position.getItemMax();
				items[nextItem].position = position.getMin() - 1;
				items[nextItem].transform -= items.length * 100;
				items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
			}
			transform += step;
		}
		sliderWraper.style.transform = 'translateX(' + transform + '%)';
	};


	let controlClick = function () {
		let direction;
		if(this.classList.contains('right')){
			direction = 'right'
		} else {
			direction = 'left'
		}
			transformItrem(direction);
	};


	let setUpListener = function () {
		sliderConyrols.forEach(function (item) {
			item.addEventListener('click', controlClick)
		})
	};
	setUpListener();
}

mySlider('.my_works-slider', '.my_works-slider-wraper', '.my_works-slider-items', '.slider-buttons');




// Faq acordeon
let itemFaq = document.querySelectorAll('.faq-item');

let clickToQuestion = function () {
	itemFaq.forEach(function (items) {
		items.addEventListener('click', showItemsFaq)
	});
};

function showItemsFaq() {
	let section = this.lastElementChild;
	let isCollapsed = section.getAttribute('data-collapsed') === 'true';

	if(isCollapsed) {
		sectionMinus(this);
		expandSection(section);
		section.setAttribute('data-collapsed', 'false');
	}	else {
		sectionMinus(this);
		collapseSection(section);
	}
}

function collapseSection(element) {
	let sectionHeight = element.scrollHeight;
	let elementTransition = element.style.transition;

	element.style.transition = '';

	requestAnimationFrame(function() {
		element.style.height = sectionHeight + 'px';
		element.style.transition = elementTransition;

		requestAnimationFrame(function() {
			element.style.height = 0 + 'px';
		})
	});
	element.setAttribute('data-collapsed','true')
}

function expandSection(element) {
	let sectionHeight = element.scrollHeight;

	element.style.height = sectionHeight + 'px';

	element.addEventListener('transitionend', function(e) {
		element.addEventListener('transitionend', arguments.callee);
		element.style.height = null;
	});
	element.setAttribute('data-collapsed', 'false');
}

function sectionMinus(element){
	let elem = element.firstElementChild.lastChild;
	let elemIsClass = elem.classList.contains('fa-plus');
	if(elemIsClass){
		elem.className = 'fal fa-minus';
		element.style.borderBottom = 'none';
		element.firstElementChild.style.paddingBottom = '20px';
	}	else {
		elem.className = 'fal fa-plus';
		element.style.borderBottom = '1px solid #dededf';
		element.style.paddingBottom = '0px';
	}
}

clickToQuestion();


// Scrol to
let linkNav = document.querySelectorAll('.menuLink');
let V = .25;

linkNav.forEach(function(item){
	item.addEventListener('click', function(e){
		e.preventDefault();

		let winScrol = window.pageYOffset;
		let hash = this.href.replace(/[^#]*(.*)/, '$1');
		let indentTo = document.querySelector(hash).getBoundingClientRect().top;
		let start = null;

		requestAnimationFrame(step);
		showToggleMenu();

		function step(time){
			if(start === null) start = time;

			let progress = time - start;
			let r;

			if (indentTo < 0) {
				r = Math.max(winScrol - progress / V, winScrol + indentTo);
			}else {
				r = Math.min(winScrol + progress / V, winScrol + indentTo);
			}

			window.scrollTo(0, r);

			if(r !== winScrol + indentTo){
				requestAnimationFrame(step);
			}else {
				location.hash = hash;
			}
		}
	})
});


// Validation form
let formButton = document.querySelector('#formButton');
formButton.addEventListener('click', function(e){
	let form = document.forms.contacts;

	for (let i = 0; i < form.length - 1; i++) {

		if(form.elements[i].value){
			removeClass(form.elements[i]);
			if(form.elements[1].value) {
				emailValid(form.elements[1])
			}
		}else {
			e.preventDefault();
			addClass(form.elements[i]);
		}
	}
});


function addClass(elememt) {
	let elem = elememt.nextElementSibling;
	elem.classList.add('show');
	console.log(elem.classList);
}

function removeClass(elememt) {
	let elem = elememt.nextElementSibling;
	elem.classList.remove('show')
}

function emailValid(element) {
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let elem = element.value;

	if(reg.test(elem) === false) {
		addClass(element);
	}else {
		removeClass(element);
	}
}


// Toggle-menu
let toggleBtn = document.querySelector('.toggle-btn');
let menu = document.querySelector('.menu');
toggleBtn.addEventListener('click', showToggleMenu);

function showToggleMenu() {
	if(getWidthPage() <= 768){
		menu.classList.toggle('active');
	}

	if(toggleBtn.classList.contains("fa-equals")){
		toggleBtn.classList.remove('fa-equals');
		toggleBtn.classList.add('fa-times');
	}else if (toggleBtn.classList.contains("fa-times")){
		toggleBtn.classList.remove('fa-times');
		toggleBtn.classList.add('fa-equals');
	}
}
