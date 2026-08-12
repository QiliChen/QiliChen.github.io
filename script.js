const buttons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projects.forEach((project) => {
      project.hidden = filter !== "All" && project.dataset.category !== filter;
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
