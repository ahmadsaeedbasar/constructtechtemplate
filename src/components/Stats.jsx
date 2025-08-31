import { useState, useEffect } from 'react';
import { content } from '../content/content';
import Card from '../ui/Card';

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    team: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targetValues = {
      projects: content.stats.items[0].value,
      experience: content.stats.items[1].value,
      satisfaction: content.stats.items[2].value,
      team: content.stats.items[3].value,
    };

    const stepValues = {
      projects: targetValues.projects / steps,
      experience: targetValues.experience / steps,
      satisfaction: targetValues.satisfaction / steps,
      team: targetValues.team / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      setCounts({
        projects: Math.min(
          Math.floor(stepValues.projects * currentStep),
          targetValues.projects
        ),
        experience: Math.min(
          Math.floor(stepValues.experience * currentStep),
          targetValues.experience
        ),
        satisfaction: Math.min(
          Math.floor(stepValues.satisfaction * currentStep),
          targetValues.satisfaction
        ),
        team: Math.min(
          Math.floor(stepValues.team * currentStep),
          targetValues.team
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="stats" className="stats">
      <div className="container">
        <h2 className="section-title">{content.stats.title}</h2>
        <div className="stats-grid">
          {content.stats.items.map((stat, index) => (
            <Card key={stat.label} className="stat-card">
              <div className="stat-value">
                {counts[Object.keys(counts)[index]]}
                {stat.suffix}
              </div>
              <p className="stat-label">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
