import { useEffect } from "react";

export default function Particles({ isLight }) {
  useEffect(() => {
    const initParticles = () => {
      if (!window.particlesJS) return;

      const particleColor = isLight ? "#053F5C" : "#F27F0C";

      // Destroy existing instance
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((instance) => instance.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }

      window.particlesJS("particles-js", {
        particles: {
          number: { value: 70, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 120,
            color: particleColor,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
        },
        retina_detect: true,
      });
    };

    if (window.particlesJS) {
      initParticles();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
      script.onload = initParticles;
      document.body.appendChild(script);
    }

    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((instance) =>
          instance.pJS.fn.vendors.destroypJS()
        );
        window.pJSDom = [];
      }
    };
  }, [isLight]);

  return <div id="particles-js" className="particles-background"></div>;
}