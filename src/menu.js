(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");  
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuWind = document.querySelector("[data-wind]");
  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    

    mobileMenuRef.classList.toggle("is-open");
    mobileMenuWind.classList.toggle("wind-open");

  });

  const cardBtnRef = document.querySelector("[data-card-button]");  
  const cardRef = document.querySelector("[data-card]");

  cardBtnRef.addEventListener("click", () => {
    const expanded =
      cardBtnRef.getAttribute("aria-expanded") === "true" || false;

    cardBtnRef.classList.toggle("is-open");
    cardBtnRef.setAttribute("aria-expanded", !expanded);
    

    cardRef.classList.toggle("is-open");
    

  });

  
})();

