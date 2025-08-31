import { content } from '../content/content';
import Button from '../ui/Button';

/**
 * Hero Component
 * Main landing section with headline, description, and call-to-action buttons
 * @returns {JSX.Element} Hero section JSX
 */
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{content.hero.headline}</h1>
          <h1 className="hero-titles">{content.hero.headlin}</h1>

          <p className="hero-subtitle">{content.hero.subheadline}</p>
          <div className="hero-actions">
            <Button size="lg">{content.hero.ctaPrimary}</Button>
            <Button variant="secondary" size="lg">
              {content.hero.ctaSecondary}
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={content.hero.image} alt="Construction technology" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
