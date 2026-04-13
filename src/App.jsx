import { lazy, Suspense } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Footer } from "./layout/Footer";
import { SEOMeta } from "@/components/SEOMeta";

// Lazy load sections for better performance
const About = lazy(() => import("@/sections/About").then(module => ({ default: module.About })));
const Projects = lazy(() => import("@/sections/Projects").then(module => ({ default: module.Projects })));
const Experience = lazy(() => import("@/sections/Experience").then(module => ({ default: module.Experience })));
const Testimonials = lazy(() => import("@/sections/Testimonials").then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import("@/sections/Contact").then(module => ({ default: module.Contact })));

// Loading fallback component
const SectionFallback = () => (
  <div className="py-32 text-center text-muted-foreground">
    <p>Loading section...</p>
  </div>
);

function App() {
  return (
    <>
      <SEOMeta page="DEFAULT" />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
