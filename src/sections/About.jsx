import { useState } from 'react';

const tabs = [
    {
        id: 'who',
        label: '01. Who',
        heading: 'Engineer by instinct.',
        body: `Third-year Computer Engineering student at Thadomal Shahani Engineering College, Mumbai CGPA 9.1/10. I gravitate toward the hard problems: distributed systems, real-time architecture, AI integration. Not just building things, but understanding why they work.`,
    },
    {
        id: 'what',
        label: '02. What',
        heading: 'Full stack, backend-first.',
        body: `I build end-to-end from pixel-precise React interfaces to production-grade Spring Boot APIs. My comfort zone is the backend: scalable REST services, WebSocket systems, RAG pipelines, JWT-secured auth flows. The frontend is where I make it usable. The backend is where I make it real.`,
    },
    {
        id: 'why',
        label: '03. Why',
        heading: 'Ownership over everything.',
        body: `I want to work on teams that build things that matter high-performance backends, AI-integrated products, systems that have to scale. I'm looking for environments where I can take ownership, make real architectural decisions, and grow alongside engineers who care about craft.`,
    },
];

const About = () => {
    const [active, setActive] = useState('who');
    const current = tabs.find(t => t.id === active);

    return (
        <div className="about-wrapper" id="about">
            <p className="section-eyebrow">ABOUT ME</p>
            <h2 className="section-heading">The person behind the code.</h2>

            {/* Tab Bar */}
            <div className="about-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`about-tab ${active === tab.id ? 'about-tab--active' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Panel */}
            <div className="about-panel">
                <h3 className="about-panel-heading">{current.heading}</h3>
                <p className="about-panel-body">{current.body}</p>
            </div>

            {/* Bottom stat strip */}
            <div className="about-stats">
                <div className="about-stat">
                    <span className="about-stat-number">9.1</span>
                    <span className="about-stat-label">CGPA / 10</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                    <span className="about-stat-number">2</span>
                    <span className="about-stat-label">Internships</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                    <span className="about-stat-number">BE</span>
                    <span className="about-stat-label">Computer Engg · 2027</span>
                </div>
            </div>
        </div>
    );
};

export default About;