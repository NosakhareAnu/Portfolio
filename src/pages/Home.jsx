import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';
import { capabilities, profile, projects } from '../data/portfolio';

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{profile.title}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-introduction">{profile.introduction}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/#selected-work">
                View selected work
                <ArrowDown size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" to="/#contact">
                Get in touch
              </Link>
            </div>
          </div>

          <aside className="hero-note" aria-label="Product approach">
            <p>From product thinking to implementation.</p>
            <ol>
              <li><span>01</span> Understand</li>
              <li><span>02</span> Design</li>
              <li><span>03</span> Build</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="work section" id="selected-work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2 id="work-title">Built products and design explorations.</h2>
            </div>
            <p className="section-intro">
              A focused selection of built product work and product design exploration, presented with the project context made clear.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities section section-dark" id="capabilities" aria-labelledby="capabilities-title">
        <div className="container">
          <div className="section-heading section-heading-light">
            <div>
              <p className="section-kicker">Capabilities</p>
              <h2 id="capabilities-title">Working across product and implementation.</h2>
            </div>
            <p className="section-intro">
              A focused combination of interface development, product design, and connected product thinking.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title}>
                <span aria-hidden="true">{capability.number}</span>
                <h3>{capability.title}</h3>
                <ul className="capability-list">
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="container about-layout">
          <div>
            <p className="section-kicker">About</p>
            <h2 id="about-title">A design-aware developer with a product mindset.</h2>
          </div>
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="background section" id="education" aria-labelledby="background-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Background</p>
              <h2 id="background-title">Education</h2>
            </div>
          </div>

          <div className="background-list">
            <article className="background-row">
              <p>Education</p>
              <h3>{profile.education.institution}</h3>
              <span>{profile.education.qualification}</span>
            </article>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Home;
