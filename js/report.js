const tabButtons = document.querySelectorAll(".report-tabs button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    // active button
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // active content
    tabContents.forEach(section => {
      if (section.id === `tab-${target}`) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});
