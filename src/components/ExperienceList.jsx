import { experience } from '../data/portfolio';

function ExperienceList() {
  return (
    <ol className="experience-list">
      {experience.map((entry) => (
        <li className="experience-entry" key={`${entry.company}-${entry.role}-${entry.dates}`}>
          <div className="experience-period">
            <p>{entry.dates}</p>
            <span>{entry.duration}</span>
          </div>
          <div className="experience-summary">
            <h3>{entry.role}</h3>
            <p className="experience-company">{entry.company}</p>
            <p className="experience-meta">
              {entry.employmentType} · {entry.location}
            </p>
          </div>

          <ul className="experience-highlights">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default ExperienceList;
