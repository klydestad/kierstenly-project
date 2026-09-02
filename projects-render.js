// projects-render.js
// Renders PROJECTS_DATA with optional filtering for website vs resume display.

function renderProjectsGrid(containerId, websiteOnly = false, data = PROJECTS_DATA.projects) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = websiteOnly
    ? data.filter(p => p.showOnWebsite !== false)
    : data;

  container.innerHTML = filtered
    .map(
      p => `
    <div class="details-container color-container">
        <div class="article-container">
            <img 
                src="${p.image.src}"
                alt="${p.image.alt}"
                class="project-img"
            />
        </div>
        <h2 class="experience-sub-title project-title">${p.title}</h2>
        <div class="btn-container">
            ${p.buttons ? p.buttons.map(b => `
              <button class="btn btn-color-2 project-btn" onclick="location.href='${b.link}'">
                ${b.name}
              </button>
            `).join('') : ''}
        </div>
    </div>`
    )
    .join("\n");
}

function renderProjectsTable(containerId, entries = PROJECTS_DATA.projects) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = entries
    .map(e => {
      const techLine = e.technologies
        ? `<li class="tech-line"><strong>Technologies: </strong>${e.technologies}</li>`
        : "";
      return `
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <p style="margin: 0;"><strong>${e.title}</strong> | ${e.subtitle}</p>
        <span>${e.dateRange}</span>
    </div>
    <ul style="padding-left: 40px; text-align: left; margin-top: 1px;">
        ${e.bullets.map(b => `<li>${b}</li>`).join("\n")}
        ${techLine}
    </ul>`;
    })
    .join("\n");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { renderProjectsGrid, renderProjectsTable };
}