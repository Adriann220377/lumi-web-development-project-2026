// TAB SWITCHING
const tabButtons = document.querySelectorAll(".report-tabs button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tabContents.forEach(section => {
      if (section.id === `tab-${target}`) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});

// SITEMAP NODE CLICK NAVIGATION
const sitemapNodes = document.querySelectorAll(".sitemap-node");

sitemapNodes.forEach(node => {
  node.addEventListener("click", () => {
    const link = node.dataset.link;
    if (link) window.location.href = link;
  });

  node.addEventListener("mousedown", () => {
    node.classList.add("active");
  });

  node.addEventListener("mouseup", () => {
    node.classList.remove("active");
  });
});

// WIREFRAME FILTERS
const wireframeButtons = document.querySelectorAll(".wireframe-filters button");
const wireframeImage = document.querySelector(".wireframe-image");

const wireframeSources = {
  home: "img/wireframes/home.png",
  projects: "img/wireframes/projects.png",
  about: "img/wireframes/about.png",
  services: "img/wireframes/services.png",
  contact: "img/wireframes/contact.png",
  report: "img/wireframes/report.png"
};

wireframeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;

    wireframeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (!wireframeSources[page]) return;

    wireframeImage.style.opacity = "0";
    setTimeout(() => {
      wireframeImage.src = wireframeSources[page];
      wireframeImage.alt = `${page.charAt(0).toUpperCase() + page.slice(1)} page wireframe`;
      wireframeImage.style.opacity = "1";
    }, 200);
  });
});
