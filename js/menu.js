// Бургер-меню: відкриття/закриття навігації на малих екранах
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  burger.classList.toggle("active", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Закрити меню" : "Відкрити меню");
}

burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
// закриття меню після вибору пункту
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
// закриття клавішею Esc
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
// при збільшенні вікна меню скидається
window.matchMedia("(min-width: 601px)").addEventListener("change", e => { if (e.matches) setMenu(false); });
