document.addEventListener("DOMContentLoaded", () => {
  const MenuToggle = document.getElementById("MenuToggle");
  const AppDrawer = document.getElementById("AppDrawer");
  const overlay = document.createElement("div");

  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  MenuToggle.addEventListener("click", () => {
    AppDrawer.classList.toggle("menu-bar-open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    AppDrawer.classList.remove("menu-bar-open");
    overlay.classList.remove("active");
  });
});
