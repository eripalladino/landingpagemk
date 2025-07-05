const iconoNav = document.getElementById("icono-nav");
const nav = document.getElementById("nav");

iconoNav.addEventListener("click", () => {
  nav.classList.toggle("visible");
});
