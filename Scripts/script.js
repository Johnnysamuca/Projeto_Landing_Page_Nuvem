const asideEl = document.querySelector(".aside");
const menuEl = document.querySelector(".cabecalho__icone-menu");
const closeMenuEl = document.querySelector(".aside__icone-menu");

menuEl.addEventListener("click", () => (asideEl.style.display = "flex"));
closeMenuEl.addEventListener("click", () => (asideEl.style.display = "none"));
