// Explanatory diagrams of documented project flows, not product screenshots.
function ProjectVisual({ project }) {
  const { visual } = project;
  if (!visual) return null;

  return (
    <figure className={`project-visual visual-${visual.theme}`} aria-label={`${project.name}: ${visual.caption.toLowerCase()} diagram`}>
      <div className="visual-heading">
        <span>{project.name}</span>
        <span>{project.classification}</span>
      </div>
      <p className="visual-headline">{visual.headline}</p>
      <div className={`flow-diagram${visual.root ? ' flow-diagram-tree' : ''}`}>
        {visual.root && <p className="flow-root">{visual.root}</p>}
        <ol className="flow-steps">
          {visual.steps.map((step) => (
            <li key={step.title}>
              <span className="flow-node" aria-hidden="true" />
              <span className="flow-title">{step.title}</span>
              <span className="flow-detail">{step.detail}</span>
            </li>
          ))}
        </ol>
      </div>
      <figcaption>{visual.caption}<span>Project diagram</span></figcaption>
    </figure>
  );
}

export default ProjectVisual;
