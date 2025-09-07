import { useState, useEffect } from 'react';

export default function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    
    // Update on mount
    updateReadingProgress();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateReadingProgress);
    
    // Clean up
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, [readingProgress]); // Add dependency to ensure proper updates
  
  return (
    <div 
      className="fixed w-full h-[3px] bg-black/20 z-[99]"
      style={{ 
        top: 'var(--navbar-height, 0px)',
        marginTop: '0px'
      }}
    >
      <div 
        className="h-full bg-gradient-to-r from-green-500 to-green-400"
        style={{ 
          width: `${readingProgress}%`, 
          transition: 'width 0.2s ease-out',
          boxShadow: '0 0 8px rgba(34, 197, 94, 0.7)'
        }}
      />
    </div>
  );
}