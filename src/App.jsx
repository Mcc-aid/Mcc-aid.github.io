import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Music, MapPin, GraduationCap, Download, ChevronDown, Code2, Terminal, ExternalLink } from 'lucide-react';
import profilePic from './assets/pfp.jfif';
import ProjectPage from './ProjectPage';

// --- 1. THE HOME COMPONENT ---
const Home = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const internshipBullets = [
    { 
      id: 'ai', 
      title: 'AI Automation & Systems Integration', 
      detail: 'Architecting automated pipelines using n8n and OpenAI to transform raw user data into fully functional websites, drastically reducing manual development time.' 
    },
    { 
      id: 'data', 
      title: 'Data Management & Server Oversight', 
      detail: 'Monitoring infrastructure health and optimizing internal data structures to maintain 99.9% uptime for production-level environments.' 
    },
    { 
      id: 'web', 
      title: 'Website Creation & Maintenance', 
      detail: 'Building and scaling responsive web platforms with a focus on clean, modular architecture and long-term stability.' 
    },
    { 
      id: 'seo', 
      title: 'In-house Site Migration (SEO)', 
      detail: 'Managing full-stack migrations by restoring legacy backups and reconfiguring DNS records to bring external sites onto internal high-performance servers.' 
    }
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
                  Software Engineer <span className="text-slate-600 px-2">/</span> CS Student at the <span className="text-white border-b-2 border-slate-800 text-lg font-normal">University of North Florida</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-slate-400">
              <a href="https://github.com/Mcc-aid/Mcc-aid.github.io" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-all hover:-translate-y-1"><Github size={22} strokeWidth={1.5} /></a>
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

        {/* --- EXPERIENCE --- */}
  <section className="mb-20">
    <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Experience</h2>
    <div className="space-y-14 border-l-2 border-slate-900 ml-2 pl-10 text-left">
      
      {/* INTERNSHIP SECTION */}
      <div className="relative text-left">
        <div className="absolute -left-[49px] top-[10px] h-4 w-4 rounded-full border-2 border-sky-500 bg-slate-950 shadow-[0_0_15px_#0ea5e9]" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
          <h3 className="text-2xl font-bold text-white tracking-tight text-left">Software Engineering Intern</h3>
          <span className="text-slate-400 text-sm italic font-medium">Jan 2025 — Present</span>
        </div>
        <p className="text-sky-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">Custom Design Partners</p>
        <div className="flex flex-col gap-3 w-full lg:max-w-5xl">
          {internshipBullets.map((bullet) => (
            <div 
              key={bullet.id}
              onMouseEnter={() => setHoveredId(bullet.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group flex flex-col border border-slate-900 bg-slate-900/10 hover:border-sky-500/40 hover:bg-slate-900/40 transition-all duration-300 rounded-md overflow-hidden cursor-pointer"
            >
              <div className="p-4 flex items-center justify-between">
                <p className="text-base text-slate-100 group-hover:text-white transition-colors tracking-wide leading-none">• {bullet.title}</p>
                <ChevronDown size={16} className={`text-slate-600 transition-transform duration-300 ${hoveredId === bullet.id ? 'rotate-180 text-sky-500' : ''}`} />
              </div>
              <div className={`px-5 transition-all duration-500 ease-in-out ${hoveredId === bullet.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-3 border-t border-slate-800 flex gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light italic uppercase tracking-wider text-left">
                    {bullet.detail}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BATTERIES PLUS SECTION */}
      <div className="relative opacity-80">
        <div className="absolute -left-[49px] top-[10px] h-4 w-4 rounded-full border-2 border-slate-800 bg-slate-950" />
        <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-3">
          <h3 className="text-2xl font-bold text-white tracking-tight">Trusted Advisor</h3>
          <span className="text-slate-500 text-sm italic font-medium">2022 — Present</span>
        </div>
        <p className="text-slate-500 font-bold mb-4 uppercase tracking-[0.2em] text-xs">Batteries Plus</p>
        <p className="text-base text-slate-400 max-w-2xl font-light leading-relaxed">
          <div className="flex items-center gap-3">
          <div className="h-1 w-1 bg-slate-700 rounded-full" />
          <span>Phone, tablet, and computer repair</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 bg-slate-700 rounded-full" />
          <span>Keyfob cutting and programming</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 bg-slate-700 rounded-full" />
          <span>Entry level mechanic</span>
        </div>
        </p>
      </div>

    </div>
</section>

        {/* PROJECTS SECTION */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-12">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project: Portfolio */}
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 border-sky-500/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">Portfolio 2.0</h4>
              <p className="text-sm text-zinc-400 font-light mb-6 leading-relaxed">High-performance React application featuring automated Vercel CI/CD and modular routing.</p>
              <Link to="/project/portfolio" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 hover:text-white transition-colors font-bold">
                [View Technical Report]
              </Link>
            </div>

            {/* Project: SIC Assembler */}
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">SIC_Assembler_v1.0</h4>
              <p className="text-sm text-zinc-400 font-light mb-6 leading-relaxed">Two-pass systems software for instruction parsing and object code generation on SIC architecture.</p>
              <Link to="/project/assembler" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 hover:text-white transition-colors font-bold">
                [View Technical Report]
              </Link>
            </div>

          </div>
        </section>
      </div>

      <footer className="py-12 border-t border-slate-900 md:pl-20 lg:pl-32 pr-12">
        <p className="text-slate-200 text-base mb-2 font-medium italic">Contact: <a href="mailto:Aidangwalter@icloud.com" className="text-sky-400">Aidangwalter@icloud.com</a></p>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em] font-bold">&copy; 2026 Aidan McClure. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// --- 2. MAIN APP CONTROLLER ---
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* PORTFOLIO REPORT */}
        <Route path="/project/portfolio" element={
          <ProjectPage 
            title="Portfolio 2.0"
            description="Goal: This project was a true test of everything I have learned so far in my journey as a developer. Beyond just being a fun build, I hope this platform showcases my attention to detail and helps me stand out from the rest as I transition into the professional engineering space."
            tech={["React 18", "Vite", "Tailwind CSS", "Vercel CI/CD"]}
            githubLink="https://github.com/Mcc-aid/Mcc-aid.github.io"
        
            architecture={[
              { 
                phase: "Vite Build Engine", 
                step: "Utilized Vite's Hot Module Replacement (HMR) and Rollup-based bundling to optimize asset loading and ensure a sub-second Time to Interactive (TTI)." 
              },
              { 
                phase: "Automated CI/CD", 
                step: "Configured a deployment pipeline where GitHub webhooks trigger Vercel build-bots on every push, ensuring the live site at mccaid.com is always in sync with the master branch." 
              }
            ]}
            logic={[
              { 
                header: "Component-Based Architecture", 
                body: "Refactored the entire UI into modular React components, allowing for independent scaling of the 'Technical Manifest' system without affecting the core landing page." 
              },
              { 
                header: "DNS & Production Routing", 
                body: "Managed the domain migration to Vercel's edge network, configuring custom CNAME records and SSL termination to ensure secure, low-latency access globally." 
              }
            ]}
          />
        } />

        {/* SIC ASSEMBLER REPORT */}
        <Route path="/project/assembler" element={
          <ProjectPage 
            title="SIC Assembler"
            description="A low-level systems programming project designed to translate mnemonic instructions into machine-executable hex code for the SIC architecture."
            tech={["C Language", "Systems Programming", "Hex Conversion", "Algorithms"]}
            githubLink="https://github.com/mcc-aid"
            architecture={[
              { phase: "Pass 1: SYMTAB", step: "The scanner identifies labels and assigns memory addresses to build the Symbol Table." },
              { phase: "Pass 2: Code Gen", step: "Translates opcodes and addresses into machine code to generate HTE records." }
            ]}
            logic={[
              { 
                header: "Memory Allocation", 
                body: "Managed static and relative addressing to ensure object code aligns with SIC memory constraints." 
              },
              { 
                header: "Instruction Parsing", 
                body: "Built a robust C-based parser to handle opcode lookup tables and operand extraction.", 
                snippet: "void passOne(char label[], char opcode[]) {\n  if(searchSYMTAB(label)) { error('Duplicate Label'); }\n  else { insertSYMTAB(label, LOCCTR); }\n}" 
              }
            ]}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;