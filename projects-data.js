// projects-data.js
// Single source of truth for all projects across resume & website.
// The 'showOnWebsite' flag controls whether each project appears on index.html.

const PROJECTS_DATA = {
  projects: [
    {
      title: "Indigenous Business Directory",
      subtitle: "UBC Finance",
      dateRange: "Jan–Aug 2024",
      image: {
        src: "./assets/directory-project.png",
        alt: "Indigenous Business Directory"
      },
      bullets: [
        "Development, optimization, and maintenance of Excel business directory",
        "Migrated Excel directory to SQL, improving scalability and data security",
        "Automated supplier data collection with Qualtrics surveys, reducing manual entry"
      ],
      technologies: "SQL, Excel, Qualtrics",
      showOnWebsite: true,
      buttons: [
        {
          name: "Directory (UBC)",
          link: "https://finance.ubc.ca/procure-pay/indigenous-business-directory"
        },
        {
          name: "Live Demo (External)",
          link: "https://learning.media.ubc.ca/media/UBC+Indigenous+Business+Directory+-+External+Audience/0_olphgujo"
        }
      ]
    },
    {
      title: "SympFlaura: Symptoms & Flareup Tracker",
      subtitle: "Machine Learning",
      dateRange: "May 2025–Present",
      image: {
        src: "./assets/SympFlaura.png",
        alt: "SympFlaura: Symptom & Flareup Tracker"
      },
      bullets: [
        "Developed ML model with scikit-learn to predict chronic illness flareups from user symptom inputs",
        "Deployed as a secure Streamlit app with authentication, improving accessibility and persistence"
      ],
      technologies: "Python, Streamlit Authenticator, scikit-learn",
      showOnWebsite: true,
      buttons: [
        {
          name: "Streamlit",
          link: "https://sympflaura.streamlit.app/"
        },
        {
          name: "GitHub",
          link: "https://github.com/klydestad/SympFlaura.git"
        }
      ]
    },
    {
      title: "Portfolio Website",
      subtitle: "Web Development",
      dateRange: "Jun 2024–Present",
      image: {
        src: "./assets/kierstenly-project.png",
        alt: "Portfolio Website"
      },
      bullets: [
        "Developed a personal portfolio website to showcase projects and skills",
        "Optimized interface for usability and aesthetics, showcasing technical work effectively"
      ],
      technologies: "HTML, CSS, JavaScript, VS Code",
      showOnWebsite: true,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/klydestad/kierstenly-project.git"
        }
      ]
    },
    {
      title: "Pool Chemistry Logbook",
      subtitle: "Software Construction",
      dateRange: "Dec 2023",
      image: {
        src: "./assets/logbook-project.png",
        alt: "Pool Chemistry Logbook"
      },
      bullets: [
        "Developed a Java tool to digitally track pool chemistry with exception alerts and data persistence",
        "Designed an intuitive UI to simplify monitoring and historical review of chemical levels"
      ],
      technologies: "Java, JUnit, JSON, IntelliJ IDEA",
      showOnWebsite: true,
      buttons: [
        {
          name: "GitHub (Video)",
          link: "https://github.com/klydestad/pool-chem-logbook.git"
        }
      ]
    },
    {
      title: "Pool Chemistry Diagnostic Tool",
      subtitle: "Data Analysis",
      dateRange: "Jun 2023",
      image: {
        src: "./assets/diagnostic-project.png",
        alt: "Pool Chemistry Diagnostic Tool"
      },
      bullets: [
        "Created Python functions to evaluate chlorine levels and recommend dosage adjustments",
        "Proposed adoption to replace manual logging, reducing human error in pool maintenance"
      ],
      technologies: "Python, Jupyter, GitHub",
      showOnWebsite: true,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/klydestad/pool-chem.git"
        }
      ]
    },
    {
      title: "Vehicle Theft Rates Analysis",
      subtitle: "Statistical Inference",
      dateRange: "Apr 2023",
      image: {
        src: "./assets/vehicle-project.png",
        alt: "Vehicle Theft Rates Analysis"
      },
      bullets: [
        "Performed hypothesis testing and bootstrap confidence intervals on theft data in R",
        "Summarized results in a final report highlighting significant theft trends"
      ],
      technologies: "R, Jupyter, GitHub",
      showOnWebsite: true,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/klydestad/vehicle-theft-rates.git"
        }
      ]
    },
    {
      title: "Heart Disease Symptom Analysis",
      subtitle: "Data Science",
      dateRange: "Dec 2022",
      image: {
        src: "./assets/heart-project.png",
        alt: "Heart Disease Symptom Analysis"
      },
      bullets: [
        "Built regression model linking symptoms with age, validating results with statistical tests",
        "Led collaborative workflow with GitHub, streamlining team contributions"
      ],
      technologies: "R, Jupyter, GitHub",
      showOnWebsite: true,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/klydestad/heart-disease-vs-age.git"
        }
      ]
    },
    {
      title: "Resonant Frequency vs. Temperature Analysis",
      subtitle: "Data Science, Physics",
      dateRange: "Jan–Mar 2022",
      image: {
        src: "./assets/frequency-project.png",
        alt: "Resonant Frequency vs. Temperature Analysis"
      },
      bullets: [
        "Analyzed trumpet frequency data with Excel and SpectrumLab to assess the impact of heat",
        "Identified statistically significant results, contributing to physics coursework research"
      ],
      technologies: "Excel, SpectrumLab",
      showOnWebsite: true,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/klydestad/frequency-vs-temp.git"
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS_DATA;
}