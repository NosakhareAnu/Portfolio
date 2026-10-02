import { ArrowDown, ArrowUpRight, BadgeCheck, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import ExperienceList from '../components/ExperienceList';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { capabilities, contactLinks, profile, projects } from '../data/portfolio';

const heroProfileLinks = contactLinks.filter((link) => link.external);
const [firstName, ...remainingNameParts] = profile.name.split(' ');
const remainingName = remainingNameParts.join(' ');

const profileFacts = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: BadgeCheck, label: 'Work authorization', value: profile.workAuthorization },
  {
    icon: GraduationCap,
    label: 'Education',
    value: `${profile.education.qualification}, ${profile.education.institution}`,
  },
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

          <aside className="hero-profile hero-enter" aria-labelledby="hero-profile-title">
            <p className="hero-profile-label" id="hero-profile-title">
              Profile
            </p>
            <p className="hero-profile-copy">{profile.heroProfile}</p>
            <ul className="hero-profile-facts">
              <li>
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </li>
              <li>
                <BadgeCheck size={16} aria-hidden="true" />
                {profile.workAuthorization}
              </li>
            </ul>
            <div className="hero-profile-links">
              {heroProfileLinks.map((link) => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
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
          <SectionHeading
            id="experience-title"
            kicker="Experience"
            title="Work experience"
            intro="Product, engineering, and creative work across collaborative teams."
          />
          <ExperienceList />
        </div>
      </section>

      <section className="capabilities section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="container">
          <div className="capabilities-panel">
            <SectionHeading
              id="capabilities-title"
              kicker="Capabilities"
              title="Working across product and implementation."
              intro="A focused combination of interface development, product design, and connected product thinking."
              light
            />

            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.title} data-reveal>
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
        </div>
      </section>

      <section className="work section" id="selected-work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            id="work-title"
            kicker="Selected work"
            title="Built products and design explorations."
            intro="A focused selection of built product work and product design exploration, with the context of each project made clear."
          />

          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="about section section-surface" id="about" aria-labelledby="about-title">
        <div className="container about-layout">
          <div data-reveal>
            <p className="section-kicker">About</p>
            <h2 id="about-title">A design-aware developer with a product mindset.</h2>
          </div>
          <div className="about-copy" data-reveal>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <dl className="fact-list" id="education">
              {profileFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>
                    <fact.icon size={16} aria-hidden="true" />
                    {fact.label}
                  </dt>
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
