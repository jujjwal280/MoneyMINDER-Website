import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHidden(true);
      const removeTimer = setTimeout(() => setRemoved(true), 500);
      return () => clearTimeout(removeTimer);
    }, 2000);
    return () => clearTimeout(hideTimer);
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>MoneyMINDER AI</h2>
        <p>Loading your financial future...</p>
      </div>
    </div>
  );
}