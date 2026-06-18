import {crypto, parallel, rag, voice, truth, nike} from "../assets";
import {voc, edunet} from "../assets/icons"

export const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#tech", label: "TECH STACK" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#experience", label: "EXPERIENCE" },
    {href: "#connect", label: "CONNECT"},
];

export const projects = [
    {
        id: 1,
        name: 'ParallelCode',
        image: parallel,
        description: 'Real-time collaborative code editor with instant synchronization using WebSockets, Redis, and Spring Boot. Features Monaco Editor, JWT auth, and multi-user editing.',
        stack: ['React', 'Tailwind CSS', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
        githubLink: 'https://github.com/JayitaSd/ParallelCode',
    },
    {
        id: 2,
        name: 'SRAI-Spring Retrieval AI',
        image: rag,
        description: 'Retrieval-Augmented Generation (RAG) application using Spring AI, Spring Boot and Google Gemini. Answers questions grounded in your documents with HyDE and vector search.',
        stack: ['Spring Boot', 'Spring AI', 'Gemini'],
        githubLink: 'https://github.com/JayitaSd/SRAI',
    },
    {
        id: 3,
        name: 'CryptoSimulator',
        image: crypto,
        description: 'Real-time cryptocurrency market data simulator. Streams live price updates from CSV data using Redis and WebSocket with interactive React dashboard.',
        stack: ['Spring Boot', 'Redis', 'WebSocket','Tailwind CSS','React'],
        githubLink: 'https://github.com/JayitaSd/Crytosimulator',
    },
    {
        id: 4,
        name: 'Voice Assistant',
        image: voice,
        description: 'Real-time voice assistant powered by ElevenLabs Conversational AI. Features speech recognition, LLM responses, and natural text-to-speech synthesis.',
        stack: ['Python', 'AI', 'Eleven Labs'],
        githubLink: 'https://github.com/JayitaSd/Voice_Assistant',
    },
    {
        id: 5,
        name: 'TruthGuard',
        image: truth,
        description: 'AI-powered fact-checking and truth verification tool. Supports single verification, bulk verification and image ocr. Helps users validate information and combat misinformation.',
        stack: ['Python', 'AI', 'Ocr', 'HTML','CSS','JavaScript'],
        githubLink: 'https://github.com/JayitaSd/TruthGuard',
    },
    {
        id: 6,
        name: 'Nike',
        image: nike,
        description: 'Modern responsive Nike product landing page with interactive shoe selection, color switcher, and smooth animations built with React and Tailwind CSS.',
        stack: ['React','Tailwind CSS'],
        githubLink: 'https://github.com/JayitaSd/Nike',
    }
];

export const experience = [
    {
        title: "Web Developer Intern",
        company_name: "Vault of Codes",
        icon: voc,
        iconBg: "#E6DEDD",
        date: "Aug 2025 - Sep 2025",
        points: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ]
    },
    {
        title: "AI & Data Analyst Intern",
        company_name: "Edunet Foundation",
        icon: edunet,
        iconBg: "#E6DEDD",
        date: "Sep 2025 - Oct 2025",
        points: [
            "Built and evaluated machine learning models using Python anad related libraries.",
            "Performed exploratory data analysis (EDA) to uncover patterns and derive actionable insights from structured datasets.",
        ]
    }
];
