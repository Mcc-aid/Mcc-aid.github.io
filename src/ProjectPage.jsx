import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Activity, Terminal, Layers } from 'lucide-react';

const ProjectPage = ({ title, description, tech, architecture, logic, githubLink, liveLink, codeSnippet }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-sky-500/30 font-sans antialiased">
      {/* Navigation */}
      <nav className="p-8 max-w-6xl mx-auto flex justify-between items-center border-b border-zinc-900/50">
        <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="tracking-[0.2em] text-[10px] uppercase font-bold">Back to Home</span>
        </Link>
        <div className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase font-mono">
          System_Manifest_v2.0 // {title.replace(/\s+/g, '_').toUpperCase()}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Title Block */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8 italic">
            {title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span key={item} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] tracking-[0.2em] uppercase text-sky-400 font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Summary & Links */}
          <div className="lg:col-span-4 space-y-12">
            <section>
              <h3 className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6">
                <Activity size={14} /> Goal:
              </h3>
              <p className="text-lg leading-relaxed text-zinc-400 font-light italic">
                {description}
              </p>
            </section>

            <div className="pt-8 border-t border-zinc-900">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 font-bold">Access Repository</h3>
              <div className="flex flex-col gap-4">
                <a href={githubLink} className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-900 transition-all group">
                  <span className="text-sm font-mono tracking-widest text-zinc-400 group-hover:text-white">GIT_SOURCE</span>
                  <Github size={18} />
                </a>
                {liveLink && (
                  <a href={liveLink} className="flex items-center justify-between p-4 bg-sky-500/5 border border-sky-500/20 hover:border-sky-500 hover:bg-sky-500/10 transition-all group">
                    <span className="text-sm font-mono tracking-widest text-sky-500">LIVE_SYSTEM</span>
                    <ExternalLink size={18} className="text-sky-500" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Technical Breakdown */}
          <div className="lg:col-span-8 space-y-20">
            {/* Architecture Section */}
            <section>
              <h3 className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-sky-500 mb-8 font-black">
                <Layers size={14} /> System_Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architecture.map((item, idx) => (
                  <div key={idx} className="p-6 border border-zinc-900 bg-zinc-900/20">
                    <span className="text-white block mb-2 tracking-widest text-xs uppercase font-bold">{item.phase}</span>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Section */}
            <section>
              <h3 className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-sky-500 mb-8 font-black">
                <Terminal size={14} /> Logic_Implementation
              </h3>
              <div className="space-y-12">
                {logic.map((block, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute -left-[5px] top-0 h-2 w-2 bg-sky-500 rounded-full" />
                    <h4 className="text-white text-lg mb-3 font-light tracking-tight">{block.header}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 font-light">{block.body}</p>
                    {block.snippet && (
                      <pre className="bg-black p-6 border border-zinc-900 overflow-x-auto">
                        <code className="text-[11px] font-mono text-zinc-400 leading-relaxed">
                          {block.snippet}
                        </code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;