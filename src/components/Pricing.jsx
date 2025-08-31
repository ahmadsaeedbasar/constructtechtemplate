import { content } from '../content/content';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">{content.pricing.title}</h2>
        <p className="section-subtitle">{content.pricing.subtitle}</p>
        <div className="pricing-grid">
          {content.pricing.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="pricing-badge">Most Popular</div>
              )}
              <h3 className="pricing-plan">{plan.name}</h3>
              <div className="pricing-price">
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature">
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                fullWidth
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
