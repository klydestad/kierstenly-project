// Renders RESUME_DATA (see resume-data.js) into resume.html.
// Include resume-data.js before this file.
//
// Usage — see the container ids referenced below; resume.html wires these
// up right after each section's <h2>/<hr>, same pattern as skills-render.js.

function renderHeader(containerId, data) {
  data = data || RESUME_DATA.header;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <p style="margin-top: 0; margin-bottom: 0; font-size: 22px;">${data.name}</p>
    <p style="margin-top: 0; margin-bottom: 0;">${data.tagline} </p>
    <p style="margin-top: 0; margin-bottom: 0;">
        <a href="mailto:${data.email}">${data.email}</a> | ${data.phone} |
        <a href="${data.github}">${data.github}</a><br>
        <a href="${data.website}">${data.website}</a> | <a href="${data.linkedin}">${data.linkedin.replace(/^https?:\/\//, "")}</a>
    </p>`;
}

function renderFooter(containerId, data) {
  data = data || RESUME_DATA.header;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <p style="color: #002145;">${data.name} | <a href="mailto:${data.email}">${data.email}</a> | ${data.phone} </p>`;
}

// Generic renderer for any "title | subtitle ... date ... bullets (+ optional
// tech-line)" section: TECHNICAL WORK EXPERIENCE, TECHNICAL PROJECTS,
// WORK EXPERIENCE, VOLUNTEER EXPERIENCE all share this shape.
function renderEntries(containerId, entries) {
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

function renderEducation(containerId, entries) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = entries
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

function renderCertifications(containerId, entries) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = entries
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
    renderEntries,
    renderEducation,
    renderCertifications
  };
}