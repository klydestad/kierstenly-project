// Single source of truth for the Experience section (Work + Volunteer).
// Edit this file only — the site renders from this list, so a change here
// shows up everywhere the "experience" or "volunteer" groups are used.
//
// Order within each group is display order.
 
const EXPERIENCE_DATA = {
  work: [
{
      title: "Software Developer Part-time Contractor",
      organization: "Terra Dygital Solutions Inc.",
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
      organization: "Terra Dygital Solutions Inc.",
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
    },
    {
      title: "Indigenous Procurement Administrator Co-op",
      organization: "UBC Finance",
      dateRange: "Jan – Aug 2024",
      bullets: [
        "Optimized Excel business directory, migrated to SQL for security and scalability, and streamlined supplier information gathering process",
        "Led data collection and analysis for UBC's Canadian Supply Chain Act report, assessing supply chain risks of forced/child labor",
        "Conducted and analyzed Workday Report and Excel spend data to reach Indigenous spending goals, identify procurement opportunities, and track KPIs",
        "Development and documentation of standard operating procedures and business plans for various projects"
      ]
    },
    {
      title: "Swim Instructor/Lifeguard",
      organization: "North Vancouver Recreation & Culture",
      dateRange: "Sep 2019 – Present",
      bullets: [
        "Collect and analyze pool chemistry data, communicating with coworkers to adjust pool chemistry",
        "Utilize Excel and PerfectMIND software for swim skills tracking and lessons scheduling"
      ]
    }
  ],
 
  volunteer: [
    {
      title: "Science One Mentor",
      organization: "UBC",
      dateRange: "Sep 2022 – Present",
      bullets: [
        "Providing guidance to first-year students in UBC's accelerated Science One program"
      ]
    },
    {
      title: "Non-Commissioned Officer",
      organization: "St. John Ambulance",
      dateRange: "Sep 2016 – 2022",
      bullets: [
        "Teaching and evaluating emergency first aid skills to children ages 5-15"
      ]
    },
    {
      title: "Science Conference Moderator & Participant",
      organization: "UBC Science One",
      dateRange: "Mar 2022",
      bullets: [
        "Presented research findings and facilitated discussions in two-day scientific conference"
      ]
    },
    {
      title: "Flute and Ensemble Lessons",
      organization: "Community & Private",
      dateRange: "Sep 2016 – Present",
      bullets: [
        "Tutoring, leading ensemble clinics, and conducting junior concert bands"
      ]
    }
  ]
};
 
if (typeof module !== "undefined" && module.exports) {
  module.exports = EXPERIENCE_DATA;
}