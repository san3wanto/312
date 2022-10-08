// menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// ------------------

//switch menu button
const buttonMenu = (toggleId, menuId) => {
  const toggle = document.getElementById(toggleId),
    menu = document.getElementById(menuId);

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("bx-menu");
      menu.classList.toggle("bx-right-arrow-alt");
      // menu.classList.add("bx-menu");
    });
  }
};
buttonMenu("nav-toggle", "bx-menu");
// -------------

//active menu
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  //active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");

  const navBut = document.getElementById("bx-menu");
  navBut.classList.toggle("bx-right-arrow-alt");
  navBut.classList.toggle("bx-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
// -------------
