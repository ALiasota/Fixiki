(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pg]'),
    closeModalBtn: document.querySelector('[data-modal-close-pg]'),
    modal: document.querySelector('[data-modal-pg]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hiddeng');
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pc]'),
    closeModalBtn: document.querySelector('[data-modal-close-pc]'),
    modal: document.querySelector('[data-modal-pc]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hiddenc');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pp]'),
    closeModalBtn: document.querySelector('[data-modal-close-pp]'),
    modal: document.querySelector('[data-modal-pp]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hiddenp');
  }
})();