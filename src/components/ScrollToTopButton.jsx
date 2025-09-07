import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`transition-all duration-300 transform hover:scale-110 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(to right, #10b981, #06b6d4)',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        zIndex: '9999',
        cursor: 'pointer'
      }}
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ width: '20px', height: '20px' }}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}