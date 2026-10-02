function SectionHeading({ id, kicker, title, intro, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`} data-reveal>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export default SectionHeading;
