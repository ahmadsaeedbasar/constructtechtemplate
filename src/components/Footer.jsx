import { content } from "../content/content";
import logos from "../assets/logos/"; // Import logos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">{content.footer.logo}</h3>
            <p className="footer-description">{content.footer.description}</p>
            <div className="footer-social">
              {content.footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <img 
                    src={logos[social.name.toLowerCase()]} 
                    alt={social.name}
                    className="social-icon-img"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              {content.footer.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact-info">
              <p>
                <img src={logos.email} alt="Email" className="footer-icon-img" />
                {content.footer.contact.email}
              </p>
              <p>
                <img src={logos.phone} alt="Phone" className="footer-icon-img" />
                {content.footer.contact.phone}
              </p>
              <p>
                <img src={logos.location} alt="Address" className="footer-icon-img" />
                {content.footer.contact.address}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;