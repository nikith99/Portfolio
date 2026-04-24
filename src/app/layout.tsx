import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sri Nikith Poddaturi — DevOps & Cloud Infrastructure Engineer',
  description:
    'DevOps & Cloud Infrastructure Engineer with 4+ years of experience. Expert in AWS, Terraform, Docker, Kubernetes, Jenkins, and multi-cloud environments.',
  keywords: [
    'DevOps Engineer', 'Cloud Infrastructure', 'AWS', 'Terraform',
    'Kubernetes', 'Docker', 'Jenkins', 'Sri Nikith Poddaturi',
  ],
  authors: [{ name: 'Sri Nikith Poddaturi' }],
  openGraph: {
    title: 'Sri Nikith Poddaturi — DevOps & Cloud Infrastructure Engineer',
    description: 'Building secure, scalable, and production-ready cloud infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} font-sans overflow-x-hidden bg-black`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
