import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Music, MapPin, GraduationCap, Download, ChevronDown, Code2, Terminal, ExternalLink } from 'lucide-react';
import profilePic from './assets/pfp.jfif';
import ProjectPage from './ProjectPage';

// --- 1. THE HOME COMPONENT (Landing Page) ---
const Home = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const internshipBullets = [
    { id: 'ai', title: 'AI Automation & Systems Integration', detail: 'SmartSites: Architecting automated pipelines using n8n and OpenAI to transform raw user data into fully functional websites.' },
    { id: 'data', title: 'Data Management & Server Oversight', detail: 'Monitoring infrastructure health and optimizing internal data structures to maintain 99.9% uptime.' },
    { id: 'web', title: 'Website Creation & Maintenance', detail: 'Building and scaling responsive web platforms with a focus on clean, modular architecture.' },
    { id: 'seo', title: 'In-house Site Migration (SEO)', detail: 'Managing full-stack migrations by restoring legacy backups and reconfiguring DNS records.' }
  ];

  const languages = ["Java", "JavaScript", "C/C++", "Python", "PHP", "HTML & CSS", "Oracle SQL"];
  const tools = ["Unix", "Google Cloud", "AI Studio", "App Script", "RESTful APIs", "n8n", "Zapier", "SEO"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30 font-sans leading-relaxed antialiased">
      <div className="w-full px-8 md:pl-20 lg:pl-32 py-16 pr-12 md:pr-24 text-left">
        
        {/* HERO */}
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
                  Software Engineer <span className="text-slate-600 px-2">/</span> CS Student at <span className="text-white border-b-2 border-slate-800 text-lg font-normal">UNF</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-slate-400">
              <a href="https://github.com/Mcc-aid" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Github size={22} strokeWidth={1.5} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Linkedin size={22} /></a>
              <a href="mailto:aidangwalter@icloud.com" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Mail size={22} /></a>
              <a href="#" className="hover:text-green-400 transition-all hover:-translate-y-1"><Music size={22} /></a>
              <div className="h-8 w-[1px] bg-slate-800 mx-1 hidden md:block"></div>
              <a href="/Aidan_McClure_Resume.pdf" download className="group flex items-center gap-2 px-5 py-2 bg-slate-900 border border-slate-700 rounded-md text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-sky-500 transition-all shadow-xl">
                <Download size={16} /> <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </header>

        {/* BACKGROUND */}
        <section className="mb-20 border-t border-slate-900 pt-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-6">Background</h2>
          <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-5xl">
            Currently finishing my Bachelors in Computer Science at the University of North Florida. 
            When I'm not building AI pipelines, I'm usually learning new kendama tricks, heading to concerts, or just hanging with friends outdoors.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Experience</h2>
          <div className="space-y-14 border-l-2 border-slate-900 ml-2 pl-10">
            <div className="relative">
              <div className="absolute -left-[49px] top-[10px] h-4 w-4 rounded-full border-2 border-sky-500 bg-slate-950 shadow-[0_0_15px_#0ea5e9]" />
              <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">Software Engineering Intern</h3>
                <span className="text-slate-400 text-sm italic font-medium">Jan 2025 — Present</span>
              </div>
              <p className="text-sky-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">Custom Design Partners</p>
              <div className="flex flex-col gap-3 w-full lg:max-w-5xl">
                {internshipBullets.map((bullet) => (
                  <div key={bullet.id} onMouseEnter={() => setHoveredId(bullet.id)} onMouseLeave={() => setHoveredId(null)} className="group flex flex-col border border-slate-900 bg-slate-900/10 hover:border-sky-500/40 transition-all rounded-md overflow-hidden cursor-pointer">
                    <div className="p-4 flex items-center justify-between">
                      <p className="text-base text-slate-100">• {bullet.title}</p>
                      <ChevronDown size={16} className={`transition-transform duration-300 ${hoveredId === bullet.id ? 'rotate-180 text-sky-500' : ''}`} />
                    </div>
                    <div className={`px-5 transition-all duration-500 ${hoveredId === bullet.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-zinc-400 italic border-t border-slate-800 pt-3">{bullet.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative opacity-80 pt-4">
              <div className="absolute -left-[49px] top-[26px] h-4 w-4 rounded-full border-2 border-slate-800 bg-slate-950" />
              <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">Trusted Advisor / Technician</h3>
                <span className="text-slate-500 text-sm italic font-medium">2022 — Present</span>
              </div>
              <p className="text-slate-500 font-bold mb-6 uppercase tracking-[0.2em] text-xs font-mono tracking-tighter italic">Batteries Plus</p>
              <div className="space-y-2 text-sm text-slate-400 font-light tracking-wide uppercase">
                <p>• Phone, tablet, and computer repair</p>
                <p>• Keyfob cutting and programming</p>
                <p>• Entry level mechanic</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 border-sky-500/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">Portfolio 2.0 (This current site)</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">High-performance React application with automated Vercel CI/CD pipelines.</p>
              <Link to="/project/portfolio" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[ View Technical Manifest ]</Link>
            </div>
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">SIC Assembler</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">Two-pass systems software for instruction parsing and object code generation.</p>
              <Link to="/project/assembler" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[ View Technical Manifest ]</Link>
            </div>
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">Weather Forecast GUI</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">External API integration for real-time meteorological data visualization.</p>
              <Link to="/project/weather" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[ View Technical Manifest ]</Link>
            </div>
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">Nutrition GUI V1</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">A nutrional form with a GUI that tracks the users nutrional stats and stores them into a .csv</p>
              <Link to="/project/nutrition" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[ View Technical Manifest ]</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- 2. THE MAIN APP CONTROLLER ---
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/project/portfolio" element={
          <ProjectPage 
            title="Portfolio 2.0"
            description="Goal: This project was a true test of everything I have learned so far in my journey as a developer. Beyond just being a fun build, I hope this platform showcases my attention to detail."
            tech={["React 18", "Vite", "Tailwind CSS", "Vercel CI/CD"]}
            githubLink="https://github.com/Mcc-aid/Mcc-aid.github.io"
            architecture={[
              { phase: "Vite Build Engine", step: "Utilized Vite's Hot Module Replacement (HMR) for optimized asset loading." },
              { phase: "Automated CI/CD", step: "Configured deployment pipelines via GitHub webhooks to Vercel edge network." }
            ]}
            logic={[{ header: "Component Architecture", body: "Refactored UI into modular React components for independent scaling." }]}
          />
        } />

        <Route path="/project/assembler" element={
          <ProjectPage 
            title="SIC Assembler"
            description="Translating mnemonic assembly into machine-executable hex code for the SIC architecture."
            tech={["C Language", "Systems Programming", "Hex Conversion"]}
            githubLink="https://github.com/Mcc-aid/SIC-driver"
            architecture={[
              { phase: "Pass 1: SYMTAB", step: "Scans source code to assign memory addresses and build Symbol Table." },
              { phase: "Pass 2: Code Gen", step: "Translates opcodes to generate HTE records." }
            ]}
            logic={[{ header: "Parsing Engine", body: "Built robust C-based parser for opcode lookup and operand extraction." }]}
          />
        } />

        <Route path="/project/weather" element={
          <ProjectPage 
            title="AWeather GUI"
            description="Software Engineering project focused on clean API consumption and presenting meteorological data sets."
            tech={["Java", "JavaFX", "OpenWeather API"]}
            githubLink="https://github.com/Mcc-aid/WeatherApp"
            architecture={[{ phase: "API Integration", step: "Implemented asynchronous HTTP requests to fetch live weather data." }]}
            logic={[{ header: "JSON Mapping", body: "Custom serialization layer to translate raw responses into dynamic UI updates." }]}
          />
        } />

        <Route path="/project/nutrition" element={
          <ProjectPage 
            title="Nutrition GUI"
            description="My first venture into graphical user interfaces, focusing on event-driven programming."
            tech={["Java", "Swing/AWT", "File I/O"]}
            githubLink="https://github.com/Mcc-aid/Nutrition-gui"
            architecture={[{ phase: "Event Handling", step: "Utilized ActionListeners to handle multi-field user input." }]}
            logic={[{ header: "Data Persistence", body: "Implemented local file I/O to save and retrieve user logs between sessions." }]}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;