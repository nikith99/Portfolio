/**
 * HERO SECTION DATA
 * ================
 * This file contains all the information that appears in the Hero section of your portfolio.
 * The Hero section is the first thing visitors see when they land on your website.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Each property is clearly marked with comments
 * 2. You can modify the text content directly
 * 3. Make sure to keep the structure (object format) intact
 * 4. For links, make sure they are valid URLs or anchor tags
 * 
 * TIP: Keep a backup of this file before making major changes!
 */

// Export the data so it can be used in other files
export const heroData = {
  // The greeting message that appears at the top of the hero section
  // You can personalize this to match your style
  greeting: "Hi, This is Sri. Great to see you here!",

  // Your current work status
  // This can be used to show if you're available for work or not
  status: {
    text: "Available To Work", // The status message to display
    isAvailable: true // Set to false if you're not available for work
  },

  // The main title of your hero section
  // This appears before your name/role
  title: "Welcome to my professional life! I'm",

  // Your professional role or title
  // This is typically your current job title or primary role
  role: "Software Engineer",

  // A brief description about yourself
  // Keep this concise but engaging
  description: "I'm a problem-solver by day, code-slinger by night. Enjoy exploring my projects!🚀✨.",

  // Call-to-Action (CTA) buttons
  // These are the main buttons in your hero section
  cta: {
    // Primary CTA - usually the main action you want visitors to take
    primary: {
      text: "Check out my projects", // Button text
      link: "#projects" // Link to projects section (using # for same-page navigation)
    },
    // Secondary CTA - usually a supporting action
    secondary: {
      text: "Download Resume", // Button text
      link: "bit.ly/sriport" // Link to your resume (can be a URL or file path)
    }
  }
}; 