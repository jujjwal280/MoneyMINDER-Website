import { useState, useEffect, useCallback } from "react";

import main from "../assets/screenshots/main.jpeg";
import onboard1 from "../assets/screenshots/onboard2.jpeg";
import onboard2 from "../assets/screenshots/onboard3.jpeg";
import onboard3 from "../assets/screenshots/onboard3.jpeg";
import login from "../assets/screenshots/login.jpeg";
import signup from "../assets/screenshots/signup.jpeg";
import screens from "../assets/screenshots/screens.jpeg";
import dashboard from "../assets/screenshots/dashboard.jpeg";
import insight from "../assets/screenshots/insight.jpeg";
//ujjwal
import notification from "../assets/screenshots/notification.jpeg";
import transaction from "../assets/screenshots/transaction.jpeg";
import profile from "../assets/screenshots/profile.jpeg";
import digitalid from "../assets/screenshots/digitalid.jpeg";
import feedback from "../assets/screenshots/feedback.jpeg";

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