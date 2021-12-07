(() => {
  const menuBtnRef = document.querySelector("[data-open-button]");
  const mobileMenuRef = document.querySelector("[data-close-button]");
  const mobileMenuWind = document.querySelector("[data-location]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileMenuWind.classList.toggle("location-open");
  });
})();