/**
 * PROJECTS DATA
 * ============
 * This file contains all your project information.
 * It's structured to be easily maintainable and updatable.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Each project entry is clearly marked
 * 2. You can add or remove projects by copying the existing format
 * 3. Keep the structure consistent when adding new entries
 * 4. Make sure all links (demo, github) are valid
 * 
 * BEST PRACTICES:
 * - Keep projects in order of importance or recency
 * - Use clear, concise descriptions
 * - List relevant technologies used
 * - Include both demo and code links when available
 * - Use high-quality images/videos
 * 
 * TIP: Keep a backup of this file before making major changes!
 */

export const projectsData = {
  // PROJECTS LIST
  // ------------
  // Each project should include:
  // - title: Project name
  // - description: Brief project description
  // - technologies: Array of technologies used
  // - demoLink: Link to live demo (if available)
  // - githubLink: Link to source code (if available)
  // - image: Path to project screenshot/image
  // - video: Path to project video demo
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and TypeScript. Features include product catalog, shopping cart, user authentication, and secure payment processing. The platform offers a seamless shopping experience with responsive design and optimized performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "Vercel"],
      demoLink: "https://demo-ecommerce.vercel.app",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      video: "/videos/ecommerce-demo.mp4"
    },
    {
      title: "Task Management App",
      description: "A full-featured task management application that helps users organize their work and personal tasks. Includes features like task categorization, priority levels, due dates, and progress tracking. Built with React and Firebase for real-time updates.",
      technologies: ["React", "Firebase", "Material-UI", "Redux", "TypeScript"],
      demoLink: "https://task-manager-demo.vercel.app",
      githubLink: "https://github.com/yourusername/task-manager",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      video: "/videos/task-manager-demo.mp4"
    },
    {
      title: "AI Chat Assistant",
      description: "An AI-powered chat assistant that helps users with various tasks. The application uses natural language processing to understand user queries and provide relevant responses. Features include conversation history, multiple AI models, and customizable responses.",
      technologies: ["Python", "Streamlit", "OpenAI API", "LangChain", "FastAPI"],
      demoLink: "https://ai-chat-demo.streamlit.app",
      githubLink: "https://github.com/yourusername/ai-chat-assistant",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      video: "/videos/ai-chat-demo.mp4"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS. Features include dark mode, responsive design, smooth animations, and a blog section. The website showcases projects, skills, and experience in an elegant and professional manner.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX", "Vercel"],
      demoLink: "https://portfolio-demo.vercel.app",
      githubLink: "https://github.com/yourusername/portfolio",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      video: "/videos/portfolio-demo.mp4"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that provides real-time weather information and forecasts. Features include location-based weather data, 7-day forecast, weather maps, and customizable widgets. Built with React and integrated with a weather API.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Vercel"],
      demoLink: "https://weather-dashboard-demo.vercel.app",
      githubLink: "https://github.com/yourusername/weather-dashboard",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      video: "/videos/weather-demo.mp4"
    },
    {
      title: "Recipe Sharing Platform",
      description: "A social platform for sharing and discovering recipes. Users can create, share, and save recipes, follow other users, and interact through comments and likes. Features include recipe search, filtering, and a user-friendly interface.",
      technologies: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS", "Vercel"],
      demoLink: "https://recipe-platform-demo.vercel.app",
      githubLink: "https://github.com/yourusername/recipe-platform",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2064&auto=format&fit=crop",
      video: "/videos/recipe-platform-demo.mp4"
    }
  ]
}; 