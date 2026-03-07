import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const trailRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div className="cursor-trail" ref={trailRef}></div>;
}