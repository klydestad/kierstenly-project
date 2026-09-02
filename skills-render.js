// Renders SKILLS_DATA (see skills-data.js) into either of the two
// Technical Skills layouts used across the site. Include skills-data.js
// before this file.
//
// Usage — table/resume layout:
//   <div id="skills-table"></div>
//   <script src="skills-data.js"></script>
//   <script src="skills-render.js"></script>
//   <script>renderSkillsTable("skills-table");</script>
//
// Usage — grid/card layout:
//   <div class="skills-grid" id="skills-grid"></div>
//   <script src="skills-data.js"></script>
//   <script src="skills-render.js"></script>
//   <script>renderSkillsGrid("skills-grid");</script>

function renderSkillsTable(containerId, data) {
  data = data || SKILLS_DATA;
  const container = document.getElementById(containerId);
  if (!container) return;

  const labels = data
    .map(c => `<p style="margin: 0;"><strong>${c.category}:</strong></p>`)
    .join("\n");
  const values = data
    .map(c => `<p style="margin: 0;">${c.skills.join(", ")}</p>`)
    .join("\n");

  container.innerHTML = `
    <div style="display: flex; width: 100%; position: relative;">
        <div style="flex: 0 0 30%; display: flex; flex-direction: column; text-align: left;">
            ${labels}
        </div>
        <div style="position: absolute; left: 50%; transform: translateX(-50%); text-align: left;">
            ${values}
        </div>
    </div>`;
}

function renderSkillsGrid(containerId, data) {
  data = data || SKILLS_DATA;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data
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

if (typeof module !== "undefined" && module.exports) {
  module.exports = { renderSkillsTable, renderSkillsGrid };
}