import { ThemeProvider } from './context/ThemeContext';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { LanguagesHobbies } from './components/LanguagesHobbies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Stats } from './components/Stats';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-dark-950 dark:text-slate-100">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <CodingProfiles />
            <LanguagesHobbies />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
