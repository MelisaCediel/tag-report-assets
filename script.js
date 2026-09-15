const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
        dropdown.classList.remove("is-open");
        dropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
      });
    }
  });
}

dropdownToggles.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const dropdown = button.closest(".nav-dropdown");
    const isOpen = dropdown?.classList.contains("is-open");

    document.querySelectorAll(".nav-dropdown.is-open").forEach((openDropdown) => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove("is-open");
        openDropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
      }
    });

    dropdown?.classList.toggle("is-open", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element) || target.closest(".nav-dropdown")) return;

  document.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
  });
});
