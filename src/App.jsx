import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import ReadingProgressBar from './components/ReadingProgressBar'
import ScrollToTopButton from './components/ScrollToTopButton'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark');
  
  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    // Set theme from local storage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <>
      {/* These components should be at the top level to ensure proper rendering */}
      <ReadingProgressBar />
      <ScrollToTopButton />
      
      <div className="min-h-screen w-full text-white relative">
        {/* Animated background */}
        <Background theme={theme} />

        {/* Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Main content */}
        <div className="relative z-10 w-full">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
