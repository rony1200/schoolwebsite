// src/components/Gallery.js
import React from 'eact';
import { useState } from 'eact';

const Gallery = () => {
  const [images, setImages] = useState([
    { src: 'placeholder.jpg', alt: 'Annual Sports Day' },
    { src: 'placeholder.jpg', alt: 'Science Exhibition' },
    { src: 'placeholder.jpg', alt: 'Cultural Fest' },
  ]);

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    const filteredImages = images.filter((image) => image.alt.includes(filterValue));
    setImages(filteredImages);
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="Sports">Sports</option>
        <option value="Science">Science</option>
        <option value="Cultural">Cultural</option>
      </select>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;