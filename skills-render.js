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

  // Three CSS Grid columns per row: label (30%) | gutter (20%, empty) |
  // value (50%) — mirrors the original 30%-column / 50%-left-offset
  // layout, but keeps both columns in normal document flow. The earlier
  // version positioned the value column with `position: absolute`, which
  // takes it out of flow entirely: the row's height was then set only by
  // the (short) label column, so once the value column grew past that
  // height — as it will whenever the skills list is long — it silently
  // overlapped whatever section came next instead of pushing it down.
  // Grid rows auto-size to their tallest cell, so this can't happen here.
  const rows = data
    .map(
      c => `
        <p style="margin: 0; text-align: left;"><strong>${c.category}:</strong></p>
        <div></div>
        <p style="margin: 0; text-align: left;">${c.skills.join(", ")}</p>`
    )
    .join("");

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 30% 20% 50%; width: 100%; row-gap: 2px;">
        ${rows}
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