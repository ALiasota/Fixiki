(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModal2() {
    refs.modal.classList.toggle('is-hidden');
  }
})();