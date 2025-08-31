import { content } from "../content/content";
import Card from "../ui/Card";
import { modeling, projectManagement, qualityAssurance, sustainableBuilding } from "../assets/logos";

const Features = () => {
  // Map feature titles to icon images
  const getFeatureIcon = (title) => {
    const iconMap = {
      '3D Modeling': modeling,
      'Project Management': projectManagement,
      'Quality Assurance': qualityAssurance,
      'Sustainable Building': sustainableBuilding
    };
    return iconMap[title] || null;
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">{content.features.title}</h2>
        <p className="section-subtitle">{content.features.subtitle}</p>
        <div className="features-grid">
          {content.features.items.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div className="feature-icon-container">
                <img 
                  src={getFeatureIcon(feature.title)} 
                  alt={feature.title}
                  className="feature-icon-img"
                />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-content">
                <button className="feature-cta">Learn More</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;