import { FaLinkedinIn, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Connect = () => {
    return (
        <div className="connect-wrapper" id="connect">
            <p className="section-eyebrow">CONNECT</p>
            <h2 className="section-heading">Let's build something together.</h2>

            <div className="connect-content">
                <p className="connect-description">
                    I'm always open to new opportunities, collaborations, or just a good tech conversation.
                    Feel free to reach out — let's create something impactful.
                </p>

                <div className="connect-buttons">
                    <a
                        href="https://www.linkedin.com/in/jayita-sadani-62905b343/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-btn linkedin"
                    >
                        <FaLinkedinIn className="connect-icon" />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/JayitaSd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-btn github"
                    >
                        <FaGithub className="connect-icon" />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="mailto:jayita.sadani.work@gmail.com"
                        className="connect-btn email"
                    >
                        <FaEnvelope className="connect-icon" />
                        <span>Email</span>
                    </a>
                    {/*
                    <a
                        href="https://leetcode.com/u/JayitaS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-btn leetcode"
                    >
                        <SiLeetcode className="connect-icon" />
                        <span>LeetCode</span>
                    </a>
                    */}
                    <a
                        href="https://drive.google.com/file/d/1e9NLq96v5T_pAihPll1-wTQhwUWPowbg/view?usp=drive_link"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="connect-btn resume"
                    >
                        <FaFileAlt className="connect-icon" />
                        <span>Resume</span>
                    </a>
                </div>

                <div className="connect-footer">
                    <p className="connect-footer-text">
                        Check out my work on <a href="https://github.com/JayitaSd" target="_blank" rel="noopener noreferrer">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/jayita-sadani-62905b343/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        Let's collaborate!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Connect;