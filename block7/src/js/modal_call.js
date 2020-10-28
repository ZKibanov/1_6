let phoneButtons = document.querySelectorAll('.button--phone');
let modalPhone = document.querySelector('.modal-call');
let modalPhoneClose = document.querySelector('.modal-call-button-close');

phoneButtons.forEach(element => element.addEventListener('click', function (){
modalPhone.classList.remove('modal-call__hidden');
}));
modalPhoneClose.addEventListener('click',function(){
	modalPhone.classList.add('modal-call__hidden')
	});
let closeAllModals = function () {
	
	}
