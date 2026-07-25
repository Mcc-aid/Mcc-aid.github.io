import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Layers, Cpu, PlayCircle, Eye } from 'lucide-react';

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

  const slug = title?.replace(/\s+/g, '_').toUpperCase();

  return (
    <div className="cd">
      <div className="aurora a1" /><div className="aurora a2" />
      <div className="grid-bg" /><div className="scan" />

      <div className="pp">
        {/* NAV */}
        <nav className="pp-nav reveal">
          <Link to="/" className="back"><ArrowLeft size={14} /> Back to home</Link>
          <span className="pp-tag">PORTFOLIO_2.0 // {slug}</span>
        </nav>

        {/* TITLE + META */}
        <h1 className="pp-title reveal" style={{ animationDelay: '40ms' }}>{title}</h1>
        <p className="pp-desc reveal" style={{ animationDelay: '80ms' }}>{description}</p>

        <div className="pp-meta reveal" style={{ animationDelay: '120ms' }}>
          {tech?.map((item) => <span className="tag" key={item}>{item}</span>)}

          <a className="btn btn-grad" href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github size={14} /> Repository
          </a>

          {media && media.length > 0 && (
            <button type="button" className="btn btn-ghost" onClick={handleDemoClick}>
              <Eye size={14} /> {showDemo ? 'Close demo' : 'View demo'}
            </button>
          )}

          {liveLink && (
            <a className="btn btn-live" href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} /> Live system
            </a>
          )}
        </div>

        {/* ARCHITECTURE */}
        <section className="pp-sec reveal" style={{ animationDelay: '160ms' }}>
          <div className="pp-eyebrow"><Layers size={15} /><span className="lbl">SYSTEM ARCHITECTURE</span></div>
          {architecture?.map((item, idx) => (
            <div className="step" key={idx}>
              <h3 className="sph"><span className="snum">PHASE 0{idx + 1}</span> {item.phase}</h3>
              <p>{item.step}</p>
            </div>
          ))}
        </section>

        {/* LOGIC */}
        <section className="pp-sec reveal" style={{ animationDelay: '200ms' }}>
          <div className="pp-eyebrow"><Cpu size={15} /><span className="lbl">LOGIC IMPLEMENTATION</span></div>
          {logic?.map((block, idx) => (
            <div className="logic" key={idx}>
              <h4>{block.header}</h4>
              <p>{block.body}</p>
              {block.snippet && <pre className="code">{block.snippet}</pre>}
            </div>
          ))}
        </section>

        {/* CONDITIONAL DEMO GALLERY */}
        {showDemo && media && media.length > 0 && (
          <section id="gallery" className="pp-sec reveal">
            <div className="pp-eyebrow"><PlayCircle size={15} /><span className="lbl">VISUAL ARTIFACTS // OPERATIONAL DEMO</span></div>
            <div className="gallery">
              {media.map((item, idx) => (
                <div key={idx}>
                  <div className="frame">
                    {item.type === 'video' ? (
                      <video controls>
                        <source src={item.url} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.url} alt="System artifact" />
                    )}
                  </div>
                  {item.caption && <p className="cap">{item.caption}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
