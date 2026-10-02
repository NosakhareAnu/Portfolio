import { capabilities } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const byTier = (tier) => capabilities.find((capability) => capability.tier === tier);

function Capabilities() {
  const primary = byTier('primary');
  const developing = byTier('developing');
  const supporting = byTier('supporting');

  return (
    <section className="capabilities section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="capabilities-panel">
          <SectionHeading id="capabilities-title" title="Technical capabilities" />

          <div className="capability-main">
            <article className="capability-primary" data-reveal>
              <h3>{primary.title}</h3>
              <p className="capability-summary">{primary.summary}</p>
              <dl className="tech-groups">
                {primary.groups.map((group) => (
                  <div key={group.label}>
                    <dt>{group.label}</dt>
                    <dd>{group.items.join(', ')}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <article className="capability-developing" data-reveal>
              <p className="capability-status">{developing.status}</p>
              <h3>{developing.title}</h3>
              <p className="capability-summary">{developing.summary}</p>
              <ul className="tech-list">
                {developing.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="capability-supporting" data-reveal>
            <h3>{supporting.title}</h3>
            <p className="capability-summary">{supporting.summary}</p>
            <p className="capability-tools">{supporting.items.join(' · ')}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
