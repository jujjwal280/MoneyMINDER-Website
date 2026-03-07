import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;

      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;

      if (barRef.current) {
        barRef.current.style.width = `${Math.min(progress, 100)}%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="progress-bar" ref={barRef}></div>;
}