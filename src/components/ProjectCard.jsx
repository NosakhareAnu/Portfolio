import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-image-placeholder">Project Preview</div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-buttons">
          {project.hasDetails && (
            <button onClick={() => onViewDetails(project.id)} className="btn btn-primary">
              View Details
              <ArrowRight size={18} />
            </button>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;