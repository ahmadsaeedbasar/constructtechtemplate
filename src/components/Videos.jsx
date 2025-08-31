import { useRef, useEffect } from 'react';
import { content } from '../content/content';

const VideoSection = () => {
  const videoRefs = useRef([]);

  // Auto-play videos when they're in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section className="video-section">
      <div className="container">
        <h2 className="section-title">{content.videos.title}</h2>
        <p className="section-subtitle">{content.videos.subtitle}</p>
        
        <div className="video-grid">
          {content.videos.items.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-player">
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={video.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.caption}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-meta">
                  <span>{video.category || "Construction"}</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;