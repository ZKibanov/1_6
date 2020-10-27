let chatButtons = document.querySelectorAll('.button--chat');
let modalChat = document.querySelector('.modal-contact');
let modalChatClose = document.querySelector('.modal-contacts-button-close');
chatButtons.forEach(element => element.addEventListener('click', function (){
modalChat.classList.remove('modal-contact__hidden')
}));
modalChatClose.addEventListener('click',function(){
	modalChat.classList.add('modal-contact__hidden')
	});
