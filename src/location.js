(() => {
  const refs = {
     locationBtnRef: document.querySelector("[data-open-location]"),
     locationCloseRef: document.querySelector("[location-close-button]"),
     locationWind: document.querySelector("[data-location]")
  }

  refs.locationBtnRef.addEventListener('click', toggleLocation); 
  // refs.locationCloseRef.addEventListener('click', toggleLocation);

  function toggleLocation() {
    refs.locationWind.classList.toggle('is-open1');
 }
})();
  // menuBtnRef.addEventListener("click", () => {
  //   const expanded =
  //     locationBtnRef.getAttribute("aria-expanded") === "true" || false;

  //   locationBtnRef.classList.toggle("is-open");
  //   locationBtnRef.setAttribute("aria-expanded", !expanded);

  //   locationCloseRef.classList.toggle("is-open");
  //   locationWind.classList.toggle("location-open");