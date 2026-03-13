import React, { useState } from 'react';
import { Github, Linkedin, Mail, Music, MapPin, GraduationCap, Download } from 'lucide-react';
import profilePic from './assets/pfp.jfif';

const App = () => {
  const [activeDetail, setActiveDetail] = useState(null);

  const internshipBullets = [
    { 
      id: 'ai', 
      title: 'AI automation & systems integration', 
      detail: 'Developing automated pipelines using n8n and OpenAI APIs to process user inputs and generate AI-built websites with minimal manual setup.' 
    },
    { 
      id: 'data', 
      title: 'Data management & server oversight', 
      detail: 'Managing internal data structures and overseeing server health to ensure consistent uptime for production environments.' 
    },
    { 
      id: 'web', 
      title: 'Website creation & maintenance', 
      detail: 'Designing and deploying responsive websites, focusing on clean architecture and long-term maintainability.' 
    },
    { 
      id: 'seo', 
      title: 'In-house site migration (SEO)', 
      detail: 'Migrating company websites from external hosting to in-house servers by restoring backups and updating DNS records.' 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-sky-500/30 px-6 py-16 md:px-24 lg:px-64 font-sans leading-relaxed">
      
      {/* --- HERO SECTION --- */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-sky-500/20 rounded-[2rem] blur-xl"></div>
              <img 
                src={profilePic} 
                alt="Aidan McClure" 
                className="relative w-32 h-40 md:w-40 md:h-48 rounded-[2rem] object-cover object-top border border-slate-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-2">Aidan McClure</h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light tracking-tight">
                Software Engineer <span className="text-slate-600 px-2">/</span> 
                CS Student @ <span className="text-white border-b border-slate-800">UNF</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 text-slate-500">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Github size={22} strokeWidth={1.5} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Linkedin size={22} strokeWidth={1.5} /></a>
            <a href="mailto:aidangwalter@icloud.com" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Mail size={22} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-green-400 transition-all hover:-translate-y-1"><Music size={22} strokeWidth={1.5} /></a>
            <div className="h-8 w-[1px] bg-slate-800 mx-2 hidden md:block"></div>
            <a href="/Aidan_McClure_Resume.pdf" download="Aidan_McClure_Resume.pdf" className="group flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-sm text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-all shadow-lg">
              <Download size={16} /> <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- BACKGROUND --- */}
      <section className="mb-24 border-t border-slate-900 pt-12">
        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-6">Background</h2>
        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-3xl">
          Currently finishing my Bachelors in Computer Science at the University of North Florida. 
          When I'm not building AI pipelines or troubleshooting servers, I'm usually learning new kendama tricks, heading to concerts, or just hanging with friends outdoors.
        </p>
        <p className="mt-6 text-slate-500 text-sm flex items-center gap-2">
          <MapPin size={14} className="text-sky-500" /> Based in Jacksonville, FL
        </p>
      </section>

      {/* --- EXPERIENCE --- */}
      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-12">Experience</h2>
        <div className="space-y-16 border-l-2 border-slate-900 ml-2 pl-8">
          
          <div className="relative">
            <div className="absolute -left-[41px] top-[14px] h-4 w-4 rounded-full border-2 border-sky-500 bg-slate-950 shadow-[0_0_15px_#0ea5e9]" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-2xl font-semibold text-white">Software Engineering Intern</h3>
              <span className="text-slate-500 text-sm italic">Jan 2025 — Present</span>
            </div>
            <p className="text-sky-400 font-medium mb-6 uppercase tracking-wider text-sm">Custom Design Partners</p>
            
            {/* INTERACTIVE BULLETS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {internshipBullets.map((bullet) => (
                <div 
                  key={bullet.id}
                  onMouseEnter={() => setActiveDetail(bullet.detail)}
                  onMouseLeave={() => setActiveDetail(null)}
                  className="p-4 border border-slate-900 bg-slate-950/50 hover:border-sky-500/50 hover:bg-slate-900/50 transition-all cursor-help rounded-sm group"
                >
                  <p className="text-sm text-slate-400 group-hover:text-white transition-colors">• {bullet.title}</p>
                </div>
              ))}
            </div>

            {/* EXPANSION BOX */}
            <div className="min-h-[110px] bg-slate-900/40 border border-slate-800 p-6 rounded-sm transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-500/50" />
              <p className="text-[10px] font-mono text-sky-500 mb-2 uppercase tracking-[0.2em] font-bold">Technical Implementation</p>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                {activeDetail || "Hover over a core responsibility above to view the specific technical methodologies and tools used."}
              </p>
            </div>
          </div>

          <div className="relative opacity-60 hover:opacity-100 transition-opacity">
            <div className="absolute -left-[41px] top-[14px] h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950" />
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-semibold text-white">Trusted Advisor</h3>
              <span className="text-slate-500 text-sm italic">2022 — Present</span>
            </div>
            <p className="text-slate-500 font-medium mb-4 uppercase tracking-wider text-sm">Batteries Plus</p>
            <p className="text-sm text-slate-400 max-w-xl">
              Specializing in micro-hardware repair for computers, tablets, and phones, alongside technical key fob programming.
            </p>
          </div>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-4">
            <div className="mt-1 text-sky-500 shrink-0"><GraduationCap size={28} /></div>
            <div>
              <h3 className="text-2xl font-semibold text-white">University of North Florida</h3>
              <div className="space-y-1 mt-1">
                <p className="text-sky-400 text-lg font-medium leading-tight">B.S. in Computer Science</p>
                <p className="text-slate-400 text-lg font-light leading-tight italic">Minor in Business Management</p>
              </div>
              <p className="text-slate-500 text-sm mt-2 font-mono uppercase tracking-widest text-[10px]">Class of 2026</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] uppercase font-bold rounded-sm tracking-widest shadow-[0_0_10px_rgba(14,165,233,0.1)]">Dean's List</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 opacity-50">
            <div className="mt-1 text-slate-500 shrink-0"><GraduationCap size={24} /></div>
            <div>
              <h3 className="text-xl font-semibold text-white">Providence School</h3>
              <p className="text-slate-500 text-sm">Elementary - High School</p>
              <p className="text-slate-500 text-xs mt-1 italic font-mono">2009 — 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-12">Technical Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="group border border-slate-900 p-8 rounded-sm hover:bg-slate-900/30 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">Smart Sites: AI Pipeline</h4>
              <span className="text-xs font-mono text-slate-600">n8n / OpenAI / API</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Developed an automated pipeline using forms, n8n, and OpenAI APIs to process user inputs and generate AI-built websites with minimal manual setup.</p>
          </div>
          <div className="group border border-slate-900 p-8 rounded-sm hover:bg-slate-900/30 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">SIC Assembler & Driver</h4>
              <span className="text-xs font-mono text-slate-600">C / Systems Programming</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Developed a two-pass assembler for a SIC machine, generating symbol tables and object files to build a connected driver.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;