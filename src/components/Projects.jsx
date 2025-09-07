export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="inline-flex items-center mb-2 text-xs font-mono text-cyan-400">
              <span className="opacity-70">{'<'}</span>
              <span className="mx-1">section</span>
              <span className="text-indigo-400">id</span>
              <span className="opacity-70">=</span>
              <span className="text-emerald-400">"projects"</span>
              <span className="opacity-70">{'>'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                My Projects
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              desc: "A full-featured online shopping platform with payment integration",
              tech: ["PHP", "MySQL", "JavaScript"],
              image: "ecommerce"
            },
            {
              title: "Portfolio Website",
              desc: "A responsive portfolio website built with React and Tailwind CSS",
              tech: ["React", "Tailwind", "Vite"],
              image: "portfolio"
            },
            {
              title: "Task Management App",
              desc: "A productivity app for managing daily tasks and projects",
              tech: ["JavaScript", "Firebase", "CSS"],
              image: "taskapp"
            },
            {
              title: "Weather Dashboard",
              desc: "Real-time weather information with interactive maps",
              tech: ["React", "API", "CSS"],
              image: "weather"
            },
            {
              title: "Blog Platform",
              desc: "Content management system for publishing articles",
              tech: ["PHP", "MySQL", "Bootstrap"],
              image: "blog"
            },
            {
              title: "Social Media Dashboard",
              desc: "Analytics dashboard for social media accounts",
              tech: ["React", "Chart.js", "API"],
              image: "dashboard"
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden 
                        hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-6 bg-gray-800/80 border-b border-white/10 flex items-center px-3">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono mx-auto">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}.jsx
                </div>
              </div>
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="font-mono">{`<${project.image} />`}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-md text-white font-mono text-sm transform translate-y-8 group-hover:translate-y-0 transition-transform flex items-center space-x-2">
                    <span>{'<'}</span>
                    <span>View Details</span>
                    <span>{'/>'}</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-mono font-semibold mb-2 text-white">
                  <span className="text-cyan-400">.</span>
                  {project.title.replace(/\s+/g, '')}
                  <span className="text-cyan-400">()</span>
                </h3>
                <div className="text-gray-500 text-xs font-mono mb-2">
                  // {project.desc}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/10 text-xs rounded-md text-cyan-300 border border-white/5 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}