// info-data.js
// Single source of truth for ALL website & resume content.
// The 'showOnWebsite' flag controls visibility on index.html vs resume.html.

const INFO_DATA = {
  header: {
    name: "Kiersten Lyde-Stad",
    tagline: 'Combined Major in Computer Science and Statistics, 4<sup>th</sup> Year',
    email: "klyde-stad@outlook.com",
    phone: "(604) 603-4429",
    github: "https://github.com/klydestad",
    website: "https://www.kierstenly.dev/",
    linkedin: "https://www.linkedin.com/in/kierstenly/"
  },

  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL", "Java", "C++", "C", "C#", "TypeScript", "LaTeX"],
      showOnWebsite: true
    },
    {
      category: "Data Science & ML",
      skills: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "Jupyter", "MATLAB", "Power BI", "Fabric"],
      showOnWebsite: true
    },
    {
      category: "Web Development",
      skills: ["JavaScript", "Node.js", "HTML", "CSS", ".NET", "Streamlit"],
      showOnWebsite: true
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Azure DevOps", "SQL Server/SSMS", "Power Platform", "SharePoint", "Logic Apps", "Excel", "Cloudflare", "Workday"],
      showOnWebsite: true
    },
    {
      category: "Testing & Development",
      skills: ["JUnit", "JSON", "Mocha", "Chai", "Selenium", "REST APIs"],
      showOnWebsite: true
    },
    {
      category: "Environments",
      skills: ["Visual Studio", "VS Code", "IntelliJ IDEA", "Overleaf"],
      showOnWebsite: true
    }
  ],

  work: [
            {
            title: "Software Developer Part-time Contractor",
            organization: "Terra Dygital Solutions Inc.",
            dateRange: "Sep 2026–Present",
            bullets: [
                "Built data pipelines in Microsoft Fabric and extended C#/.NET automation tool for API integration and data validation",
                "Gathered client requirements and maintained technical documentation"
            ],
            showOnWebsite: true
            },
            {
            title: "Developer Co-op",
            organization: "Terra Dygital Solutions Inc.",
            dateRange: "Jan–Aug 2026",
            bullets: [
                "Engineered data pipelines in Microsoft Fabric with SQL Server, Power BI dashboards, and Azure Logic Apps across three clients",
                "Developed Power Query transformations for reporting templates and data-driven applications with backend integration",
                "Extended C#/.NET application architecture and built Python/C# automation pipeline (Selenium) for third-party data extraction and SQL Server loading",
                "Gathered requirements through client meetings and produced technical documentation"
            ],
            showOnWebsite: true
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
      ],
      showOnWebsite: true
    },
    {
      title: "Swim Instructor/Lifeguard",
      organization: "North Vancouver Recreation & Culture",
      dateRange: "Sep 2019 – Jan 2024",
      bullets: [
        "Collected and analyze pool chemistry data, communicating with coworkers to adjust pool chemistry",
        "Utilized Excel and PerfectMIND software for swim skills tracking and lessons scheduling"
      ],
      showOnWebsite: true
    }
  ],

  volunteer: [
    {
      title: "Science One Mentor",
      organization: "UBC",
      dateRange: "Sep 2022 – April 2023",
      bullets: [
        "Providing guidance to first-year students in UBC's accelerated Science One program"
      ],
      showOnWebsite: true
    },
    {
      title: "Non-Commissioned Officer",
      organization: "St. John Ambulance",
      dateRange: "Sep 2016 – 2022",
      bullets: [
        "Teaching and evaluating emergency first aid skills to children ages 5-15"
      ],
      showOnWebsite: true
    },
    {
      title: "Science Conference Moderator & Participant",
      organization: "UBC Science One",
      dateRange: "Mar 2022",
      bullets: [
        "Presented research findings and facilitated discussions in two-day scientific conference"
      ],
      showOnWebsite: true
    },
    {
      title: "Flute and Ensemble Lessons",
      organization: "Community & Private",
      dateRange: "Sep 2016 – Present",
      bullets: [
        "Tutoring, leading ensemble clinics, and conducting junior concert bands"
      ],
      showOnWebsite: true
    }
  ],

  education: [
    {
      degree: 'B.Sc. Combined Major in Computer Science and Statistics, 4th Year',
      dateRange: "Expected Graduation May 2027",
      institution: "University of British Columbia, Vancouver, BC",
      showOnWebsite: true
    }
  ],

  certifications: [
    {
      name: "Standard First Aid & CPR/AED C",
      date: "Jun 2025",
      showOnWebsite: false
    },
    {
      name: "Workplace Hazardous Materials Information System Training",
      date: "Feb 2024",
      showOnWebsite: false
    },
    {
      name: "National Lifeguard Pool Option",
      date: "Jul 2023",
      showOnWebsite: false
    },
    {
      name: "WHMIS for Workers",
      date: "May 2023",
      showOnWebsite: false
    },
    {
      name: "WorkSafe BC Workplace Safety",
      date: "Feb 2019",
      showOnWebsite: false
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = INFO_DATA;
}