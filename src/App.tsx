import { About } from "./components/About";
import { Background } from "./components/Background";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import { Games } from "./components/Games";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-shiftlock-primary/30 selection:text-white">
      <Background />
      
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Games />
        <About />
        <Community />
      </main>

      <Footer />
    </div>
  );
}

