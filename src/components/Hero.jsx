import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedText = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!typedText.current) return;

    const typed = new Typed(typedText.current, {
      strings: [
        'Track your expenses.',
        'Plan your savings.',
        'Predict your future spending.',
        'MoneyMINDER AI at your service!',
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          if (heroRef.current) {
            heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <h1 className="hero-title">Smarter Expense Management</h1>
      <p className="hero-subtitle">
        Interactive dashboards. AI-powered predictions. Track your Expenses Easily.
      </p>
      <p><span ref={typedText} className="typed-text"></span></p>
      <a href="/MyApp.apk" download>
        <button type="button" className="download-btn ripple">
          Download App
        </button>
      </a>
    </section>
  );
}