(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });

  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  buttons.forEach(button => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    buttons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    cards.forEach(card => card.hidden = filter !== "all" && !card.dataset.category.split(" ").includes(filter));
  }));

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    }), {threshold: .12});
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add("is-visible"));
})();
