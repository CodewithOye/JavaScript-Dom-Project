// variable


let openBtn = document.querySelector('#open-btn')
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn')

// event listener


openBtn.addEventListener('click', () => {
  modalContainer.style.display ='block';
})

closeBtn.addEventListener('click' , () => {
  modalContainer.style.display='none';
})

window.addEventListener('click', (event) => {
  if(event.target === modalContainer){
    modalContainer.style.display =' none';
  }
})



