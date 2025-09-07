import { useState, useEffect, useRef } from 'react';

export default function Navbar({ theme = 'dark', toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);

  // Handle scroll for nav highlighting and background
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    // Track mouse movement for glow effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update CSS variable for navbar height to position progress bar
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    // Ensure height is calculated after layout
    setTimeout(updateNavbarHeight, 0);
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, [isScrolled, isMenuOpen]);

  const isDark = theme === 'dark';

  return (
    <nav 
      ref={navbarRef}
      className="fixed top-0 w-full z-[100] transition-all duration-300 h-16 flex items-center"
      style={{
        background: isScrolled ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.3)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Glow effect following mouse */}
        <div 
          className="absolute bg-cyan-500/10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{ 
            left: `${mousePosition.x - 64}px`,
            top: `${mousePosition.y - 64}px`,
            transform: 'translateX(-50%) translateY(-50%)',
            opacity: isScrolled ? '0.1' : '0',
          }}
        ></div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center group">
            <div className="text-xs font-mono text-gray-500 mr-2 opacity-70">{'<'}</div>
            <div className="flex-shrink-0 font-mono font-bold text-2xl bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent relative">
              Sattwik.Panja
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </div>
            <div className="text-xs font-mono text-gray-500 ml-2 opacity-70">{'/>'}</div>
          </div>
          
          <div className="flex items-center">
            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all relative overflow-hidden group"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <span className="sr-only">Toggle theme</span>
              <div className="relative">
                {/* Sun icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-all ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 absolute'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
                {/* Moon icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-all ${!isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90 absolute'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-emerald-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-white/5 focus:outline-none border border-transparent hover:border-white/10 transition-all"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                <div className="text-xs font-mono text-gray-500 opacity-70 mr-2">{'//'}</div>
                <div className="text-xs font-mono text-gray-500 opacity-70 mr-2">Navigation</div>
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`group text-sm font-mono px-3 py-1.5 transition-all duration-300 rounded-md relative overflow-hidden ${
                      activeSection === item 
                        ? 'text-green-400 bg-green-400/5 border border-green-400/20' 
                        : 'text-gray-300 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                  >
                    <span className="relative z-10">{
                      activeSection === item 
                        ? `<${item}/>`
                        : item
                    }</span>
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-green-400 to-cyan-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`transition-all duration-500 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 max-h-60 translate-y-0' 
            : 'opacity-0 max-h-0 -translate-y-4'
        } overflow-hidden md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/70 backdrop-blur-xl border-t border-white/10">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block px-4 py-2 rounded-md text-base font-mono relative group ${
                activeSection === item 
                  ? 'text-green-400 bg-green-400/5 border border-green-400/20' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <span className={`mr-2 text-xs ${activeSection === item ? 'text-green-400' : 'text-gray-500'}`}>
                  {activeSection === item ? '//' : '//'}
                </span>
                {activeSection === item 
                  ? `<${item.charAt(0).toUpperCase() + item.slice(1)}/>`
                  : item.charAt(0).toUpperCase() + item.slice(1)
                }
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-green-400 to-cyan-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        
        {/* Terminal-like footer */}
        <div className="px-4 py-2 font-mono text-xs text-gray-500 bg-black/90 border-t border-white/5 flex items-center">
          <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
          <span>sattwik@portfolio:~$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
      </div>
    </nav>
  );
}
