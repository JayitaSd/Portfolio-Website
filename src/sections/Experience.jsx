import { experience } from '../constants';
import { FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ experience, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className={`experience-card-wrapper ${isLeft ? 'left' : 'right'}`}>
            <div className="experience-timeline-line">
                <div className="experience-timeline-dot"></div>
            </div>

            <div className={`experience-card ${isLeft ? 'experience-card-left' : 'experience-card-right'}`}>
                <div className="experience-header">
                    <div className="experience-icon-wrapper" style={{ backgroundColor: experience.iconBg }}>
                        <img src={experience.icon} alt={experience.company_name} className="experience-icon" />
                    </div>
                    <div className="experience-title-group">
                        <h3 className="experience-title">{experience.title}</h3>
                        <p className="experience-company">{experience.company_name}</p>
                    </div>
                </div>

                <div className="experience-body">
                    <ul className="experience-points">
                        {experience.points.map((point, idx) => (
                            <li key={idx} className="experience-point">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="experience-footer">
                    <FaCalendarAlt className="calendar-icon" />
                    <span className="experience-date">{experience.date}</span>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="experience-wrapper " id="experience">
            <p className="section-eyebrow">EXPERIENCE</p>
            <h2 className="section-heading">Where I've worked.</h2>

            <div className="experience-timeline">
                {experience.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;