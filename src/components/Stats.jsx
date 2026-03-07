import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { target: 1000, suffix: '+', label: 'Downloads' },
    { target: 98, suffix: '%', label: 'Prediction Accuracy' },
    { target: 4.8, suffix: '★', label: 'User Rating' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!started && sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [started]);

  return (
    <section id="stats" className="section" ref={sectionRef}>
      <h2 className="section-title">📈 Our Impact</h2>
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div className="stat-box" key={i}>
            <h3>
              <Counter target={stat.target} started={started} />
              {stat.suffix}
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ target, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const increment = target / 120;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{count}</span>;
}