import { useEffect } from 'react';

export default function Particles({ isLight }) {
  useEffect(() => {
    const loadParticles = () => {
      if (!window.particlesJS) return;

      const particleColor = isLight ? '#053F5C' : '#F27F0C';
      const lineColor = isLight ? '#053F5C' : '#F27F0C';

      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: { type: 'circle' },
          opacity: { value: 4, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 100,
            color: lineColor,
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
        },
        retina_detect: true,
      });
    };

    // particles.js needs the script loaded
    if (window.particlesJS) {
      loadParticles();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.onload = loadParticles;
      document.body.appendChild(script);
    }
  }, []);

  // Update particle colors when theme changes
  useEffect(() => {
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      const particleColor = isLight ? '#053F5C' : '#F27F0C';
      const lineColor = isLight ? '#053F5C' : '#F27F0C';
      const pJS = window.pJSDom[0].pJS;
      pJS.particles.color.value = particleColor;
      pJS.particles.line_linked.color = lineColor;

      if (pJS.particles.array) {
        pJS.particles.array.forEach((particle) => {
          particle.color.value = particleColor;
        });
      }
      pJS.fn.particlesRefresh();
    }
  }, [isLight]);

  return <div id="particles-js" />;
}