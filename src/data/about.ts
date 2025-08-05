/**
 * ABOUT SECTION DATA
 * =================
 * This file contains all the information that appears in the About section of your portfolio.
 * It's structured as a JavaScript object with different sections for your introduction,
 * skills, and highlights.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Each section is clearly marked with comments
 * 2. You can modify the text content directly
 * 3. For skills, you can add or remove technologies
 * 
 * TIP: Keep a backup of this file before making major changes!
 */

// Export the data so it can be used in other files
export const aboutData = {
  // INTRODUCTION SECTION
  // -------------------
  // This section contains your personal introduction and collaboration message
  // You can modify the text to match your own experience and interests
  introduction: {
    // Add or remove paragraphs as needed
    paragraphs: [
      "I’m a seasoned UI/UX Developer with over 9 years of experience designing and developing responsive, accessible, and scalable web interfaces. With a solid background in frontend technologies like HTML5, CSS3, JavaScript, ReactJS, AngularJS, and TypeScript, I specialize in building user-centric applications for banking, healthcare, and telecom industries.",
      "My development approach blends technical precision with design thinking—ensuring every interface is not just visually polished but also WCAG-compliant, performance-optimized, and maintainable. I’ve led key UI transformations for enterprise platforms at Bank of America, Cummins, BCBS, and AT&T, integrating real-time data with secure REST APIs and collaborating across Agile teams.",
      "Driven by a passion for seamless user experiences and scalable architectures, I continuously evolve my skillset to align with modern web standards and accessibility guidelines. Whether modernizing legacy UIs or developing greenfield projects, I bring a balance of engineering rigor, design collaboration, and user-first thinking to every project I take on."
    ],
    // Your collaboration message - feel free to modify this text
    collaboration: "I'm always excited to collaborate on interesting projects and share knowledge with the developer community. Whether it's building new features, optimizing performance, or solving complex problems, I'm ready to contribute my skills and learn from others."
  },

  // HIGHLIGHTS SECTION
  // -----------------
  // This section shows your recent achievements and academic accomplishments
  // You can add or remove items from both arrays
  highlights: {
    // Recent professional achievements
    recent: [
      "Developed scalable and WCAG-compliant UI components using ReactJS, AngularJS, and TypeScript for enterprise banking, healthcare, and telecom platforms.",
      "Built responsive, cross-browser layouts with CSS Grid, Flexbox, and SASS, ensuring seamless UX across web and mobile interfaces.",
      "Integrated secure RESTful APIs using JavaScript, Axios, and Fetch for real-time financial, claims, and equipment data updates.",
      "Refactored legacy UI systems into modern, component-based architectures using ReactJS and TypeScript to boost maintainability and performance.",
      "Collaborated with cross-functional Agile teams using JIRA to deliver user-centric features on time, tracking sprints and resolving UI bugs.",
      "Ensured accessibility compliance (WCAG 2.1) by embedding semantic HTML, ARIA roles, and screen-reader-friendly design patterns.",
      "Developed dynamic, data-driven forms and dashboards for applications like loan portals, claims systems, and investment platforms.",
      "Tested and optimized frontend modules using Jest, Karma, and Chrome DevTools to reduce regressions and enhance UI responsiveness."
    ],
    // Academic and learning achievements
    academic: [
      "Bachelor's degree in Electronics and Communication Engineering",
      "Completed various online certifications in web development and cloud technologies",
      "Regular participant in coding challenges and hackathons",
      "Active contributor to open-source projects".
    ]
  },

  // SKILLS SECTION
  // -------------
  // This section lists all your technical skills with their icons
  // To add a new skill:
  // 1. Copy an existing skill object
  // 2. Change the name to your new skill
  // 3. Update the icon URL (see instructions below)
  // 
  // How to find skill icons:
  // 1. Visit https://devicon.dev/
  // 2. Search for your technology
  // 3. Click on the icon
  // 4. Copy the SVG URL
  // 5. Replace the icon URL in the skill object
  skills: [
    // Frontend Technologies
    {
      name: "HTML5",
      icon: "https://devicon-website.vercel.app/api/html5/original.svg"
    }
    {
      name: "React", // The name of the technology
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" // The icon URL
    },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
    },
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
    },
    {
      name: "Jest",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg"
    },
    {
      name: "Redux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
    }
  ]
}; 
