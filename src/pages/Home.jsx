import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Capabilities from '../components/Capabilities';
import Contact from '../components/Contact';
import ExperienceList from '../components/ExperienceList';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { contactLinks, profile, projects } from '../data/portfolio';

const heroProfileLinks = contactLinks.filter((link) => link.external);
const [firstName, ...remainingNameParts] = profile.name.split(' ');
const remainingName = remainingNameParts.join(' ');

const aboutFacts = [
  { label: 'Education', value: `${profile.education.qualification}, ${profile.education.institution}` },
  { label: 'Based in', value: profile.location },
  { label: 'Work authorization', value: profile.workAuthorization },
];

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-enter">{profile.title}</p>
            <h1 id="hero-title" className="hero-enter">
              <span>{firstName}</span> <span className="hero-name-remainder">{remainingName}</span>
            </h1>
            <p className="hero-introduction hero-enter">{profile.introduction}</p>
            <div className="hero-actions hero-enter">
              <Link className="button button-primary" to="/#selected-work">
                View selected work
                <ArrowDown size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" to="/#contact">
                Get in touch
              </Link>
            </div>
          </div>

          <aside className="hero-profile hero-enter" aria-label="Profile summary">
            <p className="hero-profile-copy">{profile.heroProfile}</p>
            <ul className="hero-profile-facts">
              <li>{profile.location}</li>
              <li>{profile.workAuthorization}</li>
            </ul>
            <div className="hero-profile-links">
              {heroProfileLinks.map((link) => (
                <a key={link.id} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="experience section section-surface" id="experience" aria-labelledby="experience-title">
        <div className="container">
          <SectionHeading id="experience-title" title="Experience" />
          <ExperienceList />
        </div>
      </section>

      <Capabilities />

      <section className="work section" id="selected-work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading id="work-title" title="Selected work" />

          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="about section section-surface" id="about" aria-labelledby="about-title">
        <div className="container about-layout">
          <h2 id="about-title" data-reveal>
            About
          </h2>
          <div className="about-copy" data-reveal>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <dl className="fact-list" id="education">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Home;
