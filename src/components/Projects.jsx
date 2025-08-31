import { content } from '../content/content';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{content.projects.title}</h2>
        <p className="section-subtitle">{content.projects.subtitle}</p>
        <div className="projects-grid">
          {content.projects.items.map((project) => (
            <Card key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Button>View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
