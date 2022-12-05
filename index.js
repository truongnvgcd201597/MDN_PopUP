const openModalButton = document.querySelector('.open-modal-btn');
const closeButton = document.querySelector('.modal__footer > button');
const xButton = document.querySelector('i.fa-times');
if(!(openModalButton) || !(closeButton) || !(xButton)) {
    throw new Error('Invalid');
};
openModalButton.addEventListener('click', handleOpenPopUp);
closeButton.addEventListener('click', handleOpenPopUp);
xButton.addEventListener('click', handleOpenPopUp);

function handleOpenPopUp(e){
    console.log(e)
    const handlePopUp = document.querySelector('div.modal');
    handlePopUp.classList.toggle('hide');
}

