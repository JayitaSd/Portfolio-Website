import { useState, useEffect } from 'react';

const codeLines = [
    { code: 'async function findSuccess() {',              color: 'text-yellow-300' },
    { code: '  const goal = await chase(dream);',         color: 'text-green-400' },
    { code: '',                                            color: '' },
    { code: '  try {',                                    color: 'text-yellow-300' },
    { code: '    if (goal.achieved) {',                   color: 'text-blue-300' },
    { code: '      return "✅ Success unlocked.";',       color: 'text-green-400' },
    { code: '    }',                                      color: 'text-blue-300' },
    { code: '  } catch (setback) {',                      color: 'text-red-400' },
    { code: '    console.warn("Not found yet.");',        color: 'text-orange-300' },
    { code: '    return stillTrying();',                  color: 'text-purple-300' },
    { code: '  } finally {',                              color: 'text-yellow-300' },
    { code: '    neverGiveUp();',                         color: 'text-green-300' },
    { code: '  }',                                        color: 'text-yellow-300' },
    { code: '}',                                          color: 'text-yellow-300' },
];

const IDE = () => {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        if (visibleLines < codeLines.length) {
            const t = setTimeout(() => setVisibleLines(v => v + 1), 120);
            return () => clearTimeout(t);
        }
    }, [visibleLines]);

    return (
        <div className="ide-window">
            {/* Title bar */}
            <div className="ide-titlebar">
                <span className="ide-dot" style={{ background: '#ff5f57' }} />
                <span className="ide-dot" style={{ background: '#febc2e' }} />
                <span className="ide-dot" style={{ background: '#28c840' }} />
                <span className="ide-filename">Target.js</span>
            </div>

            {/* Code body */}
            <div className="ide-body-wrapper">
                <div className="ide-body">
                    {codeLines.slice(0, visibleLines).map((line, i) => (
                        <div key={i} className="ide-line">
                            <span className="ide-linenum">{i + 1}</span>
                            <span className={line.color}>{line.code}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Typing animation hook with smooth reveal
const useTyping = (text, speed = 30, delay = 0) => {
    const [displayText, setDisplayText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeout;
        let interval;

        const startTyping = () => {
            let index = 0;
            setDisplayText('');
            setIsVisible(true);

            interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
        };

        timeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, delay]);

    return displayText;
};

// TypingText component without cursor
const TypingText = ({ text, className, speed = 30, delay = 0 }) => {
    const displayText = useTyping(text, speed, delay);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

const Hero = () => {
    return (
        <div className="hero-wrapper">
            {/* Left */}
            <div className="hero-left">
                <TypingText
                    text="Hi, I am"
                    className="hero-greeting"
                    speed={40}
                    delay={300}
                />
                <TypingText
                    text="Jayita Sadani"
                    className="hero-name"
                    speed={50}
                    delay={700}
                />
                <div className="hero-role-wrapper">
                    <TypingText
                        text="Full Stack Developer & AI Enthusiast"
                        className="hero-role"
                        speed={35}
                        delay={1300}
                    />
                </div>

                <div className="hero-sub-wrapper">
                    <TypingText
                        text="Building interfaces users love,"
                        className="hero-sub"
                        speed={25}
                        delay={2500}
                    />
                    <TypingText
                        text="backed by systems that scale."
                        className="hero-sub"
                        speed={25}
                        delay={3000}
                    />
                </div>
            </div>

            {/* Right */}
            <div className="hero-right">
                <IDE />
            </div>
        </div>
    );
};

export default Hero;