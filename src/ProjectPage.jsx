import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectPage = ({ title, description, tech, challenges, githubLink, liveLink }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-sky-500/30 font-sans">
      {/* Navigation */}
      <nav className="p-8 max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="tracking-[0.2em] text-sm uppercase">Home</span>
        </Link>
        <div className="h-[1px] flex-grow mx-8 bg-zinc-800/50 hidden md:block" />
        <div className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase hidden md:block">
          Technical_Report_v2.0
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 pb-24">
        {/* Header Section */}
        <header className="py-12 border-b border-zinc-900">
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
            {title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {tech.map((item) => (
              <span key={item} className="px-3 py-1 border border-zinc-800 text-[10px] tracking-widest uppercase text-zinc-500">
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
          {/* Sidebar Specs */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-sky-500 mb-4">Links</h3>
              <div className="space-y-3">
                <a href={githubLink} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <Github size={16} /> Source Code
                </a>
                {liveLink && (
                  <a href={liveLink} target="_blank" rel="noreferrer" 
                     className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Main Body */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-sky-500 mb-4 underline underline-offset-8 decoration-sky-500/30">
                Executive Summary
              </h3>
              <p className="text-lg leading-relaxed text-zinc-400 font-light">
                {description}
              </p>
            </section>

            <section>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-sky-500 mb-4 underline underline-offset-8 decoration-sky-500/30">
                Technical Challenges
              </h3>
              <ul className="space-y-6">
                {challenges.map((challenge, index) => (
                  <li key={index} className="group">
                    <span className="text-white block mb-1 tracking-tight">{challenge.title}</span>
                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {challenge.content}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;