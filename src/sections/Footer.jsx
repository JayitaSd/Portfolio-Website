import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-left">
                    <h3 className="footer-name">Jayita Sadani</h3>
                    <p className="footer-tagline">Full Stack Developer & AI Enthusiast</p>
                </div>

                <div className="footer-center">
                    <div className="footer-socials">
                        <a
                            href="https://www.linkedin.com/in/jayita-sadani-62905b343/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com/JayitaSd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:jayita.sadani.work@gmail.com"
                            className="footer-social-link"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                        {/*
                            <a
                            href="https://leetcode.com/u/JayitaS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode />
                        </a>
                        */}
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Jayita Sadani
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;