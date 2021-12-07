(() => {
  const refs = {
    locationBtnRef: document.querySelector("[data-open-location]"),
    locationCloseRef: document.querySelector("[location-close-button]"),
    locationWind: document.querySelector("[data-location]")
  }

  refs.locationBtnRef.addEventListener('click', toggleLocation); 
  refs.locationCloseRef.addEventListener('click', toggleLocation);

  function toggleLocation() {
    refs.locationWind.classList.toggle('is-opened');
}
})();

