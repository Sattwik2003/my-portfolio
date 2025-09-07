import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize scroll animations
const initScrollAnimations = () => {
  const animateElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };

  // Run once after initial load
  setTimeout(animateElements, 200);
  
  // Add scroll event listener
  window.addEventListener('scroll', animateElements);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Wait for content to load before initializing animations
window.addEventListener('load', initScrollAnimations);
