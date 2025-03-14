document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("MenuToggle");
  const appDrawer = document.getElementById("AppDrawer");
  const overlay = document.createElement("div");

  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  menuToggle.addEventListener("click", () => {
    appDrawer.classList.toggle("menu-bar-open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    appDrawer.classList.remove("menu-bar-open");
    overlay.classList.remove("active");
  });
});
