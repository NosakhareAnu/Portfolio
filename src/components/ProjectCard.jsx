import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectVisual from './ProjectVisual';

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card-featured' : ''}`}>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <p className="project-type">{project.classification}</p>
        <h3><Link className="project-card-link" to={`/projects/${project.slug}`}>{project.name}</Link></h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.cardDescription}</p>
        <dl className="project-summary">
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          <div><dt>{project.stackLabel}</dt><dd>{project.stack.join(', ')}</dd></div>
        </dl>
        {project.cardNote && <p className="project-note">{project.cardNote}</p>}
        <span className="project-cta" aria-hidden="true">View case study <ArrowUpRight size={18} /></span>
      </div>
    </article>
  );
}

export default ProjectCard;
