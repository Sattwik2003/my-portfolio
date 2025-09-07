export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="inline-flex items-center mb-2 text-xs font-mono text-cyan-400">
              <span className="opacity-70">{'<'}</span>
              <span className="mx-1">section</span>
              <span className="text-indigo-400">id</span>
              <span className="opacity-70">=</span>
              <span className="text-emerald-400">"contact"</span>
              <span className="opacity-70">{'>'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="inline-flex items-center mt-2 text-xs font-mono text-cyan-400">
              <span className="opacity-70">{'</'}</span>
              <span className="mx-1">section</span>
              <span className="opacity-70">{'>'}</span>
            </div>
          </div>
          <div className="mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-mono font-semibold mb-6 text-white">
              <span className="text-cyan-400">const</span> contactInfo <span className="text-cyan-400">=</span> {'{'}
            </h3>
            
            <div className="space-y-6 pl-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-cyan-400 font-mono mb-1">email<span className="text-gray-500">:</span></p>
                  <a href="mailto:sattwikpanja.2003.bittu@gmail.com" className="text-gray-200 hover:text-cyan-400 transition">
                    "sattwikpanja.2003.bittu@gmail.com"
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-cyan-400 font-mono mb-1">phone<span className="text-gray-500">:</span></p>
                  <span className="text-gray-200">"8479025946"</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-cyan-400 font-mono mb-1">location<span className="text-gray-500">:</span></p>
                  <span className="text-gray-200">"West Bengal, India"</span>
                </div>
              </div>
              
              <div className="pt-4 mt-6 border-t border-white/10">
                <p className="text-sm text-cyan-400 font-mono mb-3">socials<span className="text-gray-500">: [</span></p>
                <div className="flex space-x-4 pl-6">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-500 font-mono text-sm mt-2 pl-6">]</p>
              </div>
            </div>
            <p className="text-gray-500 font-mono text-sm mt-4">{'}'}</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="h-8 bg-gray-800/80 border-b border-white/10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-gray-400">
                contact-form.jsx - ~/portfolio/src/components
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-mono font-semibold mb-6 text-white">
                <span className="text-indigo-400">function</span> <span className="text-white">ContactForm</span><span className="text-gray-500">()</span> {'{'}
              </h3>
              
              <form className="space-y-5 pl-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 text-gray-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545v7.133a25.231 25.231 0 01-4.948.839.75.75 0 00.092 1.497 26.723 26.723 0 005.616-.954l.32-.076V16.5a.75.75 0 001.5 0v-2.566l.305.07a26.76 26.76 0 005.6.947.75.75 0 00.09-1.496 25.273 25.273 0 01-4.995-.84V5.545a31.537 31.537 0 017.86-.773.75.75 0 00.198-1.487 32.987 32.987 0 00-3.599-.278V2.75a.75.75 0 00-1.5 0v1.223a35.116 35.116 0 00-3.75 0V2.75z" />
                      </svg>
                    </div>
                    <label htmlFor="name" className="text-gray-300 text-sm font-mono">name<span className="text-cyan-400">:</span></label>
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent font-mono" 
                    placeholder="'Your name'"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 text-gray-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                    </div>
                    <label htmlFor="email" className="text-gray-300 text-sm font-mono">email<span className="text-cyan-400">:</span></label>
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent font-mono" 
                    placeholder="'your.email@example.com'"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 text-gray-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <label htmlFor="message" className="text-gray-300 text-sm font-mono">message<span className="text-cyan-400">:</span></label>
                  </div>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent font-mono" 
                    placeholder="'Your message here...'"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 text-white font-mono text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center"
                  >
                    <span className="mr-2">{'<'}</span>
                    Submit<span className="code-highlight px-1">Message</span>
                    <span className="ml-2">{'/>'}</span>
                  </button>
                </div>
              </form>
              <div className="font-mono text-xs text-gray-500 mt-6">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}