let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let search = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let cartbtn = document.querySelector('#cart-btn');
let cart = document.querySelector('.shopping-cart');
let loginbtn = document.querySelector('#login-btn');
let login = document.querySelector('.login-form');

menu.onclick= () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	cart.classList.remove('active');
	login.classList.remove('active');
}

search.onclick = () =>{
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
	cart.classList.remove('active');
	login.classList.remove('active');
}

cartbtn.onclick = () =>{
	cart.classList.toggle('active');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	login.classList.remove('active');
}

loginbtn.onclick = () =>{
	login.classList.toggle('active');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cart.classList.remove('active');
}

window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cart.classList.remove('active');
	login.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
	slides[index].classList.remove('active');
	index = (index + 1)%slides.length;
	slides[index].classList.add('active');
}

function prev(){
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length)%slides.length;
	slides[index].classList.add('active');
}
