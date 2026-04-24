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
  education: [
    {
      type: "degree",
      degree: "Master's Degree in Management Information Systems",
      school: "University of Illinois at Springfield",
      duration: "Jan 2024 – May 2025",
      achievements: [
        "Coursework in Cloud Computing, Database Systems, Information Security, and IT Project Management",
        "Applied DevOps and cloud infrastructure concepts in graduate-level projects",
        "Graduated with strong focus on enterprise systems and cloud architecture"
      ]
    },
    {
      type: "degree",
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      school: "University of Technology",
      achievements: [
        "Foundation in systems engineering, networking, and programming fundamentals",
        "Coursework in digital systems, operating systems, and computer networks"
      ]
    }
  ],

  certifications: [
    {
      type: "certification",
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      issuedDate: "2022",
      description: "Validates foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support"
    },
    {
      type: "certification",
      name: "AWS Certified Developer – Associate",
      organization: "Amazon Web Services",
      issuedDate: "2022",
      description: "Validates expertise in developing, deploying, and debugging cloud-based applications using AWS services"
    }
  ]
};
