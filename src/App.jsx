import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import './index.css'
import Footer from './components/Footer'
import About from './pages/About/About'
import { useEffect } from 'react'
import Skills from './skills/Skills'
import AchievementsSection from './pages/Achievements/Achievements'
import Organizations from './pages/Organizations/Organizations'
import ProjectsGallery from './pages/Projects/Projects'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <AchievementsSection />
      <Organizations />
      <ProjectsGallery />
      <Footer />
    </>
  )
}

export default App