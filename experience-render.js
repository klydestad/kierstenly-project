// Renders EXPERIENCE_DATA (see experience-data.js) into the
// "experience-details-container" markup used for both the Work and
// Volunteer groups. Include experience-data.js before this file.
//
// Usage:
//   <div class="experience-details-container" id="work-experience"></div>
//   ...
//   <div class="experience-details-container" id="volunteer-experience"></div>
//
//   <script src="experience-data.js"></script>
//   <script src="experience-render.js"></script>
//   <script>
//     renderExperienceGroup("work-experience", EXPERIENCE_DATA.work);
//     renderExperienceGroup("volunteer-experience", EXPERIENCE_DATA.volunteer);
//   </script>

function renderExperienceGroup(containerId, entries) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = entries
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

if (typeof module !== "undefined" && module.exports) {
  module.exports = { renderExperienceGroup };
}