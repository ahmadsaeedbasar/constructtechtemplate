import { useState } from "react";
import { content } from "../content/content";
import Card from "../ui/Card";
import Button from "../ui/Button";
import logos from "../assets/logos"; // Import logos

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">{content.contact.title}</h2>
        <p className="section-subtitle">{content.contact.subtitle}</p>
        
        <div className="contact-content">
          <Card className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {content.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {content.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {content.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {content.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  rows="5"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? "Sending..." : content.contact.form.submit}
              </Button>
            </form>
          </Card>
          
          <Card className="contact-info-card">
            <h3 className="contact-info-title">Get in Touch</h3>
            
            <div className="contact-info-item">
              <img src={logos.location} alt="Address" className="contact-icon-img" />
              <div className="contact-info-content">
                <h4 className="contact-info-label">Address</h4>
                <p className="contact-info-text">{content.contact.info.address}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <img src={logos.phone} alt="Phone" className="contact-icon-img" />
              <div className="contact-info-content">
                <h4 className="contact-info-label">Phone</h4>
                <p className="contact-info-text">{content.contact.info.phone}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <img src={logos.email} alt="Email" className="contact-icon-img" />
              <div className="contact-info-content">
                <h4 className="contact-info-label">Email</h4>
                <p className="contact-info-text">{content.contact.info.email}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <img src={logos.time} alt="Business Hours" className="contact-icon-img" />
              <div className="contact-info-content">
                <h4 className="contact-info-label">Business Hours</h4>
                <p className="contact-info-text">{content.contact.info.hours}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;