import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/data/portfolio";

const Index = () => (
  <div className="min-h-screen bg-background">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:p-3">Skip to content</a>
    <Navbar />
    <main id="main">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Timeline />
      <Certifications />

      <Contact />
    </main>
    <footer className="border-t border-border/60 py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Cilso Carvalho — Cloud &amp; DevOps Engineer</span>
        <div className="flex gap-4">
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
