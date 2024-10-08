"use client";

import { ThemeProvider } from "next-themes";
import { Navbar } from "./navbar";
import { Home } from "./home";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Contact } from "./contact";

export function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
