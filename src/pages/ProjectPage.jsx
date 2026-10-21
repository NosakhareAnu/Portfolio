import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import ProjectVisual from '../components/ProjectVisual';
import NotFound from './NotFound';

function CaseStudyContent({ section }) {
  return (
    <div className="case-study-content">
      {section.introduction && <p className="case-study-introduction">{section.introduction}</p>}

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.bullets && (
        <div className="responsibility-block">
          <h3>{section.listLabel}</h3>
          <ul>
            {section.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {section.items && (
        <div className="case-item-grid">
          {section.items.map((item) => (
            <article className="case-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      )}

      {section.stats && (
        <dl className="outcome-grid">
          {section.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className={`project-page${project.featured ? ' project-page-featured' : ''}`}>
      <header className="project-page-header">
        <div className="container project-page-heading">
          <Link className="back-link" to="/#selected-work">
            <ArrowLeft size={17} aria-hidden="true" />
            Selected work
          </Link>
          <div className="project-page-title-layout">
            <div>
              <p className="eyebrow">{project.classification}</p>
              <h1>{project.name}</h1>
              <p className="project-page-subtitle">{project.subtitle}</p>
              <ul className="project-page-disciplines" aria-label={`${project.name} disciplines`}>
                {project.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
              </ul>
            </div>
            <nav className="case-navigation" aria-label="In this case study">
              <p>In this case study</p>
              {project.contents?.map((item) => (
                <Link key={item.id} to={`#${item.id}`}>{item.label}</Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="container case-visual"><ProjectVisual project={project} /></div>

      <section className="project-overview section" aria-labelledby="overview-title">
        <div className="container case-study-layout">
          <header>
            <p className="section-kicker">{project.context}</p>
            <h2 id="overview-title">Overview</h2>
          </header>
          <div className="case-study-content project-intro">
            {project.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {project.implementationNote && <p className="implementation-note">{project.implementationNote}</p>}

            <dl className="project-details">
              {project.projectDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {project.sections.filter((section) => !section.screenshotSlots).map((section) => (
        <section
          className="case-study-section section"
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          key={section.id}
        >
          <div className="container case-study-layout">
            <header>
              <h2 id={`${section.id}-title`}>{section.heading}</h2>
            </header>
            <CaseStudyContent section={section} />
          </div>
        </section>
      ))}

      {nextProject !== project && (
        <nav className="project-next section" aria-label="More work">
          <div className="container project-next-layout">
            <Link className="back-link" to="/#selected-work">
              <ArrowLeft size={17} aria-hidden="true" />
              All selected work
            </Link>
            <Link className="project-next-card" to={`/projects/${nextProject.slug}`}>
              <span className="section-kicker">Next project</span>
              <span className="project-next-name">{nextProject.name}</span>
              <span className="project-next-subtitle">{nextProject.subtitle}</span>
              <ArrowRight className="project-next-arrow" size={22} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </article>
  );
}

export default ProjectPage;
