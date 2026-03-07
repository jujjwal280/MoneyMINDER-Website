import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 2500); // slightly after fade-out

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen ${hidden ? "hidden" : ""}`}>
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2 className="loading-title">MoneyMINDER AI</h2>
        <p className="loading-subtitle">
          Loading your financial future...
        </p>
      </div>
    </div>
  );
}