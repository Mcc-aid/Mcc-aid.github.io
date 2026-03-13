import React, { useState } from 'react';
import { Github, Linkedin, Mail, Music, MapPin, GraduationCap, Download, ChevronDown } from 'lucide-react';
import profilePic from './assets/pfp.jfif';

const App = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const internshipBullets = [
    { 
      id: 'ai', 
      title: 'AI automation & systems integration', 
      detail: 'Developing automated pipelines using n8n and OpenAI APIs to process user inputs and generate AI-built websites with minimal manual setup[cite: 52, 53].' 
    },
    { 
      id: 'data', 
      title: 'Data management & server oversight', 
      detail: 'Managing internal data structures and overseeing server health to ensure consistent uptime for production environments[cite: 32].' 
    },
    { 
      id: 'web', 
      title: 'Website creation & maintenance', 
      detail: 'Designing and deploying responsive websites, focusing on clean architecture and long-term maintainability[cite: 32].' 
    },
    { 
      id: 'seo', 
      title: 'In-house site migration (SEO)', 
      detail: 'Migrating company websites from external hosting to in-house servers by restoring backups and updating DNS records[cite: 51].' 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30 font-sans leading-relaxed antialiased">
      
      {/* Container expanded to fill the whole screen width while maintaining left-side padding */}
      <div className="w-full px-8 md:pl-20 lg:pl-32 py-16 pr-12 md:pr-24">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-sky-500/20 rounded-[2rem] blur-xl"></div>
                <img 
                  src={profilePic} 
                  alt="Aidan McClure" 
                  className="relative w-28 h-36 md:w-36 md:h-44 rounded-[2rem] object-cover object-top border-2 border-slate-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-2 leading-none">
                  Aidan McClure [cite: 1, 2]
                </h1>
                <p className="text-xl md:text-2xl text-slate-100 font-light tracking-tight italic">
                  Software Engineer [cite: 3] <span className="text-slate-600 px-2">/</span> 
                  CS Student @ <span className="text-white border-b-2 border-slate-800 text-lg">UNF [cite: 40]</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 text-slate-400">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Github size={22} strokeWidth={1.5} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Linkedin size={22} strokeWidth={1.5} /></a>
              <a href="mailto:aidangwalter@icloud.com" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Mail size={22} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-green-400 transition-all hover:-translate-y-1"><Music size={22} strokeWidth={1.5} /></a>
              <div className="h-8 w-[1px] bg-slate-800 mx-1 hidden md:block"></div>
              <a href="/Aidan_McClure_Resume.pdf" download="Aidan_McClure_Resume.pdf" className="group flex items-center gap-2 px-5 py-2 bg-slate-900 border border-slate-700 rounded-md text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-sky-500 hover:border-sky-400 transition-all shadow-xl">
                <Download size={16} /> <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </header>

        {/* --- BACKGROUND --- */}
        <section className="mb-20 border-t border-slate-900 pt-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-6">Background</h2>
          <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-5xl">
            Currently finishing my Bachelors in Computer Science at the University of North Florida[cite: 40]. 
            When I'm not building AI pipelines or troubleshooting servers, I'm usually learning new kendama tricks, heading to concerts, or just hanging with friends outdoors.
          </p>
          <p className="mt-6 text-slate-400 text-sm flex items-center gap-2 font-medium uppercase tracking-widest">
            <MapPin size={16} className="text-sky-500" /> Based in Jacksonville, FL [cite: 12, 31]
          </p>
        </section>

        {/* --- EXPERIENCE --- */}
        <section className="mb-20 text-left">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Experience</h2>
          <div className="space-y-14 border-l-2 border-slate-900 ml-2 pl-10">
            
            <div className="relative">
              <div className="absolute -left-[49px] top-[10px] h-4 w-4 rounded-full border-2 border-sky-500 bg-slate-950 shadow-[0_0_15px_#0ea5e9]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">Software Engineering Intern [cite: 30]</h3>
                <span className="text-slate-400 text-sm italic font-medium">Jan 2025 — Present [cite: 29]</span>
              </div>
              <p className="text-sky-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">Custom Design Partners [cite: 31]</p>
              
              <div className="flex flex-col gap-3 w-full lg:max-w-5xl">
                {internshipBullets.map((bullet) => (
                  <div 
                    key={bullet.id}
                    onMouseEnter={() => setHoveredId(bullet.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group flex flex-col border border-slate-900 bg-slate-900/10 hover:border-sky-500/40 hover:bg-slate-900/40 transition-all duration-300 rounded-md overflow-hidden"
                  >
                    <div className="p-4 flex items-center justify-between">
                      <p className="text-base text-slate-100 group-hover:text-white transition-colors">• {bullet.title}</p>
                      <ChevronDown size={16} className={`text-slate-600 transition-transform duration-300 ${hoveredId === bullet.id ? 'rotate-180 text-sky-500' : ''}`} />
                    </div>
                    <div className={`px-5 transition-all duration-500 ease-in-out ${hoveredId === bullet.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-3 border-t border-slate-800 flex gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                          <p className="text-sm text-slate-300 leading-relaxed font-light italic uppercase tracking-wider">
                          {bullet.detail}
                          </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative opacity-70">
              <div className="absolute -left-[49px] top-[10px] h-4 w-4 rounded-full border-2 border-slate-800 bg-slate-950" />
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">Trusted Advisor [cite: 33]</h3>
                <span className="text-slate-400 text-sm italic font-medium">2022 — Present [cite: 33]</span>
              </div>
              <p className="text-slate-500 font-bold mb-4 uppercase tracking-[0.2em] text-xs">Batteries Plus [cite: 34]</p>
              <p className="text-base text-slate-300 max-w-2xl font-light">
                Specializing in micro-hardware repair for computers, tablets, and phones[cite: 35].
              </p>
            </div>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Education</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex gap-6">
              <div className="mt-1 text-sky-500 shrink-0"><GraduationCap size={32} /></div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">University of North Florida [cite: 40]</h3>
                <p className="text-sky-400 text-lg font-bold italic">B.S. in Computer Science [cite: 39]</p>
                <p className="text-slate-200 text-lg font-light italic leading-tight">Minor in Business Management [cite: 39]</p>
                <p className="text-slate-500 text-[10px] mt-3 font-mono uppercase tracking-[0.3em]">Class of 2026 [cite: 38]</p>
                <div className="mt-4">
                  <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] uppercase font-black rounded-md tracking-widest shadow-[0_0_10px_rgba(14,165,233,0.1)]">Dean's List [cite: 42]</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 opacity-50">
              <div className="mt-1 text-slate-500 shrink-0"><GraduationCap size={24} /></div>
              <div>
                <h3 className="text-xl font-semibold text-white">Providence School [cite: 43]</h3>
                <p className="text-slate-500 text-sm">Elementary - High School [cite: 43]</p>
                <p className="text-slate-500 text-xs mt-1 italic font-mono uppercase tracking-widest">2009 — 2022 [cite: 43]</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group border border-slate-900 p-8 rounded-lg hover:bg-slate-900/40 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">Smart Sites: AI Pipeline [cite: 52]</h4>
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest text-right">n8n / OpenAI / API [cite: 53]</span>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-light">Developed an automated pipeline using forms, n8n, and OpenAI APIs to process user inputs and generate AI-built websites with minimal manual setup[cite: 53].</p>
            </div>
            <div className="group border border-slate-900 p-8 rounded-lg hover:bg-slate-900/40 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">SIC Assembler & Driver [cite: 45]</h4>
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest text-right">C / Systems Programming [cite: 45]</span>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-light">Developed a two-pass assembler for a SIC machine, generating symbol tables and object files to build a connected driver[cite: 46, 47].</p>
            </div>
          </div>
        </section>
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-12 border-t border-slate-900 md:pl-20 lg:pl-32 pr-12">
        <p className="text-slate-200 text-base mb-2 font-medium italic">
          Contact: <a href="mailto:Aidangwalter@icloud.com" className="text-sky-400 hover:text-white transition-colors underline decoration-sky-500/20 underline-offset-4">Aidangwalter@icloud.com</a> [cite: 11]
        </p>
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-bold">
          &copy; 2026 Aidan McClure. All Rights Reserved. [cite: 1, 2]
        </p>
      </footer>

    </div>
  );
};

export default App;