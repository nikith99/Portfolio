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
      "I am a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both front-end and back-end technologies, I specialize in creating scalable and efficient solutions that deliver exceptional user experiences.",
      "My approach combines technical expertise with a keen eye for detail, ensuring that every project I work on is not only functional but also maintainable and future-proof. I'm constantly learning and adapting to new technologies to stay at the forefront of web development."
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
      "Developed and maintained multiple full-stack applications using React, Node.js, and modern web technologies",
      "Implemented responsive designs and optimized front-end performance for better user experience",
      "Built RESTful APIs and integrated various third-party services",
      "Collaborated with cross-functional teams to deliver high-quality software solutions"
    ],
    // Academic and learning achievements
    academic: [
      "Bachelor's degree in Computer Science with focus on Software Engineering",
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