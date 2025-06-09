# Portfolio Template

A modern, responsive portfolio template built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/GaneshVarma1/Design1.git
cd Design1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## 📝 Editing Your Data

All your personal information is stored in the `src/data` folder. Here's how to customize each file:

### 1. Hero Section (`src/data/hero.ts`)
Edit your main headline, subheadline, and call-to-action buttons.

### 2. About Section (`src/data/about.ts`)
Update your personal information, skills, and about me text.

### 3. Projects (`src/data/projects.ts`)
Add your projects with the following structure:
```typescript
{
  title: string;
  description: string;
  image: string; // Path to image in public/images
  tags: string[];
  link: string; // Project URL
  github: string; // GitHub repository URL
}
```

### 4. Experience (`src/data/experience.ts`)
Add your work experience:
```typescript
{
  company: string;
  position: string;
  duration: string;
  description: string[];
}
```

### 5. Education (`src/data/education.ts`)
Add your educational background:
```typescript
{
  institution: string;
  degree: string;
  duration: string;
  description: string;
}
```

### 6. Footer (`src/data/footer.ts`)
Update your social media links and contact information.

## 🚀 Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com) if you haven't already.

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy your project:
```bash
vercel
```

5. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: (your-project-name)
   - Directory: ./
   - Override settings: No

6. For production deployment:
```bash
vercel --prod
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_EMAIL_SERVICE=your_email_service
NEXT_PUBLIC_EMAIL_TEMPLATE=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

- Colors and theme: Edit `tailwind.config.js`
- Layout: Modify components in `src/components`
- Styling: Edit `src/app/globals.css`

## 📦 Dependencies

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- EmailJS

## 📄 License

MIT License - feel free to use this template for your personal portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
