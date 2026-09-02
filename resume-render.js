// resume-render.js
// Renders resume layouts using data from info-data.js and projects-data.js

function renderHeader(containerId, data) {
  data = data || INFO_DATA.header;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <p style="margin-top: 0; margin-bottom: 0; font-size: 22px;">${data.name}</p>
    <p style="margin-top: 0; margin-bottom: 0;">${data.tagline}</p>
    <p style="margin-top: 0; margin-bottom: 0;">
        <a href="mailto:${data.email}">${data.email}</a> | ${data.phone} |
        <a href="${data.github}">${data.github}</a><br>
        <a href="${data.website}">${data.website}</a> | <a href="${data.linkedin}">${data.linkedin.replace(/^https?:\/\//, "")}</a>
    </p>`;
}

function renderFooter(containerId, data) {
  data = data || INFO_DATA.header;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <p style="color: #002145;">${data.name} | <a href="mailto:${data.email}">${data.email}</a> | ${data.phone}</p>`;
}

// Render skills in table format for resume
function renderSkillsTable(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !INFO_DATA.skills) return;

  const rows = INFO_DATA.skills
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

// Generic renderer for entries with title, organization/subtitle, date, bullets, and optional tech
function renderEntries(containerId, entries) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = entries
    .map(e => {
      const subtitle = e.subtitle || e.organization || "";
      const techLine = e.technologies
        ? `<li class="tech-line"><strong>Technologies: </strong>${e.technologies}</li>`
        : "";
      return `
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <p style="margin: 0;"><strong>${e.title}</strong> | ${subtitle}</p>
        <span>${e.dateRange}</span>
    </div>
    <ul style="padding-left: 40px; text-align: left; margin-top: 1px;">
        ${e.bullets.map(b => `<li>${b}</li>`).join("\n")}
        ${techLine}
    </ul>`;
    })
    .join("\n");
}

// Render education entries
function renderEducation(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !INFO_DATA.education) return;

  container.innerHTML = INFO_DATA.education
    .map(
      ed => `
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <p style="margin: 0;"><strong>${ed.degree}</strong></p>
        <span>${ed.dateRange}</span>
    </div>
    <p style="text-align: left; margin-top: 0;">${ed.institution}</p>`
    )
    .join("\n");
}

// Render certification entries
function renderCertifications(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !INFO_DATA.certifications) return;

  container.innerHTML = INFO_DATA.certifications
    .map(
      c => `
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <p style="margin: 0;"><strong>${c.name}</strong></p>
        <span>${c.date}</span>
    </div>`
    )
    .join("\n");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    renderHeader,
    renderFooter,
    renderSkillsTable,
    renderEntries,
    renderEducation,
    renderCertifications
  };
}