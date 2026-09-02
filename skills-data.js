// Single source of truth for the Technical Skills section.
// Edit this file only — both the resume table layout and the grid/card
// layout render from this same list, so they can never drift apart.
//
// Order here is display order. Each entry is one category row/card.

const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: ["Python", "R", "SQL", "Java", "C++", "C", "C#", "TypeScript", "LaTeX"]
  },
  {
    category: "Data Science & ML",
    skills: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "Jupyter", "MATLAB", "Power BI", "Fabric"]
  },
  {
    category: "Web Development",
    skills: ["JavaScript", "Node.js", "HTML", "CSS", ".NET", "Streamlit"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Azure DevOps", "SQL Server/SSMS", "Power Platform", "SharePoint", "Logic Apps", "Excel", "Cloudflare", "Workday"]
  },
  {
    category: "Testing & Development",
    skills: ["JUnit", "JSON", "Mocha", "Chai", "Selenium", "REST APIs"]
  },
  {
    category: "Environments",
    skills: ["Visual Studio", "VS Code", "IntelliJ IDEA", "Overleaf"]
  }
];

// Support both browser <script> include (global) and Node/CommonJS require().
if (typeof module !== "undefined" && module.exports) {
  module.exports = SKILLS_DATA;
}