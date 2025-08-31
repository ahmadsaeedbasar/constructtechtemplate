import { content } from "../content/content";
import Card from "../ui/Card";
import { twitter, linkedin, email } from "../assets/logos";

const Team = () => {
  // Function to get social media logo based on platform name
  const getSocialLogo = (platform) => {
    const logoMap = {
      'twitter': twitter,
      'linkedin': linkedin,
      
      'email': email
    };
    return logoMap[platform.toLowerCase()] || null;
  };

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title">{content.team.title}</h2>
        <p className="section-subtitle">{content.team.subtitle}</p>
        <div className="team-grid">
          {content.team.members.map((member, index) => (
            <Card key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-social">
                  {/* Twitter */}
                  <a
                    href={`https://twitter.com/${member.social?.twitter}`}
                    className="team-social-link"
                    aria-label={`${member.name} Twitter`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={getSocialLogo('twitter')} 
                      alt="Twitter" 
                      className="team-social-icon"
                    />
                  </a>
                  
                  {/* LinkedIn */}
                  <a
                    href={`https://linkedin.com/in/${member.social?.linkedin}`}
                    className="team-social-link"
                    aria-label={`${member.name} LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={getSocialLogo('linkedin')} 
                      alt="LinkedIn" 
                      className="team-social-icon"
                    />
                  </a>
                  
                 
                  
                  {/* Email */}
                  <a
                    href={`mailto:${member.social?.email}`}
                    className="team-social-link"
                    aria-label={`Email ${member.name}`}
                  >
                    <img 
                      src={getSocialLogo('email')} 
                      alt="Email" 
                      className="team-social-icon"
                    />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;