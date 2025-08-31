import { content } from '../content/content';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Offices = () => {
  return (
    <section id="offices" className="offices">
      <div className="container">
        <h2 className="section-title">{content.offices.title}</h2>
        <p className="section-subtitle">{content.offices.subtitle}</p>
        <div className="offices-grid">
          {content.offices.locations.map((office, index) => (
            <Card key={index} className="office-card">
              <div className="office-image">
                <img src={office.image} alt={office.city} />
              </div>
              <div className="office-content">
                <h3 className="office-city">{office.city}</h3>
                <p className="office-address">{office.address}</p>
                <Button>Book a Visit</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;
