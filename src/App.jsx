import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Music, Download, ChevronDown, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import profilePic from './assets/pfp.jfif';
import ProjectPage from './ProjectPage';

//used to track site traffic
import { Analytics } from "@vercel/analytics/react";

// Ambient background layers (aurora + grid + scanline) shared by both views
const Ambient = () => (
  <>
    <div className="aurora a1" /><div className="aurora a2" />
    <div className="grid-bg" /><div className="scan" />
  </>
);

// --- 1. THE HOME COMPONENT (Landing Page) ---
const Home = () => {
  const [openId, setOpenId] = useState('ai');
  const [activeId, setActiveId] = useState('background');
  const [rail, setRail] = useState({ top: 0, height: 0 });
  const [dotTop, setDotTop] = useState(0);

  // Watch which section is centered in the viewport
  useEffect(() => {
    const ids = ['background', 'experience', 'projects'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Size the rail and slide the single dot to the active section
  useEffect(() => {
    const place = () => {
      const first = document.getElementById('background');
      const last = document.getElementById('projects');
      const current = document.getElementById(activeId);
      if (first && last) setRail({ top: first.offsetTop - 8, height: (last.offsetTop - first.offsetTop) + 20 });
      if (current) setDotTop(current.offsetTop + 7);
    };
    place();
    window.addEventListener('resize', place);
    window.addEventListener('load', place);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('load', place);
    };
  }, [activeId]);

  const internshipBullets = [
    { id: 'ai', title: 'AI Automation & Systems Integration', detail: 'SmartSites: Architecting automated pipelines using n8n and OpenAI to transform raw user data into fully functional websites.' },
    { id: 'data', title: 'Data Management & Server Oversight', detail: 'Monitoring infrastructure health and optimizing internal data structures using CPanel and WHM to maintain 99.9% uptime.' },
    { id: 'web', title: 'Website Creation & Maintenance', detail: 'Building and scaling responsive web platforms using WordPress and Google AI Studio with a focus on clean, modular architecture.' },
    { id: 'seo', title: 'In-house Site Migration', detail: 'Managing full-stack migrations by restoring legacy backups and reconfiguring DNS records.' }
  ];

  const languages = ["Java", "JavaScript", "C/C++", "Python", "PHP", "HTML & CSS", "Oracle SQL"];
  const tools = ["Unix", "Google Cloud", "AI Studio", "App Script", "RESTful APIs", "n8n", "Zapier", "SEO"];

  const projects = [
    { idx: '01', lead: true, title: 'Portfolio 2.0', desc: 'This site — a high-performance React application with automated Vercel CI/CD pipelines.', tech: ['React', 'Vite', 'Tailwind'], to: '/project/portfolio' },
    { idx: '02', title: 'SIC Assembler', desc: 'Two-pass systems software for instruction parsing and object code generation.', tech: ['C', 'Systems'], to: '/project/assembler' },
    { idx: '03', title: 'Weather Forecast GUI', desc: 'External API integration for real-time meteorological data visualization.', tech: ['Java', 'JavaFX', 'REST'], to: '/project/weather' },
    { idx: '04', title: 'Nutrition GUI v1', desc: 'A nutrition form with a GUI that tracks the user\u2019s nutritional stats and stores them into a .csv.', tech: ['Java', 'Swing', 'CSV'], to: '/project/nutrition' }
  ];

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="cd">
      <Ambient />

      {/* STATUS BAR */}
      <div className="statusbar">
        <span className="sb-name">AIDAN McCLURE</span><span className="sep">/</span>
        <span>SOLUTIONS ARCHITECT · SWE</span><span className="sep">/</span>
        <span>JACKSONVILLE, FL</span>
        <span className="live"><span className="dot-live" /> ONLINE — SYS.OK</span>
      </div>

      <div className="wrap">
        <div className="main">
          <div className="rail" style={{ top: rail.top, height: rail.height }} />
          <div className="scrolldot" style={{ top: dotTop }} />

          {/* HERO */}
          <header className="hero reveal" style={{ animationDelay: '40ms' }}>
            <div className="hero-top">
              <div className="hero-id">
                <div className="chip">
                  <img src={profilePic} alt="Aidan McClure" />
                </div>
                <div>
                  <h1 className="hname">Aidan<br />McClure</h1>
                  <p className="hrole">
                    <b>Solutions Architect</b><span className="slash">/</span>Software Engineer<br />
                    B.S. Computer Science <span className="slash">·</span> University of North Florida
                  </p>
                </div>
              </div>

              <div className="social">
                <a className="ic" href="https://github.com/Mcc-aid" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} strokeWidth={1.6} /></a>
                <a className="ic" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} strokeWidth={1.6} /></a>
                <a className="ic" href="mailto:aidangwalter@icloud.com" aria-label="Email"><Mail size={19} strokeWidth={1.6} /></a>
                <a className="ic" href="https://open.spotify.com/user/by0dw8mqfguu2575d5t0eil09?si=FgdsHb5dS1KPYs9bfmKD6A&utm_source=sms" aria-label="Music"><Music size={19} strokeWidth={1.6} /></a>
                <span className="rdiv" />
                <a className="resume" href="/Aidan_McClure_Resume.pdf" download><Download size={14} /> Resume</a>
              </div>
            </div>
          </header>

          {/* BACKGROUND */}
          <section id="background" className="sec reveal" style={{ animationDelay: '120ms' }}>
            <div className="eyebrow"><span className="idx">01</span><span className="lbl">Background</span></div>
            <p className="lede">
              I recently graduated from the University of North Florida with a Bachelor of Science in Computer Science and a minor in Business Management.
              I am motivated to pursue new challenges and further develop my professional skills.
              In my free time, I enjoy playing kendama, attending concerts, and engaging in social activities with friends.
            </p>
            <div className="skillgrid">
              <div>
                <div className="skhead"><Code2 size={15} /> Languages</div>
                <div className="tags">{languages.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
              </div>
              <div>
                <div className="skhead"><Terminal size={15} /> Tools &amp; Platforms</div>
                <div className="tags">{tools.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="sec reveal" style={{ animationDelay: '180ms' }}>
            <div className="eyebrow"><span className="idx">02</span><span className="lbl">Experience</span></div>
            <div className="exp">
              <div className="job now">
                <span className="jnode" />
                <div className="jrow">
                  <span className="jtitle">Solutions Architect Intern</span>
                  <span className="jdate">JAN 2025 — PRESENT</span>
                </div>
                <div className="jco">Custom Design Partners</div>
                {internshipBullets.map((bullet) => (
                  <button
                    key={bullet.id}
                    type="button"
                    className={`bullet${openId === bullet.id ? ' open' : ''}`}
                    aria-expanded={openId === bullet.id}
                    onClick={() => toggle(bullet.id)}
                  >
                    <div className="bhead">
                      <span className="bt">{bullet.title}</span>
                      <ChevronDown className="bchev" size={16} />
                    </div>
                    <div className="bbody"><p>{bullet.detail}</p></div>
                  </button>
                ))}
              </div>

              <div className="job past">
                <span className="jnode" />
                <div className="jrow">
                  <span className="jtitle">Trusted Advisor / Technician</span>
                  <span className="jdate">2022 — PRESENT</span>
                </div>
                <div className="jco">Batteries Plus</div>
                <ul className="plist">
                  <li>Phone, tablet &amp; computer repair</li>
                  <li>Key-fob cutting and programming</li>
                  <li>Entry-level mechanic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="sec reveal" style={{ animationDelay: '240ms' }}>
            <div className="eyebrow"><span className="idx">03</span><span className="lbl">Technical Projects</span></div>
            <div className="pgrid">
              {projects.map((p) => (
                <Link to={p.to} key={p.idx} className={`card${p.lead ? ' lead' : ''}`}>
                  <div className="crow"><span className="cidx">PRJ · {p.idx}</span></div>
                  <h3 className="ctitle">{p.title}</h3>
                  <p className="cdesc">{p.desc}</p>
                  <div className="ctech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  <span className="clink">View report <ArrowUpRight size={13} /></span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="foot reveal" style={{ animationDelay: '300ms' }}>
          <p className="fmail">Contact — <a href="mailto:aidangwalter@icloud.com">aidangwalter@icloud.com</a></p>
          <p className="fcopy">© 2026 Aidan McClure · All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

// --- 2. THE MAIN APP CONTROLLER ---
function App() {
  return (
    <Router>

      <Analytics />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* -------------------- Portfolio 2.0 -------------------- */}
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
                snippet: `<button className="hover:border-sky-500/50 hover:bg-sky-500/10 transition-all active:scale-95">
  <Eye size={18} className="group-hover:text-sky-400" />
</button>`
              }
            ]}
          />
        } />

        {/* -------------------- SIC Assembler -------------------- */}
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
                  + " Pass 1 focuses on symbol definition and Location Counter (LOCCTR) management to establish the Symbol Table (SYMTAB)."
                  + " Pass 2 performs the actual translation of mnemonics into object code by cross-referencing the Opcode Table (OPTAB)."
              },
              {
                phase: "Hexadecimal Address Mapping",
                step: "Developed a custom addressing engine to handle SIC’s 24-bit instruction format."
                  + " The system ensures that all labels, constants (BYTE/WORD),"
                  + " and reserved blocks (RESB/RESW) are correctly mapped to contiguous hexadecimal memory addresses."
              },
              {
                phase: "Data Structure Optimization",
                step: "Utilized efficient data structures in C to handle symbol lookups."
                  + " By structuring the SYMTAB and OPTAB effectively, the assembler achieves near-instantaneous translation speeds,"
                  + " minimizing the overhead of repeated string comparisons during the parsing phases."
              }
            ]}

            logic={[
              {
                header: "01. Mnemonic-to-Opcode Translation",
                body: "The core logic utilizes a string-parsing engine to extract mnemonics and operands from the source file."
                  + " It translates human-readable instructions (like LDA, STA, JSUB) into their corresponding machine-level hexadecimal opcodes using a constant-time lookup strategy."
              },
              {
                header: "02. HTE Record Generation",
                body: "Engineered the logic to output standardized HTE (Header, Text, End) records."
                  + " This includes calculating record lengths and verifying that the starting address and program length are correctly formatted for the SIC loader to execute."
              },
              {
                header: "03. Literal and Directive Handling",
                body: "Implemented logic for assembler directives (START, END, BYTE, WORD)."
                  + " The system differentiates between executable instructions and data storage requests,"
                  + " ensuring that the memory counter increments correctly based on the specific data type or reservation size requested."
              }
            ]}
          />
        } />

        {/* -------------------- Weather Forecast GUI -------------------- */}
        <Route path="/project/weather" element={
          <ProjectPage
            title="Weather Forecast GUI"
            description="Software Engineering project focused on clean API consumption and presenting meteorological data sets."
            tech={["Java", "JavaFX", "OpenWeather API"]}
            githubLink="https://github.com/Mcc-aid/WeatherApp"

            media={[
              {
                type: 'video',
                url: '/project_demos/weather-demo.mp4',
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

        {/* -------------------- Nutrition GUI -------------------- */}
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
                caption: 'Live demo: Using a Java Swing GUI to process data and store it in a .csv file'
              },
            ]}

            architecture={[
              {
                phase: "Component Diversity & Swing Framework",
                step: "Developed a multi-modal data entry interface utilizing a variety of Java Swing components"
                  + " (JSlider, JSpinner, JComboBox, JRadioButton). This demonstrates a deep understanding of the Swing class"
                  + " hierarchy and how to synchronize disparate component states within a single JFrame."
              },
              {
                phase: "Layout Management",
                step: "Implemented a structured layout strategy to ensure aesthetic consistency and user accessibility."
                  + " By managing the vertical flow of the survey, the system guides the user through distinct logical blocks"
                  + " (Personal Info vs. Dietary Metrics), minimizing cognitive load."
              },
              {
                phase: "State Aggregation",
                step: "Engineered a submission layer that polls the state of every individual UI component upon the Submit event."
                  + " This involves mapping slider integers, checkbox booleans, and string inputs into a single unified data object for processing."
              }
            ]}

            logic={[
              {
                header: "01. Dynamic Range Handling",
                body: "The system utilizes a JSlider with custom tick marks and a JSpinner for numerical input. The logic restricts user input to logical bounds"
                  + " (e.g., 0-10 meals per day), eliminating the need for complex post-entry string validation and preventing junk data from entering the system."
              },
              {
                header: "02. Event-Driven \"Clear\" Protocol",
                body: "A single Clear action resets every component to its default state, iterating through the form's control references"
                  + " and restoring initial values so the user can start a fresh entry without reloading the application."
              },
              {
                header: "03. Multi-Selection Logic (Checkboxes)",
                body: "Developed an array-based selection logic for dietary constraints (Dairy, Wheat, Sugar)."
                  + " The system evaluates the isSelected() state of each checkbox independently, allowing for a flexible,"
                  + " multi-choice data profile that standard radio buttons cannot provide."
              }
            ]}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
