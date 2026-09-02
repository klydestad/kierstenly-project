// Single source of truth for resume.html — everything below TECHNICAL SKILLS
// (which already lives in skills-data.js). Edit this file only.
//
// IMPORTANT CAVEAT — page breaks are manual, not automatic:
// resume.html is laid out as two fixed 8.5in x 11in <div class="page"> blocks
// so it prints/exports cleanly to exactly two pages. The TECHNICAL PROJECTS
// list is split across that page break by hand: the first N projects render
// into a container on page 1, the rest into a second container on page 2.
// If you add/remove/lengthen a project entry, you may need to move the
// `PROJECTS_PAGE_SPLIT` index below so content doesn't overflow off page 1
// or leave page 2 nearly empty. This refactor centralizes the *content*,
// but it does not add automatic reflow/pagination (that would need a tool
// like paged.js) — you'll still eyeball the split after big edits.
const PROJECTS_PAGE_SPLIT = 3; // first 3 projects on page 1, rest on page 2
// (Was 6. Between the longer Technical Work Experience bullets and the
// grown Technical Skills list added since this file was first drafted,
// page 1 no longer has room for 6 projects — see the overflow note below.)

// TODO: confirm the canonical email. The original file used two different
// addresses — "klyde-stad@outlook.com" in the header and
// "k-lydestad@outlook.com" in both footers. This file uses the header's
// version as the default; update it here once you know which is correct,
// and it will be consistent everywhere.
const RESUME_DATA = {
  header: {
    name: "Kiersten Lyde-Stad",
    tagline: 'Combined Major in Computer Science and Statistics, 4<sup>th</sup> Year',
    email: "klyde-stad@outlook.com",
    phone: "(604) 603-4429",
    github: "https://github.com/klydestad",
    website: "https://www.kierstenly.dev/",
    linkedin: "https://www.linkedin.com/in/kierstenly/"
  },

  // TECHNICAL WORK EXPERIENCE
  technicalExperience: [
    {
      title: "Software Developer Part-time Contractor",
      subtitle: "Terra Dygital Solutions Inc.",
      dateRange: "Sep 2026–Present",
      bullets: [
        "Continued building data pipelines in Microsoft Fabric and data models in SQL Server, and extending Power BI reporting, part-time following the co-op",
        "Extended a C#/.NET automation tool that authenticates against third-party APIs, parses report data, and loads it into SQL Server with validation testing",
        "Supported client requirements gathering and maintained technical documentation"
      ],
      technologies: "C#, .NET, Python, SQL Server/SSMS, Power BI, Microsoft Fabric, Azure, REST APIs"
    },
    {
      title: "Developer Co-op",
      subtitle: "Terra Dygital Solutions Inc.",
      dateRange: "Jan–Aug 2026",
      bullets: [
        "Engineered data pipelines in Microsoft Fabric (Lakehouses, DataFlows) with SQL Server/SSMS-backed data models and Azure Logic Apps, and built Power BI reports and automated workflows for a client",
        "Wrote data transformation logic with Power Query to build reporting templates, and developed Power BI dashboards for data analysis across a second client engagement",
        "Developed data-driven applications (canvas and model-driven) integrating backend data sources for a third client",
        "Extended an existing C#/.NET console application's architecture (interfaces, helper classes) to migrate internal ticket-routing logic to a new platform, integrating external systems via configured REST API payload/endpoint logic, with Azure DevOps and Git for source control",
        "Built an end-to-end automation pipeline in Python and C# (Selenium) to authenticate against third-party systems, extract data via REST APIs and browser automation, and parse and load structured report data into SQL Server, including SQL view design and validation testing",
        "Gathered technical requirements through client-facing meetings across multiple engagements and produced technical and process documentation"
      ],
      technologies: "C#, .NET, Python, Selenium, SQL Server/SSMS, REST APIs, Microsoft Fabric, Power BI, Azure Logic Apps, Azure DevOps, Git, Power Platform, SharePoint"
    }
  ],

  // TECHNICAL PROJECTS — order matters, see PROJECTS_PAGE_SPLIT above
  projects: [
    {
      title: "Indigenous Business Directory",
      subtitle: "UBC Finance",
      dateRange: "Jan–Aug 2024",
      bullets: [
        "Development, optimization, and maintenance of Excel business directory",
        "Migrated Excel directory to SQL, improving scalability and data security",
        "Automated supplier data collection with Qualtrics surveys, reducing manual entry"
      ],
      technologies: "SQL, Excel, Qualtrics"
    },
    {
      title: "SympFlaura: Symptoms & Flareup Tracker",
      subtitle: "Machine Learning",
      dateRange: "May 2025–Present",
      bullets: [
        "Developed ML model with scikit-learn to predict chronic illness flareups from user symptom inputs",
        "Deployed as a secure Streamlit app with authentication, improving accessibility and persistence"
      ],
      technologies: "Python, Streamlit Authenticator, scikit-learn"
    },
    {
      title: "Portfolio Website",
      subtitle: "Web Development",
      dateRange: "Jun 2024–Present",
      bullets: [
        "Developed a personal portfolio website to showcase projects and skills",
        "Optimized interface for usability and aesthetics, showcasing technical work effectively"
      ],
      technologies: "HTML, CSS, JavaScript, VS Code"
    },
    {
      title: "Pool Chemistry Logbook",
      subtitle: "Software Construction",
      dateRange: "Dec 2023",
      bullets: [
        "Developed a Java tool to digitally track pool chemistry with exception alerts and data persistence",
        "Designed an intuitive UI to simplify monitoring and historical review of chemical levels"
      ],
      technologies: "Java, JUnit, JSON, IntelliJ IDEA"
    },
    {
      title: "Pool Chemistry Diagnostic Tool",
      subtitle: "Data Analysis",
      dateRange: "Jun 2023",
      bullets: [
        "Created Python functions to evaluate chlorine levels and recommend dosage adjustments",
        "Proposed adoption to replace manual logging, reducing human error in pool maintenance"
      ],
      technologies: "Python, Jupyter, GitHub"
    },
    {
      title: "Vehicle Theft Rates Analysis",
      subtitle: "Statistical Inference",
      dateRange: "Apr 2023",
      bullets: [
        "Performed hypothesis testing and bootstrap confidence intervals on theft data in R",
        "Summarized results in a final report highlighting significant theft trends"
      ],
      technologies: "R, Jupyter, GitHub"
    },
    // --- page break: everything below here renders into page 2 ---
    {
      title: "Heart Disease Symptom Analysis",
      subtitle: "Data Science",
      dateRange: "Dec 2022",
      bullets: [
        "Built regression model linking symptoms with age, validating results with statistical tests",
        "Led collaborative workflow with GitHub, streamlining team contributions"
      ],
      technologies: "R, Jupyter, GitHub"
    },
    {
      title: "Resonant Frequency vs. Temperature Analysis",
      subtitle: "Data Science, Physics",
      dateRange: "Jan–Mar 2022",
      bullets: [
        "Analyzed trumpet frequency data with Excel and SpectrumLab to assess the impact of heat",
        "Identified statistically significant results, contributing to physics coursework research"
      ],
      technologies: "Excel, SpectrumLab"
    }
  ],

  // WORK EXPERIENCE (resume's curated version — distinct from the
  // portfolio site's experience-data.js, which has different dates/bullets
  // for the same role)
  workExperience: [
    {
      title: "Swim Instructor/Lifeguard",
      subtitle: "North Vancouver Recreation & Culture",
      dateRange: "Sep 2019–Jan 2024",
      bullets: [
        "Collected and analyzed pool chemistry data, ensuring compliance with safety standards",
        "Balanced pool chemical levels in coordination with coworkers to maintain safe swim conditions",
        "Tracked swim skills and scheduled lessons using Excel and PerfectMIND software"
      ],
      technologies: "Excel, PerfectMIND"
    }
  ],

  // VOLUNTEER EXPERIENCE (resume's curated version — distinct list from
  // the portfolio site's, which also includes Science One Mentor and
  // Non-Commissioned Officer)
  volunteerExperience: [
    {
      title: "Science Conference Moderator & Participant",
      subtitle: "UBC",
      dateRange: "Mar 2022",
      bullets: ["Moderated sessions and presented findings at UBC’s science conference"]
    },
    {
      title: "Flute and Ensemble Lessons",
      subtitle: "Community & Private",
      dateRange: "Sep 2016–Present",
      bullets: ["Tutored flute students, led ensemble clinics, and conducted junior bands"]
    },
    {
      title: "Junior Summer Camp Counselor",
      subtitle: "BC SPCA",
      dateRange: "Aug 2016–Aug 2017",
      bullets: ["Educated children on animal welfare at BC SPCA summer camp"]
    }
  ],

  education: [
    {
      degree: 'B.Sc. Combined Major in Computer Science and Statistics, 4<sup>th</sup> Year',
      dateRange: "Expected Graduation May 2027",
      institution: "University of British Columbia, Vancouver, BC"
    }
  ],

  certifications: [
    { name: "Standard First Aid & CPR/AED C", date: "Jun 2025" },
    { name: "Workplace Hazardous Materials Information System Training", date: "Feb 2024" },
    { name: "National Lifeguard Pool Option", date: "Jul 2023" },
    { name: "WHMIS for Workers", date: "May 2023" },
    { name: "WorkSafe BC Workplace Safety", date: "Feb 2019" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESUME_DATA, PROJECTS_PAGE_SPLIT };
}