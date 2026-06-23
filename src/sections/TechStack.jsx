const categories = [
    {
        label: 'Languages',
        items: [
            { name: 'Java',       logo: 'openjdk',     color: '#ED8B00', text: '#fff' },
            { name: 'Python',     logo: 'python',      color: '#3670A0', text: '#fff' },
            { name: 'C',          logo: 'c',           color: '#00599C', text: '#fff' },
            { name: 'JavaScript', logo: 'javascript',  color: '#323330', text: '#F7DF1E' },
        ],
    },
    {
        label: 'Frontend Development',
        items: [
            { name: 'React',       logo: 'react',         color: '#20232a', text: '#61DAFB' },
            { name: 'React Router',logo: 'reactrouter',   color: '#CA4245', text: '#fff' },
            { name: 'Vite',        logo: 'vite',          color: '#646CFF', text: '#fff' },
            { name: 'TailwindCSS', logo: 'tailwindcss',   color: '#38B2AC', text: '#fff' },
            { name: 'HTML5',       logo: 'html5',         color: '#E34F26', text: '#fff' },
            { name: 'CSS3',        logo: 'css3',          color: '#1572B6', text: '#fff' },
        ],
    },
    {
        label: 'Backend Development',
        items: [
            { name: 'Spring',      logo: 'spring',        color: '#6DB33F', text: '#fff' },
            { name: 'Spring Boot', logo: 'springboot',    color: '#6DB33F', text: '#fff' },
            { name: 'Hibernate',   logo: 'hibernate',     color: '#59666C', text: '#fff' },
            { name: 'Lombok',      logo: 'lombok',        color: '#000', text: '#fff' },
            { name: 'Maven',       logo: 'apachemaven',   color: '#C71A36', text: '#fff' },
            { name: 'Tomcat',      logo: 'apachetomcat',  color: '#000', text: '#fff' },
            { name: 'JWT',         logo: 'jsonwebtokens', color: '#000000', text: '#fff' },
            { name: 'REST',        logo: 'rest',          color: '#4A90D9', text: '#fff' },
            { name: 'WebSocket',   logo: 'websocket',     color: '#4A90D9', text: '#fff' },
        ],
    },
    {
        label: 'Databases',
        items: [
            { name: 'PostgreSQL',  logo: 'postgresql', color: '#316192', text: '#fff' },
            { name: 'MySQL',       logo: 'mysql',      color: '#4479A1', text: '#fff' },
            { name: 'Redis',       logo: 'redis',      color: '#DD0031', text: '#fff' },
            { name: 'SQLite',      logo: 'sqlite',     color: '#07405e', text: '#fff' },
            { name: 'MongoDB',     logo: 'mongodb',    color: '#4ea94b', text: '#fff' },
        ],
    },
    {
        label: 'AI/ML & Data Science',
        items: [
            { name: 'NumPy',       logo: 'numpy',       color: '#013243', text: '#fff' },
            { name: 'Pandas',      logo: 'pandas',      color: '#150458', text: '#fff' },
            { name: 'Matplotlib',  logo: 'matplotlib',  color: '#ffffff', text: '#000' }
        ],
    },
    {
        label: 'Cloud & DevOps',
        items: [
            { name: 'Docker',        logo: 'docker',        color: '#0db7ed', text: '#fff' },
            { name: 'GitHub Actions',logo: 'githubactions', color: '#2671E5', text: '#fff' },
            { name: 'Git',           logo: 'git',           color: '#F05033', text: '#fff' },
            { name: 'GitHub',        logo: 'github',        color: '#181717', text: '#fff' },
            { name: 'AWS',           logo: 'amazonaws',     color: '#FF9900', text: '#000' },
            { name: 'Vercel',        logo: 'vercel',        color: '#000000', text: '#fff' },
            { name: 'Netlify',       logo: 'netlify',       color: '#000000', text: '#fff' },
        ],
    },
    {
        label: 'Tools & Platforms',
        items: [
            { name: 'Postman',       logo: 'postman',       color: '#FF6C37', text: '#fff' },
            { name: 'Notion',        logo: 'notion',        color: '#000000', text: '#fff' },
            { name: 'Twilio',        logo: 'twilio',        color: '#F22F46', text: '#fff' },
            { name: 'IntelliJ',      logo: 'intellijidea',  color: '#000000', text: '#fff' },
            { name: 'PyCharm',       logo: 'pycharm',       color: '#000000', text: '#fff' },
            { name: 'VS Code',       logo: 'visualstudiocode', color: '#007ACC', text: '#fff' },
            { name: 'Canva',         logo: 'canva',         color: '#00C4CC', text: '#fff' },
        ],
    },
];

const Badge = ({ name, logo, color, text }) => (
    <div className="tech-badge" style={{ backgroundColor: color }}>
        <img
            src={`https://cdn.simpleicons.org/${logo}`}
            alt={name}
            width={18}
            height={18}
            style={{ filter: text === '#fff' ? 'brightness(0) invert(1)' : 'none' }}
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span style={{ color: text }}>{name}</span>
    </div>
);

const TechStack = () => (
    <div className="tech-wrapper" id="tech">
        <p className="section-eyebrow">TECH STACK</p>
        <h2 className="section-heading">Tools I build with.</h2>

        <div className="tech-categories">
            {categories.map(cat => (
                <div key={cat.label} className="tech-category">
                    <p className="tech-category-label">{cat.label}</p>
                    <div className="tech-badges">
                        {cat.items.map(item => (
                            <Badge key={item.name} {...item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default TechStack;