import { useState } from 'react';
import { content } from '../content/content';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">{content.gallery.title}</h2>
        <p className="section-subtitle">{content.gallery.subtitle}</p>
        <div className="gallery-grid">
          {content.gallery.items.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(item)}
            >
              <img src={item.image} alt={item.caption} />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <img src={selectedImage.image} alt={selectedImage.caption} />
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
