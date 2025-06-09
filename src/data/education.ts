/**
 * EDUCATION AND CERTIFICATIONS DATA
 * ===============================
 * This file contains your educational background and professional certifications.
 * It's structured to be easily maintainable and updatable.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Each section (education and certifications) is clearly marked
 * 2. You can add or remove entries by copying the existing format
 * 3. Keep the structure consistent when adding new entries
 * 4. Make sure dates are in a consistent format
 * 
 * BEST PRACTICES:
 * - Keep education entries in reverse chronological order
 * - List relevant achievements and coursework
 * - Include dates for all entries
 * - Keep descriptions concise but informative
 * 
 * TIP: Keep a backup of this file before making major changes!
 */

export const educationData = {
  // EDUCATION
  // --------
  // This section contains your educational background
  // Each education entry should include:
  // - type: Type of education (degree, diploma, certificate)
  // - degree: Name of the degree or qualification
  // - school: Name of the educational institution
  // - duration: Time period of study
  // - achievements: List of academic achievements, relevant coursework, or activities
  education: [
    {
      type: "degree",
      degree: "Bachelor's degree in Computer Science",
      school: "University of Technology",
      duration: "2016 - 2020",
      achievements: [
        "Graduated with honors",
        "Completed coursework in Web Development, Database Systems, and Software Engineering",
        "Participated in various coding competitions and hackathons"
      ]
    }
  ],

  // CERTIFICATIONS
  // -------------
  // This section contains your professional certifications
  // Each certification entry should include:
  // - type: Type of certification
  // - name: Name of the certification
  // - organization: Issuing organization
  // - issuedDate: When you received the certification
  // - description: Brief description of what the certification covers
  certifications: [
    {
      type: "certification",
      name: "Full Stack Web Development",
      organization: "Udemy",
      issuedDate: "2022",
      description: "Comprehensive course covering modern web development technologies and best practices"
    },
    {
      type: "certification",
      name: "AWS Certified Developer - Associate",
      organization: "Amazon Web Services",
      issuedDate: "2021",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS"
    },
    {
      type: "certification",
      name: "React Developer Certification",
      organization: "Meta",
      issuedDate: "2021",
      description: "Professional certification in React development and best practices"
    }
  ]
}; 