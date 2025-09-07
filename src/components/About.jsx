
export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="inline-flex items-center mb-2 text-xs font-mono text-cyan-400">
              <span className="opacity-70">{'<'}</span>
              <span className="mx-1">section</span>
              <span className="text-indigo-400">id</span>
              <span className="opacity-70">=</span>
              <span className="text-emerald-400">"about"</span>
              <span className="opacity-70">{'>'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                About Me
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
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-mono font-semibold text-white">
                <span className="text-cyan-400">.</span>education<span className="text-cyan-400">()</span>
              </h3>
            </div>
            <div className="pl-14">
              <div className="font-mono text-xs text-gray-500 mb-2">// Current education status</div>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing B.Tech in Computer Science and Engineering at Techno India University, 
                West Bengal <span className="text-cyan-400 font-mono">(Expected Graduation: 2026)</span>.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-mono font-semibold text-white">
                <span className="text-cyan-400">.</span>experience<span className="text-cyan-400">()</span>
              </h3>
            </div>
            <div className="pl-14">
              <div className="font-mono text-xs text-gray-500 mb-2">// Professional experience</div>
              <p className="text-gray-300 leading-relaxed">
                Freelancing projects and internships at <span className="text-cyan-400">Careers360</span> and <span className="text-cyan-400">DSS Nexus</span>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-mono font-semibold text-white inline-flex items-center">
              <span className="text-cyan-400">const</span>
              <span className="mx-2">skills</span>
              <span className="text-gray-500">=</span>
              <span className="text-cyan-400 ml-2">[</span>
              <span className="text-gray-300">...</span>
              <span className="text-cyan-400">]</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-pink-500' },
              { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-indigo-500' },
              { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
              { name: 'PHP', icon: '🐘', color: 'from-indigo-500 to-purple-500' },
              { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-4 text-center
                          hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`text-4xl mb-2 w-16 h-16 mx-auto rounded-lg bg-gradient-to-br ${skill.color} 
                                flex items-center justify-center animate-float`}
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  {skill.icon}
                </div>
                <p className="text-white mt-3 font-mono">
                  <span className="text-cyan-400">.</span>{skill.name}<span className="text-cyan-400">()</span>
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="text-center font-mono text-xs text-gray-500">
              // More skills coming soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}