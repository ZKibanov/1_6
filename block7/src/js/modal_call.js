let phoneButtons = document.querySelectorAll('.button--phone');
let modalPhone = document.querySelector('.modal-call');
let modalPhoneClose = document.querySelector('.modal-call-button-close');
let modalPhoneScreen = document.querySelector('.modal-call__screen');

phoneButtons.forEach(element => element.addEventListener('click', function (){
modalPhone.classList.remove('modal-call__hidden');
modalPhoneScreen.classList.remove('modal-call__screen_hidden');
}));
modalPhoneClose.addEventListener('click',function(){
	modalPhone.classList.add('modal-call__hidden')
	modalPhoneScreen.classList.add('modal-call__screen_hidden');

	});
let closeAllModals = function () {
	
	}
