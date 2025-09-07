import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center z-10 px-4 pt-20">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
          <div className="relative w-20 h-20 mb-8">
            <div className="absolute inset-0 border-4 border-t-transparent border-cyan-500 rounded-full animate-spin"></div>
            <div className="absolute inset-3 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            <div className="absolute inset-6 border-2 border-t-transparent border-emerald-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          </div>
          <div className="text-cyan-400 font-mono text-lg tracking-wide relative">
            <span className="inline-block animate-pulse">Loading</span>
            <span className="inline-block ml-1 animate-pulse" style={{ animationDelay: "200ms" }}>.</span>
            <span className="inline-block ml-1 animate-pulse" style={{ animationDelay: "400ms" }}>.</span>
            <span className="inline-block ml-1 animate-pulse" style={{ animationDelay: "600ms" }}>.</span>
          </div>
          <div className="mt-4 text-gray-500 text-sm font-mono max-w-xs text-center">
            <span className="inline-block">// Initializing portfolio components</span>
          </div>
        </div>
      )}
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 text-left">
            <div className="inline-flex items-center mb-4 text-xs font-mono text-cyan-400 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="mr-2 opacity-70">const</span>
              <span className="text-indigo-400">developer</span>
              <span className="opacity-70 mx-2">=</span>
              <span>{"{"}</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
              <div className="flex items-center">
                <span className="text-cyan-400 mr-4">&lt;</span>
                <span className="block text-white animate-fade-in-down">
                  Hi, I'm
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent relative">
                  Sattwik Panja
                  <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 transform scale-x-0 origin-left animate-fade-in" style={{ animation: "fade-in 0.5s 0.8s forwards, scale-x-0-to-100 1s 0.8s forwards" }}></div>
                </span>
                <span className="text-cyan-400 ml-2">/&gt;</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 flex items-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <span className="text-cyan-400 opacity-70 mr-3">//</span>
              <span className="code-typing code-cursor">Passionate Creator | Web Developer | Storyteller</span>
            </p>
            
            <div className="text-gray-400 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.7s" }}>
              <div className="p-4 bg-white/5 border border-white/10 backdrop-filter backdrop-blur-sm rounded-lg font-mono text-sm relative">
                <div className="absolute -top-3 left-4 px-2 bg-gray-900 text-xs text-indigo-400">bio.js</div>
                <span className="text-indigo-400">function</span>
                <span className="text-white"> aboutMe</span>
                <span className="text-gray-400">() {'{'}
                  <div className="pl-5 mt-2">
                    <span className="text-indigo-400">return</span>
                    <span className="text-gray-300"> "I'm a passionate creator with a strong interest in technology, design, and storytelling. I enjoy blending creativity with technical skills to build impactful projects and meaningful digital experiences."</span>
                  </div>
                  {'}'}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in mb-4" style={{ animationDelay: "0.9s" }}>
              <a 
                href="#projects" 
                className="group px-6 py-3 rounded-md bg-white/5 border border-white/10 backdrop-filter backdrop-blur-sm flex items-center space-x-2 font-mono text-sm hover:bg-gradient-to-r hover:from-indigo-500/20 hover:via-cyan-500/20 hover:to-emerald-500/20 hover:border-cyan-500/50 transition-all"
              >
                <span className="text-cyan-500 group-hover:scale-110 transition-transform">{'<'}</span>
                <span>View My Work</span>
                <span className="text-cyan-500 group-hover:scale-110 transition-transform">{'/>'}</span>
              </a>
              
              <a 
                href="#contact" 
                className="group px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-emerald-500/10 border border-white/5 text-white font-mono text-sm hover:border-cyan-500/50 transition-all flex items-center space-x-2"
              >
                <span className="text-cyan-500 group-hover:scale-110 transition-transform">{'{'}</span>
                <span>Contact Me</span>
                <span className="text-cyan-500 group-hover:scale-110 transition-transform">{'}'}</span>
              </a>
            </div>
            
            <div className="font-mono text-xs text-cyan-400/50 animate-fade-in" style={{ animationDelay: "1s" }}>
              <span>{"}"}</span>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative">
              {/* Code Editor Terminal */}
              <div className="rounded-xl overflow-hidden border border-white/20 bg-gray-900/80 backdrop-blur-sm shadow-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {/* Terminal Header */}
                <div className="h-8 bg-gray-800/90 border-b border-white/10 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-gray-400 text-xs font-mono mx-auto">
                    portfolio • developer.js
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 bg-[#1E1E1E]/90 text-sm font-mono">
                  <div className="mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <span className="text-purple-400">const</span> 
                    <span className="text-blue-400"> developer</span> 
                    <span className="text-white"> = </span>
                    <span className="text-white">{'{'}</span>
                  </div>
                  
                  <div className="pl-6 mb-2 animate-typewriter overflow-hidden whitespace-nowrap" style={{ 
                    animation: "typewriter 0.5s steps(40, end) forwards", 
                    animationDelay: "0.4s",
                    opacity: 0
                  }}>
                    <span className="text-green-400">name</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"Sattwik Panja"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="pl-6 mb-2 animate-typewriter overflow-hidden whitespace-nowrap" style={{ 
                    animation: "typewriter 0.5s steps(40, end) forwards", 
                    animationDelay: "0.7s",
                    opacity: 0
                  }}>
                    <span className="text-green-400">role</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"Web Developer"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="pl-6 mb-2 animate-typewriter overflow-hidden whitespace-nowrap" style={{ 
                    animation: "typewriter 0.5s steps(40, end) forwards", 
                    animationDelay: "1.0s",
                    opacity: 0
                  }}>
                    <span className="text-green-400">location</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"West Bengal, India"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="pl-6 mb-2 animate-typewriter overflow-hidden whitespace-nowrap" style={{ 
                    animation: "typewriter 0.8s steps(40, end) forwards", 
                    animationDelay: "1.3s",
                    opacity: 0
                  }}>
                    <span className="text-green-400">contact</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"sattwikpanja.2003.bittu@gmail.com"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="pl-6 mb-6 animate-fade-in-up" style={{ animationDelay: "1.8s", opacity: 0 }}>
                    <span className="text-green-400">avatar</span>
                    <span className="text-white">: </span>
                    
                    {/* Avatar Circle - Removed animate-pulse class to stop blinking */}
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 p-1 mt-3">
                      <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                        {/* Updated image path */}
                        <img 
                          src="/assets/profile-placeholder.jpg" 
                          alt="Sattwik Panja" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className="text-white animate-fade-in" style={{ animationDelay: "2.2s", opacity: 0 }}>{'}'}</div>
                </div>
                
                {/* Terminal Footer */}
                <div className="h-8 bg-gray-800/90 border-t border-white/5 flex items-center px-4">
                  <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  <span className="text-xs text-gray-400 font-mono">sattwik@portfolio:~$</span>
                  <div className="ml-2 flex items-center">
                    <span className="h-4 w-0.5 bg-cyan-400 animate-cursor-blink"></span>
                    <span className="text-xs text-gray-400 font-mono animate-typewriter ml-1" style={{ 
                      animation: "typewriter 2s steps(20, end) 2.5s forwards", 
                      opacity: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "0"
                    }}>
                      npm run start
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 flex justify-center">
          <a href="#about" className="animate-bounce text-cyan-400/50 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}