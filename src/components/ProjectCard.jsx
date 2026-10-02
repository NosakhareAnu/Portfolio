import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  // Skip the context line when it only repeats the classification (e.g. "Self-directed design exploration").
  const showContext = !project.context.toLowerCase().includes(project.classification.toLowerCase());

  return (
    <article className={`project-card${project.featured ? ' project-card-featured' : ''}`} data-reveal>
      <p className="project-labels">
        <span className="project-type">{project.classification}</span>
        {showContext && <span className="project-context">{project.context}</span>}
      </p>

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
        <p className="project-stack">
          <span className="project-stack-label">{project.stackLabel}</span>
          {project.stack.join(', ')}
          {project.cardNote && <span className="project-note">{project.cardNote}</span>}
        </p>
        <span className="project-cta" aria-hidden="true">
          View case study
          <ArrowUpRight size={17} />
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;
