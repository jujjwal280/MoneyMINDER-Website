import { useState, useEffect, useCallback } from "react";

import main from "../assets/Screenshots/main.jpeg";
import onboard1 from "../assets/Screenshots/onboard2.jpeg";
import onboard2 from "../assets/Screenshots/onboard3.jpeg";
import onboard3 from "../assets/Screenshots/onboard3.jpeg";
import login from "../assets/Screenshots/login.jpeg";
import signup from "../assets/Screenshots/signup.jpeg";
import screens from "../assets/Screenshots/screens.jpeg";
import dashboard from "../assets/Screenshots/dashboard.jpeg";
import insight from "../assets/Screenshots/insight.jpeg";
import notification from "../assets/Screenshots/notification.jpeg";
import transaction from "../assets/Screenshots/transaction.jpeg";
import profile from "../assets/Screenshots/profile.jpeg";
import digitalid from "../assets/Screenshots/digitalid.jpeg";
import feedback from "../assets/Screenshots/feedback.jpeg";

const captions = ["Main", "Onboard1", "Onboard2", "Onboard3", "Signup", "Login", "🏡 Dashboard", "📊 Insights", "💸Transaction", "👤Profile", "🪪Digital ID", "📬Feedback"];

const images = [main, onboard1, onboard2, onboard3, signup, login, screens, dashboard, insight, notification, transaction, profile, digitalid, feedback];

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
              className={`screen-img ${i === currentSlide ? "active" : ""}`}
              loading="lazy"
            />
          ))}

          <div className="screen-buttons">
            <button onClick={prevSlide}>‹</button>
            <button onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>

      <div className="screenshot-captions">
        <p>{captions[currentSlide]}</p>
      </div>
    </section>
  );
}