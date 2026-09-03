import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <article className={`project-row${project.featured ? ' project-row-featured' : ''}`}>
      <div className="project-index" aria-hidden="true">
        {project.order}
      </div>
      <div className="project-copy">
        <div className="project-labels">
          <span className="project-type">{project.classification}</span>
          <span className="project-context">{project.context}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.cardDescription}</p>
        <ul className="discipline-list" aria-label={`${project.name} disciplines`}>
          {project.disciplines.map((discipline) => (
            <li key={discipline}>{discipline}</li>
          ))}
        </ul>
      </div>
      <Link className="project-link" to={`/projects/${project.slug}`} aria-label={`Open ${project.name} project page`}>
        View project
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </article>
  );
}

export default ProjectCard;
