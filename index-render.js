// index-render.js
// Renders INFO_DATA (see info-data.js) with optional filtering for website display.

function renderSkillsGrid(containerId, websiteOnly = false, data = INFO_DATA.skills) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = websiteOnly
    ? data.filter(s => s.showOnWebsite !== false)
    : data;

  container.innerHTML = filtered
    .map(
      c => `
    <div class="skill-category">
        <h2 class="category-title">${c.category}</h2>
        <div class="skills-list">
            ${c.skills.map(s => `<div class="skill-item">${s}</div>`).join("\n")}
        </div>
    </div>`
    )
    .join("\n");
}

function renderWorkExperience(containerId, websiteOnly = false, data = INFO_DATA.work) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = websiteOnly
    ? data.filter(w => w.showOnWebsite !== false)
    : data;

  container.innerHTML = filtered
    .map(
      e => `
    <div class="details-container">
        <h2 class="experience-sub-title">${e.title}</h2>
        <p class="experience-date">${e.organization} | ${e.dateRange}</p>
        <ul class="experience-list">
            ${e.bullets.map(b => `<li class="experience-item">${b}</li>`).join("\n")}
        </ul>
    </div>`
    )
    .join("\n");
}

function renderVolunteerExperience(containerId, websiteOnly = false, data = INFO_DATA.volunteer) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = websiteOnly
    ? data.filter(v => v.showOnWebsite !== false)
    : data;

  container.innerHTML = filtered
    .map(
      v => `
    <div class="details-container">
        <h2 class="experience-sub-title">${v.title}</h2>
        <p class="experience-date">${v.organization} | ${v.dateRange}</p>
        <ul class="experience-list">
            ${v.bullets.map(b => `<li class="experience-item">${b}</li>`).join("\n")}
        </ul>
    </div>`
    )
    .join("\n");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { renderSkillsGrid, renderWorkExperience, renderVolunteerExperience };
}