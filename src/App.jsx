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
    { id: 'data', title: 'Data Management & Server Oversight', detail: 'Monitoring infrastructure health and optimizing internal data structures using CPanel and WHM to maintain 99.9% uptime.' },
    { id: 'web', title: 'Website Creation & Maintenance', detail: 'Building and scaling responsive web platforms using WordPress and Google Ai Studio with a focus on clean, modular architecture.' },
    { id: 'seo', title: 'In-house Site Migration', detail: 'Managing full-stack migrations by restoring legacy backups and reconfiguring DNS records.' }
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
                  Software Engineer <span className="text-slate-600 px-2">/</span> CS Student at the <span className="text-white border-b-2 border-slate-800 text-lg font-normal">University of
                    North Floirda
                  </span>
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

        {/* BACKGROUND SECTION */}
        <section className="mb-20 border-t border-slate-900 pt-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-sky-500 font-black mb-6">Background</h2>
          <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-5xl mb-12">
            Currently finishing my Bachelors in Computer Science at the University of North Florida. 
            When I'm not building AI pipelines or troubleshooting servers, I'm usually learning new kendama tricks, heading to concerts, or just hanging with friends outdoors.
          </p>

          {/* SKILLS SUB-SECTION (The Missing Piece) */}
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
              <Link to="/project/portfolio" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[View Technical Report]</Link>
            </div>
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">SIC Assembler</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">Two-pass systems software for instruction parsing and object code generation.</p>
              <Link to="/project/assembler" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[View Technical Report]</Link>
            </div>
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">Weather Forecast GUI</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">External API integration for real-time meteorological data visualization.</p>
              <Link to="/project/weather" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[View Technical Report]</Link>
            </div>
            <div className="group border border-zinc-900 p-8 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
              <h4 className="text-xl font-bold text-white mb-4 italic tracking-tight">Nutrition GUI V1</h4>
              <p className="text-sm text-zinc-400 font-light mb-6">A nutrional form with a GUI that tracks the users nutrional stats and stores them into a .csv</p>
              <Link to="/project/nutrition" className="text-[10px] tracking-[0.3em] uppercase text-sky-500 font-bold hover:text-white">[View technical Report]</Link>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
      <footer className="py-12 border-t border-slate-900 md:pl-20 lg:pl-32 pr-12 text-left">
        <p className="text-slate-200 text-base mb-2 font-medium italic">
          Contact: <a href="mailto:aidangwalter@icloud.com" className="text-sky-400 hover:text-white transition-colors">aidangwalter@icloud.com</a>
        </p>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em] font-bold">
          &copy; 2026 Aidan McClure. All Rights Reserved.
        </p>
      </footer>

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
        
        //--------------------------------------------Portfolio 2.0-------------------------------------------------------------        
        <Route path="/project/portfolio" element={
          <ProjectPage 
            title="Portfolio v2.0"
            description="A high-performance personal engineering portfolio built with a focus on modular component architecture, responsive design, and technical storytelling."
            tech={["React 18", "Tailwind CSS", "Framer Motion", "Lucide React"]}
            githubLink="https://github.com/Mcc-aid/portfolio-v2"
            
            architecture={[
              { 
                phase: "Atomic Component Structure", 
                step: `Architected the site using a modular 'ProjectPage' template component. This allows for rapid scaling—new projects can be deployed by passing unique data objects into a single, standardized logic-shell.` 
              },
              { 
                phase: "Responsive Grid Layout", 
                step: `Implemented a mobile-first responsive grid using Tailwind CSS. Utilized sticky sidebars and flexible text-stacking logic to ensure high readability across ultra-wide monitors and mobile devices.` 
              },
              { 
                phase: "Dynamic State Routing", 
                step: `Utilized React Router for seamless client-side navigation. Integrated custom state hooks to manage the 'Demo Mode' toggle, triggering smooth scrolling and visibility transitions.` 
              }
            ]}

            logic={[
              { 
                header: "01. Conditional Rendering Engine", 
                body: `Developed a robust conditional logic system for the 'Visual Artifacts' section. The system detects media types (video vs. image) and handles null-states, ensuring the gallery only renders when assets are present and the user requests a demo.`,
                snippet: `{showDemo && media && (
          <section id="gallery" className="animate-in fade-in slide-in-from-bottom-8">
            {media.map((item) => item.type === 'video' ? <video /> : <img />)}
          </section>
        )}`
              },
              { 
                header: "02. Layout Stacking Logic", 
                body: `Optimized the 'Technical Manifest' view by stacking architecture and logic sections vertically on wide screens. This utilizes white space effectively and creates a 'documentation' feel that caters to technical recruiters.`,
                snippet: `<div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-1/3 lg:sticky"> // Sticky Sidebar
          <div className="lg:w-2/3 space-y-24"> // Stacked Content
        </div>`
              },
              { 
                header: "03. Interactive Motion Design", 
                body: `Integrated subtle CSS transitions and Lucide-icon hover states to provide tactile feedback. This enhances the 'Tactical UI' aesthetic while maintaining high performance and accessibility (a11y) standards.`,
                snippet: `<button className="hover:bordersky-500/50 hover:bg-sky-500/10 transit-all active:scale-95">
          <Eye size={18} className="group-hover:text-sky-400" />
        </button>`
              }
            ]}
          />
        } />

        //--------------------------------------------SIC Assembler Project-------------------------------------------------------------
        <Route path="/project/assembler" element={
          <ProjectPage 
            title="SIC Assembler"
            description="Translating mnemonic assembly into machine-executable hex code for the SIC architecture."
            tech={["C Language", "Systems Programming", "Hex Conversion"]}
            githubLink="https://github.com/Mcc-aid/SIC-driver"
            architecture={[
            { 
              phase: "Two-Pass Compilation Strategy", 
              step: "Engineered a robust dual-pass scanning architecture."
              + "Pass 1 focuses on symbol definition and Location Counter (LOCCTR) management to establish the Symbol Table (SYMTAB)." 
              + "Pass 2 performs the actual translation of mnemonics into object code by cross-referencing the Opcode Table (OPTAB)."
            },
            { 
              phase: "Hexadecimal Address Mapping", 
              step: "Developed a custom addressing engine to handle SIC’s 24-bit instruction format."
              + "The system ensures that all labels, constants (BYTE/WORD),"
              + "and reserved blocks (RESB/RESW) are correctly mapped to contiguous hexadecimal memory addresses."
            },
            { 
              phase: "Data Structure Optimization", 
              step: "Utilized efficient data structures in C to handle symbol lookups."
              + "By structuring the SYMTAB and OPTAB effectively, the assembler achieves near-instantaneous translation speeds,"
              + "minimizing the overhead of repeated string comparisons during the parsing phases."
            }
          ]}

            logic={[
              { 
                header: "01. Mnemonic-to-Opcode Translation", 
                body: "The core logic utilizes a string-parsing engine to extract mnemonics and operands from the source file."
                + "it translates human-readable instructions (like LDA, STA, JSUB) into their corresponding machine-level hexadecimal opcodes using a constant-time lookup strategy." 
              },
              { 
                header: "02. HTE Record Generation", 
                body: "Engineered the logic to output standardized HTE (Header, Text, End) records."
                + "This includes calculating record lengths and verifying that the starting address and program length are correctly formatted for the SIC loader to execute."
              },
              { 
                header: "03. Literal and Directive Handling", 
                body: "Implemented logic for assembler directives (START, END, BYTE, WORD)."
                + "The system differentiates between executable instructions and data storage requests,"
                + "ensuring that the memory counter increments correctly based on the specific data type or reservation size requested."
              }
            ]}
          />
        } />

        //--------------------------------------------Weather Gui Project-------------------------------------------------------------
        <Route path="/project/weather" element={
          <ProjectPage 
            title="Weather Forecast GUI"
            description="Software Engineering project focused on clean API consumption and presenting meteorological data sets."
            tech={["Java", "JavaFX", "OpenWeather API"]}
            githubLink="https://github.com/Mcc-aid/WeatherApp"
            
            media={[
              {
                type: 'video', 
                url: '/project_demos/weather-demo.mp4', // Points to public/project_demos/...
                caption: 'Live demo: Fetching meteorological data via RESTful API'
              },
            ]}
            
            architecture={[
            { 
              phase: "MVC Design Pattern", 
              step: "Decoupled the UI (JavaFX) from the backend logic to ensure that changes to the OpenWeather API schema don't break the frontend rendering." 
            },
            { 
              phase: "Multi-Threaded Execution", 
              step: "Implemented Task concurrency to offload network latency from the Application Thread, preventing 'UI Freezing' during large JSON payload retrievals." 
            },
            { 
              phase: "Exception Handling Layer", 
              step: "Built a robust error-catching system for 404 (City Not Found) and 401 (Invalid API Key) responses to provide graceful user feedback instead of system crashes." 
            }
          ]}

            logic={[
              { 
                header: "01. Authentication & Handshake", 
                body: "The system initiates a secure handshake with the OpenWeather API using an encrypted key. Upon verification, the app establishes a listener for user-defined location parameters." 
              },
              { 
                header: "02. Search & Fetch Protocol", 
                body: "When a city is entered, the logic triggers an asynchronous GET request. By using non-blocking I/O, the GUI remains fully interactive while the data stream is being parsed in the background." 
              },
              { 
                header: "03. Data Visualization", 
                body: "Raw JSON is converted into local objects. The system then dynamically selects high-definition SVG assets (weather icons) based on the 'weather_id' returned, ensuring the UI accurately reflects live conditions." 
              }
            ]}
          />
        } />

        //--------------------------------------------Nutrition Project-------------------------------------------------------------
        <Route path="/project/nutrition" element={
          <ProjectPage 
            title="Nutrition GUI"
            description="My first venture into graphical user interfaces, focusing on event-driven programming."
            tech={["Java", "Swing/AWT", "File I/O"]}
            githubLink="https://github.com/Mcc-aid/Nutrition-gui"

            media={[
              {
                type: 'video', 
                url: '/project_demos/nutrition-demo.mp4', 
                caption: 'Live demo: Using a JavaSwing GUI to process data and store it in a .csv file'
              },
            ]}
            
            architecture={[
            { 
              phase: "Component Diversity & Swing Framework", 
              step: "Developed a multi-modal data entry interface utilizing a variety of Java Swing components"
              + "(JSlider, JSpinner, JComboBox, JRadioButton). This demonstrates a deep understanding of the Swing class"
              + "hierarchy and how to synchronize disparate component states within a single JFrame."
            },
            { 
              phase: "Layout Management", 
              step: "Implemented a structured layout strategy to ensure aesthetic consistency and user accessibility."
              + "By managing the vertical flow of the survey, the system guides the user through distinct logical blocks"
              + "(Personal Info vs. Dietary Metrics), minimizing cognitive load."
            },
            { 
              phase: "State Aggregation", 
              step: "Engineered a submission layer that polls the state of every individual UI component upon the Submit event."
              + "This involves mapping slider integers, checkbox booleans, and string inputs into a single unified data object for processing." 
            }
          ]}

            logic={[
              { 
                header: "01. Dynamic Range Handling", 
                body: "The system utilizes a JSlider with custom tick marks and a JSpinner for numerical input. The logic restricts user input to logical bounds"
                + "(e.g., 0-10 meals per day), eliminating the need for complex post-entry string validation and preventing junk data from entering the system."
              },
              { 
                header: "02. Event-Driven \"Clear\" Protocol", 
                body: "When a city is entered, the logic triggers an asynchronous GET request. By using non-blocking I/O, the GUI remains fully interactive while the data stream is being parsed in the background." 
              },
              { 
                header: "03. Multi-Selection Logic (Checkboxes)", 
                body: "Developed an array-based selection logic for dietary constraints (Dairy, Wheat, Sugar)."
                + "The system evaluates the isSelected() state of each checkbox independently, allowing for a flexible,"
                + "multi-choice data profile that standard radio buttons cannot provide." 
              }
            ]}

          />
        } />
      </Routes>
    </Router>
  );
}

export default App;