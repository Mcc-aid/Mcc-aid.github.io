import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Music, MapPin, GraduationCap, Download, ChevronDown, Code2, Terminal, ExternalLink } from 'lucide-react';
import profilePic from './assets/pfp.jfif';
import ProjectPage from './ProjectPage'; // Make sure the filename matches exactly

// --- 1. THE HOME COMPONENT (Your main landing page) ---
const Home = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const internshipBullets = [
    { id: 'ai', title: 'AI automation & systems integration', detail: 'Developing automated pipelines using n8n and OpenAI APIs to process user inputs and generate AI-built websites with minimal manual setup.' },
    { id: 'data', title: 'Data management & server oversight', detail: 'Managing internal data structures and overseeing server health to ensure consistent uptime for production environments.' },
    { id: 'web', title: 'Website creation & maintenance', detail: 'Designing and deploying responsive websites, focusing on clean architecture and long-term maintainability.' },
    { id: 'seo', title: 'In-house site migration (SEO)', detail: 'Migrating company websites from external hosting to in-house servers by restoring backups and updating DNS records.' }
  ];

  const languages = ["Java", "JavaScript", "C/C++", "Python", "PHP", "HTML & CSS", "Oracle SQL"];
  const tools = ["Unix", "Google Cloud", "AI Studio", "App Script", "RESTful APIs", "n8n", "Zapier", "SEO"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30 font-sans leading-relaxed antialiased">
      <div className="w-full px-8 md:pl-20 lg:pl-32 py-16 pr-12 md:pr-24 text-left">
        
        {/* HERO SECTION */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-sky-500/20 rounded-[2rem] blur-xl"></div>
                <img src={profilePic} alt="Aidan McClure" className="relative w-28 h-36 md:w-36 md:h-44 rounded-[2rem] object-cover object-top border-2 border-slate-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02]" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-2 leading-none">Aidan McClure</h1>
                <p className="text-xl md:text-2xl text-slate-100 font-light tracking-tight italic">
                  Software Engineer <span className="text-slate-600 px-2">/</span> CS Student @ <span className="text-white border-b-2 border-slate-800 text-lg font-normal">UNF</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-slate-400">
              <a href="https://github.com/mcc-aid" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Github size={22} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Linkedin size={22} /></a>
              <a href="mailto:aidangwalter@icloud.com" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Mail size={22} /></a>
              <a href="#" className="hover:text-green-400 transition-all hover:-translate-y-1"><Music size={22} /></a>
              <div className="h-8 w-[1px] bg-slate-800 mx-1 hidden md:block"></div>
              <a href="/Aidan_McClure_Resume.pdf" download className="group flex items-center gap-2 px-5 py-2 bg-slate-900 border border-slate-700 rounded-md text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-sky-500 hover:border-sky-400 transition-all">
                <Download size={16} /> <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </header>

        {/* BACKGROUND SECTION */}
        <section className="mb-20 border-t border-slate-900 pt-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-6">Background</h2>
          <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-5xl">
            Currently finishing my Bachelors in Computer Science at the University of North Florida. 
            When I'm not building AI pipelines or troubleshooting servers, I'm usually learning new kendama tricks, heading to concerts, or just hanging with friends outdoors.
          </p>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={18} className="text-slate-500" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900/50 border border-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-wider rounded-sm hover:border-sky-500/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal size={18} className="text-slate-500" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-slate-900/50 border border-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-wider rounded-sm hover:border-sky-500/40 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Experience</h2>
          <div className="space-y-14 border-l-2 border-slate-900 ml-2 pl-10">
            <div className="relative">
              <div className="absolute -left-[49px] top-[10px] h-4 w-4 rounded-full border-2 border-sky-500 bg-slate-950 shadow-[0_0_15px_#0ea5e9]" />
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
                <span className="text-slate-400 text-sm italic">Jan 2025 — Present</span>
              </div>
              <p className="text-sky-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">Custom Design Partners</p>
              <div className="flex flex-col gap-3 w-full lg:max-w-5xl">
                {internshipBullets.map((bullet) => (
                  <div key={bullet.id} onMouseEnter={() => setHoveredId(bullet.id)} onMouseLeave={() => setHoveredId(null)} className="group flex flex-col border border-slate-900 bg-slate-900/10 hover:border-sky-500/40 hover:bg-slate-900/40 transition-all rounded-md overflow-hidden">
                    <div className="p-4 flex items-center justify-between">
                      <p className="text-base text-slate-100">• {bullet.title}</p>
                      <ChevronDown size={16} className={`transition-transform ${hoveredId === bullet.id ? 'rotate-180 text-sky-500' : ''}`} />
                    </div>
                    <div className={`px-5 transition-all duration-500 ${hoveredId === bullet.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-slate-300 leading-relaxed font-light italic uppercase tracking-wider border-t border-slate-800 pt-3">{bullet.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (Updated with Links) */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1: Portfolio */}
            <div className="group border border-slate-900 p-8 rounded-lg bg-slate-900/20 border-sky-500/20 hover:bg-slate-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4">Personal Portfolio 2.0</h4>
              <p className="text-base text-slate-300 font-light mb-6">A high-performance personal branding platform focusing on minimalism and technical depth.</p>
              <Link to="/project/portfolio" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 hover:text-white transition-colors">
                [ View_Technical_Report ]
              </Link>
            </div>

            {/* Project 2: SIC Assembler */}
            <div className="group border border-slate-900 p-8 rounded-lg bg-slate-900/20 hover:bg-slate-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4">SIC Assembler & Driver</h4>
              <p className="text-base text-slate-300 font-light mb-6">A two-pass assembler for a SIC machine, generating symbol tables and object files.</p>
              <Link to="/project/assembler" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 hover:text-white transition-colors">
                [ View_Technical_Report ]
              </Link>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

// --- 2. THE MAIN APP COMPONENT (The Switchboard) ---
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/project/portfolio" element={
          <ProjectPage 
            title="Portfolio 2.0"
            description="A high-performance personal branding platform built to demonstrate modern frontend architecture and automated deployment pipelines."
            tech={["React 18", "Vite", "Tailwind CSS", "Vercel"]}
            githubLink="https://github.com/Mcc-aid/Mcc-aid.github.io"
            challenges={[
              { title: "State-Driven UI", content: "Moving away from static HTML to allow for dynamic components like the experience accordion and project routing." },
              { title: "Performance Optimization", content: "Using Vite's build tool to minimize bundle sizes and ensure sub-second load times." }
            ]}
          />
        } />

        <Route path="/project/assembler" element={
          <ProjectPage 
            title="SIC Assembler"
            description="A two-pass assembler designed for the Simplified Instructional Computer (SIC) architecture, handling instruction parsing and object code generation."
            tech={["Python", "Computer Architecture", "Algorithms"]}
            githubLink="#" 
            challenges={[
              { title: "Symbol Table Management", content: "Implementing efficient hash-mapping for labels and addresses during the first pass." },
              { title: "Instruction Translation", content: "Developing a robust parser to convert mnemonic opcodes and operands into hexadecimal object code." }
            ]}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;