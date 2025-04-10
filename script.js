document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-buttons a");
  const sections = document.querySelectorAll(".page-section");

  function switchPage(targetId) {
    sections.forEach(section => {
      section.classList.remove("active");
      if (section.dataset.page === targetId) {
        section.classList.add("active");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.dataset.target === targetId) {
        link.classList.add("active");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.dataset.target;
      switchPage(target);
    });
  });

  // Default page
  switchPage("home");
});