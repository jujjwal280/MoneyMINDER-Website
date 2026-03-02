import { useState, useEffect, useCallback } from 'react';

const captions = ['🏡 Dashboard', '💸 Transactions', '📊 Insights'];
const images = ['images/screenshoot1.png', 'images/screenshoot2.png', 'images/screenshoot3.png'];

export default function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="screens" className="section">
      <h2 className="section-title">📲 App Screens</h2>
      <div className="demo-container">
        <div className="screen">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className={`screen-img${i === currentSlide ? ' active' : ''}`}
            />
          ))}
          <div className="screen-buttons">
            <button onClick={prevSlide}>‹</button>
            <button onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>
      <div className="screenshot-captions" style={{ textAlign: 'center' }}>
        <p>{captions[currentSlide]}</p>
      </div>
    </section>
  );
}