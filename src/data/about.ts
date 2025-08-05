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
      "I’m a UI/UX Developer with over 4 years of professional experience designing and developing responsive, accessible, and high-performance web applications. I specialize in HTML5, CSS3, JavaScript (ES6+), ReactJS, AngularJS, TypeScript, Redux, and REST API integrations, delivering intuitive, user-focused solutions for sectors including banking, healthcare, education, and IT.",
      "My expertise includes modernizing legacy codebases, ensuring WCAG 2.1 compliance, and optimizing performance for cross-browser, mobile-first experiences. I excel in Agile-Scrum environments, collaborating with designers, backend engineers, and stakeholders to transform complex requirements into pixel-perfect, scalable UIs. Passionate about usability, I focus on component reusability, secure workflows, and performance optimization to create impactful digital products."
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
      "4+ years in UI/UX development across banking, healthcare, education, and IT domains.",
      "Proficient in HTML5, CSS3, JavaScript (ES6+), ReactJS, AngularJS, TypeScript, Redux, and RESTful APIs.",
      "Delivered WCAG 2.1-compliant and HIPAA-aligned solutions for enterprise and financial platforms.",
      "Migrated legacy AngularJS codebases to modern ReactJS + TypeScript stacks, reducing tech debt.",
      "Built component-based architectures ensuring reusability, maintainability, and scalability.",
      "Integrated multiple REST APIs for real-time dashboards, claims processing, and secure banking transactions.",
      "Applied Redux for predictable state management in form-heavy and data-driven applications.",
      "Skilled in Figma and Adobe XD for translating wireframes into pixel-perfect UIs.",
      "Strong Agile-Scrum experience with JIRA for sprint planning, backlog management, and bug tracking.",
      "Delivered projects for organizations like Cummins, University of Illinois Springfield, and Wipro."
    ],
    // Academic and learning achievements
    academic: [
      "Masters degree in Managament and Information Systems",
      "Bachelor's degree in Electronics and Communication Engineering",
      "Completed various online certifications in web development and cloud technologies",
      "Regular participant in coding challenges and hackathons",
      "Active contributor to open-source projects"
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
      name: "JIRA",
      icon: "https://devicon-website.vercel.app/api/jira/original.svg"
    },
    {
      name: "Figma",
      icon: "https://devicon-website.vercel.app/api/figma/original.svg"
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    },
    {
      name: "AngularJS",
      icon: "https://devicon-website.vercel.app/api/angularjs/original.svg"
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
    },
    {
      name: "jenkins",
      icon: "https://devicon-website.vercel.app/api/jenkins/line.svg"
    },
    {
      name: "Webpack",
      icon: "https://devicon-website.vercel.app/api/webpack/original.svg"
    }
  ]
}; 
