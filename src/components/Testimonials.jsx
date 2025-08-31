import { useState } from 'react';
import { content } from '../content/content';
import Card from '../ui/Card';
import IconButton from '../ui/IconButton';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial(
      prev => (prev + 1) % content.testimonials.items.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      prev =>
        (prev - 1 + content.testimonials.items.length) %
        content.testimonials.items.length
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">{content.testimonials.title}</h2>
        <p className="section-subtitle">{content.testimonials.subtitle}</p>
        <div className="testimonial-container">
          <Card className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <p className="testimonial-text">
              {content.testimonials.items[currentTestimonial].quote}
            </p>
            <div className="testimonial-author">
              <img
                src={content.testimonials.items[currentTestimonial].image}
                alt={content.testimonials.items[currentTestimonial].author}
                className="testimonial-image"
              />
              <div className="testimonial-info">
                <p className="testimonial-name">
                  {content.testimonials.items[currentTestimonial].author}
                </p>
                <p className="testimonial-role">
                  {content.testimonials.items[currentTestimonial].role}
                </p>
              </div>
            </div>
          </Card>
          <div className="testimonial-controls">
            <IconButton onClick={prevTestimonial}>◀</IconButton>
            <IconButton onClick={nextTestimonial}>▶</IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
