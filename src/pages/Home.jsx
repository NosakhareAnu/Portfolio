import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Capabilities from '../components/Capabilities';
import Contact from '../components/Contact';
import ExperienceList from '../components/ExperienceList';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { contactLinks, profile, projects } from '../data/portfolio';

const profileLinks = contactLinks.filter((link) => link.external);
const [firstName, ...remainingNameParts] = profile.name.split(' ');
const aboutFacts = [
  { label: 'Education', value: `${profile.education.qualification}, ${profile.education.institution}` },
  { label: 'Based in', value: profile.location },
  { label: 'Work authorization', value: profile.workAuthorization },
];

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-topline hero-enter">
            <p className="hero-role">{profile.title}</p>
            <p className="hero-location">Based in {profile.location}</p>
          </div>
          <div className="hero-layout hero-enter">
            <div className="hero-name">
              <h1 id="hero-title">
                <span>{firstName}</span>{' '}
                <span>{remainingNameParts.join(' ')}</span>
              </h1>
              <div className="hero-actions">
                <Link className="button button-primary" to="/#selected-work">
                  Explore my work <ArrowDown size={17} aria-hidden="true" />
                </Link>
                <Link className="text-link" to="/#contact">Get in touch</Link>
              </div>
            </div>
            <div className="hero-intro">
              <p className="hero-introduction">{profile.introduction}</p>
              <Link className="hero-feature" to={`/projects/${projects[0].slug}`}>
                <span className="hero-feature-label">A look at my work</span>
                <span className="hero-feature-title">{projects[0].name} <ArrowUpRight size={19} aria-hidden="true" /></span>
                <span className="hero-feature-detail">{projects[0].subtitle}</span>
              </Link>
            </div>
          </div>
          <div className="hero-footnote">
            <p>{profile.workAuthorization}</p>
            <div className="hero-profile-links">
              {profileLinks.map((link) => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="selected-work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading id="work-title" title="Selected work" intro="Building the product. Thinking through the experience. A closer look at both sides of my work." />
          <div className="project-list">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="experience section" id="experience" aria-labelledby="experience-title">
        <div className="container experience-layout">
          <SectionHeading id="experience-title" title="Experience" intro="Hands-on work in development and design, learning alongside teams and building for real requirements." />
          <ExperienceList />
        </div>
      </section>

      <Capabilities />

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="container about-layout">
          <div className="about-heading">
            <h2 id="about-title">About</h2>
            <p className="about-statement">The details behind<br />the way I build.</p>
            <dl className="fact-list" id="education">
              {aboutFacts.map((fact) => (
                <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
              ))}
            </dl>
          </div>
          <div className="about-copy">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default Home;
