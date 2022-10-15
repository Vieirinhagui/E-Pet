function iniciaModal(modalId){
  const modal1 = document.getElementById(modalId);
  modal1.classList.add('mostrar')
}

const btn = document.querySelector('.top-buttons');
btn.addEventListener('click', () => {
  iniciaModal('modal-cad-fun');
});