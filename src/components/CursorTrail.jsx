import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const trailRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const update = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      if (trailRef.current) {
        trailRef.current.style.left = trailX + 'px';
        trailRef.current.style.top = trailY + 'px';
      }

      animId = requestAnimationFrame(update);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(update);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div className="cursor-trail" ref={trailRef} />;
}