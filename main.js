(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const yearEl = document.getElementById("year");

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  yearEl.textContent = String(new Date().getFullYear());

  // Theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") root.setAttribute("data-theme", "light");

  function updateThemeIcon() {
    const isLight = root.getAttribute("data-theme") === "light";
    themeBtn.textContent = isLight ? "☀️" : "🌙";
  }
  updateThemeIcon();

  themeBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    updateThemeIcon();
  });

  // Mobile menu
  function openMenu() {
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
  }
  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
  }

  menuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  // Close menu when clicking links
  document.querySelectorAll(".mobile-link").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
})();

// Demo-only form handler (replace with Formspree action to enable real sending)
function fakeSubmit(e) {
  e.preventDefault();
  alert("Form is ready. To make it work on GitHub Pages, connect Formspree and set the form action URL.");
  e.target.reset();
  return false;
}
