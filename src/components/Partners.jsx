import { content } from '../content/content';

const Partners = () => {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <h2 className="section-title">{content.partners.title}</h2>
        <p className="section-subtitle">{content.partners.subtitle}</p>
        <div className="partners-grid">
          {content.partners.items.map((partner, index) => (
            <div key={index} className="partner-item">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
