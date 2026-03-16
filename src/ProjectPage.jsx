import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Activity, Terminal, Layers, PlayCircle, Eye } from 'lucide-react';

const ProjectPage = ({ title, description, tech, architecture, logic, githubLink, liveLink, media }) => {
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoClick = () => {
    if (!showDemo) {
      setShowDemo(true);
      setTimeout(() => {
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setShowDemo(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-sky-500/30 font-sans antialiased">
      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center border-b border-zinc-900/50">
        <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="tracking-[0.2em] text-[10px] uppercase font-bold">Back to Home</span>
        </Link>
        <div className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase font-mono">
          Portfolio 2.0// {title?.replace(/\s+/g, '_').toUpperCase()}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Title Block */}
        <div className="mb-20 text-left">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8 italic">{title}</h1>
          <div className="flex flex-wrap gap-2 text-left">
            {tech?.map((item) => (
              <span key={item} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] tracking-[0.2em] uppercase text-sky-400 font-bold">{item}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* SIDEBAR (Left) */}
          <aside className="w-full lg:w-1/3 space-y-12 text-left lg:sticky lg:top-8">
            <section>
              <h3 className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 italic">
                <Activity size={14} /> Goal:
              </h3>
              <p className="text-xl leading-relaxed text-zinc-400 font-light italic">
                {description}
              </p>
            </section>
            
            <div className="pt-8 border-t border-zinc-900">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 font-bold uppercase">Advanced Options</h3>
              <div className="flex flex-col gap-4">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:border-sky-500/50 hover:bg-zinc-900 hover:text-white transition-all group font-bold">
                  <span className="text-sm font-mono tracking-widest uppercase">View GIT SRC</span>
                  <Github size={18} />
                </a>

                {media && media.length > 0 && (
                  <button 
                    onClick={handleDemoClick}
                    className="flex items-center justify-between p-5 bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-white transition-all active:scale-95 group font-bold"
                  >
                    <span className="text-sm font-mono tracking-widest uppercase">
                      {showDemo ? 'Close Demo' : 'View Demo'}
                    </span>
                    <Eye size={18} className="group-hover:text-sky-400 transition-colors" />
                  </button>
                )}

                {liveLink && (
                  <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-green-500/5 border border-green-500/20 hover:border-green-500 hover:bg-green-500/10 transition-all group font-bold">
                    <span className="text-sm font-mono tracking-widest text-green-500 uppercase">Live_System</span>
                    <ExternalLink size={18} className="text-green-500" />
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* TECHNICAL CONTENT (Right) - Stacked for better readability */}
          <div className="w-full lg:w-2/3 space-y-24 text-left">
            
            {/* Architecture Section */}
            <section>
              <h3 className="flex items-center gap-2 text-xs tracking-[0.4em] text-sky-500 mb-10 font-black border-b border-zinc-900 pb-4">
                <Layers size={16} /> SYSTEM ARCHITECTURE
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {architecture?.map((item, idx) => (
                  <div key={idx} className="p-8 border border-zinc-900 bg-zinc-900/20 rounded-lg hover:border-zinc-800 transition-colors">
                    <span className="text-sky-400 block mb-3 tracking-widest text-xs uppercase font-bold font-mono">
                      Phase 0{idx + 1}: {item.phase}
                    </span>
                    <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                      {item.step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Logic Section */}
            <section>
              <h3 className="flex items-center gap-2 text-xs tracking-[0.4em] text-sky-500 mb-10 font-black border-b border-zinc-900 pb-4">
                <Terminal size={16} /> LOGIC IMPLEMENTATION
              </h3>
              <div className="space-y-16">
                {logic?.map((block, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-zinc-900">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 bg-sky-500 rounded-full shadow-[0_0_15px_#0ea5e9]" />
                    <h4 className="text-xl md:text-2xl text-white mb-4 font-normal tracking-tight">
                      {block.header}
                    </h4>
                    <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light italic mb-6">
                      {block.body}
                    </p>
                    {block.snippet && (
                      <pre className="mt-6 bg-black p-6 border border-zinc-900 overflow-x-auto rounded-lg text-xs md:text-sm font-mono text-sky-400 shadow-2xl">
                        {block.snippet}
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Conditional Gallery Section */}
        {showDemo && media && media.length > 0 && (
          <section id="gallery" className="mt-32 pt-20 border-t border-zinc-900 text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="flex items-center gap-2 text-xs tracking-[0.4em] text-sky-500 mb-12 font-black">
               <PlayCircle size={16} /> VISUAL_ARTIFACTS // OPERATIONAL_DEMO
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {media.map((item, idx) => (
                <div key={idx} className="border border-zinc-900 bg-zinc-900/10 rounded-lg overflow-hidden group shadow-2xl">
                  {item.type === 'video' ? (
                    <video controls className="w-full h-auto">
                      <source src={item.url} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={item.url} 
                      alt="System Artifact" 
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectPage;