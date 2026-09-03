import { experience } from '../data/portfolio';

function ExperienceList() {
  return (
    <div className="experience-list">
      {experience.map((entry) => (
        <article className="experience-entry" key={`${entry.company}-${entry.role}-${entry.dates}`}>
          <div className="experience-summary">
            <p className="experience-date">{entry.dates}</p>
            <h3>{entry.role}</h3>
            <p className="experience-company">{entry.company}</p>
            <p className="experience-meta">
              {entry.employmentType} · {entry.duration}
              <span>{entry.location}</span>
            </p>
          </div>

          <ul className="experience-highlights">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default ExperienceList;
