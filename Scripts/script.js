const asideEl = document.querySelector(".aside");
const menuEl = document.querySelector(".cabecalho__icone-menu");
const closeMenuEl = document.querySelector(".aside__icone-menu");

function openMenu() {
  asideEl.style.display = "flex";
  document.documentElement.style.overflow = "hidden";
}

menuEl.addEventListener("click", openMenu);
closeMenuEl.addEventListener("click", () => (asideEl.style.display = "none"));
