import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import BackgroundElements from './components/BackgroundElements';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PersonalBrandingSection from './components/PersonalBrandingSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Add smooth scroll behavior to root element once app is loaded
    document.documentElement.style.scrollBehavior = 'smooth';
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative font-sans text-gray-900 dark:text-white selection:bg-pink-300 selection:text-white transition-colors duration-300">
        <CustomCursor />
        <BackgroundElements />
        
        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <div className="flex flex-col relative animate-[fadeInUp_0.8s_ease-out_forwards]">
            <Navbar />
            
            <main className="flex-grow space-y-12">
              <HeroSection />
              <AboutSection />
              <PersonalBrandingSection />
              <SkillsSection />
              <EducationSection />
              <ExperienceSection />
              <AchievementsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            
            <Footer />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

