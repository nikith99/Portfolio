import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import { ClientWrapper } from "@/components/ClientWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-background">
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      <Navbar />
      <main>
        <ClientWrapper>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </ClientWrapper>
      </main>
      <Footer />
    </div>
  );
} 