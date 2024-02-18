// Script for navigation bar
// I want to write a js file that on clicking menu on the main page
// it shows hidden menu and close button shows up
// 1.
const openMenu = document.querySelector('.menu--open');
const closeMenu = document.querySelector('.menu--close');
const navLinks = document.querySelector('.nav__links');

if (openMenu) {
	openMenu.addEventListener('click', function () {
		// navLinks.style.right = '0px';
		navLinks.classList.add('active');
	});
}

if (closeMenu) {
	closeMenu.addEventListener('click', function () {
		// navLinks.style.right = '0px';
		navLinks.classList.remove('active');
	});
}

// create active link
// 1. reset active link
// 2. check current page
// 3. add active link to current page
function navActive() {
	const currentPage = window.location.href;
	const navLinks = document.querySelectorAll('.nav__links a');
	navLinks.forEach((link) => {
		if (link.classList.contains('nav--active')) {
			link.classList.remove('nav--active');
		}

		if (link.href === currentPage) {
			link.classList.add('nav--active');
		}
	});
}
navActive();
const swapImage = function () {
	const mainImg = document.getElementById('mainImg');
	document
		.querySelector('.small-img-group')
		.addEventListener('click', function (event) {
			if (event.target.classList.contains('SmallImg')) {
				mainImg.src = event.target.src;
			}
		});
};

const productViewer = function () {
	const productContainer = document.querySelector('.products--container');
	productContainer.addEventListener('click', function (e) {
		let target = e.target.closest('.product');
		if (!productContainer.contains(target)) return;
		window.location.href = 'sproduct.html';
	});
};

productViewer();
if (window.location.href.includes('sproduct.html')) swapImage();
