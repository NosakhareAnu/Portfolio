import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card-featured' : ''}`} data-reveal>
      <div className="project-card-top">
        <div className="project-labels">
          <span className="project-type">{project.classification}</span>
          <span className="project-context">{project.context}</span>
        </div>
        <span className="project-index" aria-hidden="true">
          {project.order}
        </span>
      </div>

      <div className="project-copy">
        <h3>
          <Link className="project-card-link" to={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.cardDescription}</p>
      </div>

      <div className="project-card-footer">
        <ul className="tag-list" aria-label={`${project.name} disciplines`}>
          {project.disciplines.map((discipline) => (
            <li key={discipline}>{discipline}</li>
          ))}
        </ul>
        <span className="project-cta" aria-hidden="true">
          View case study
          <ArrowUpRight size={17} />
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;
