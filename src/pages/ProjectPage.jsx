import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
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
          {section.items.map((item, index) => (
            <article className="case-item" key={item.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      )}

      {section.screenshotSlots && (
        <div className="screenshot-placeholder-grid">
          {section.screenshotSlots.map((slot, index) => (
            <figure className="screenshot-placeholder" key={slot}>
              <div aria-hidden="true">
                <span>Screenshot {String(index + 1).padStart(2, '0')}</span>
              </div>
              <figcaption>{slot}</figcaption>
            </figure>
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

  useEffect(() => {
    document.title = project
      ? `${project.name} — Nosakhare Festus-Olagbende`
      : 'Page not found — Nosakhare Festus-Olagbende';

    return () => {
      document.title = 'Nosakhare Festus-Olagbende — Software Developer & Product Designer';
    };
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className={`project-page${project.featured ? ' project-page-featured' : ''}`}>
      <header className="project-page-header">
        <div className="container project-page-heading">
          <Link className="back-link" to="/#selected-work">
            <ArrowLeft size={17} aria-hidden="true" />
            Selected work
          </Link>
          <p className="eyebrow">{project.classification}</p>
          <h1>{project.name}</h1>
          <p className="project-page-subtitle">{project.subtitle}</p>
          <ul className="discipline-list project-page-disciplines" aria-label={`${project.name} disciplines`}>
            {project.disciplines.map((discipline) => (
              <li key={discipline}>{discipline}</li>
            ))}
          </ul>
        </div>
      </header>

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

      {project.sections.map((section, index) => (
        <section
          className="case-study-section section"
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          key={section.id}
        >
          <div className="container case-study-layout">
            <header>
              <p className="section-kicker">{String(index + 1).padStart(2, '0')}</p>
              <h2 id={`${section.id}-title`}>{section.heading}</h2>
            </header>
            <CaseStudyContent section={section} />
          </div>
        </section>
      ))}
    </article>
  );
}

export default ProjectPage;
