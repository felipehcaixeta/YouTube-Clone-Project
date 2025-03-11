document.getElementById("MenuToggle").addEventListener("click", function () {
  const AppDrawer = document.getElementById("AppDrawer");
  const MainContent = document.getElementById("MainContent");
  const ScrollableHeader = document.getElementById("ScrollableHeader");

  AppDrawer.classList.toggle("menu-bar-open"); // Acess this class in the CSS file and assign it AppDrawer
  MainContent.classList.toggle("app-drawer-shift"); // Acess this class in the CSS file and assign it MainContent
  MainContent.classList.toggle("reduce-margin");
  ScrollableHeader.classList.toggle("header-shift");
});
