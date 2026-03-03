import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
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
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-title">Smarter Expense Management</h1>
      <p className="hero-subtitle">
        Interactive dashboards. AI-powered predictions. Track your Expenses Easily.
      </p>
      <p><span ref={typedRef}></span></p>
      <a href="/MyApp.apk" download>
        <button className="download-btn ripple" title="Download App"></button>
        <i className="fas fa-download"></i>
      </a>
    </section>
  );
}