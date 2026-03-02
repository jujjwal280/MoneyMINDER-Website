import { useState, useEffect } from 'react';

export default function Popup() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>🎉 Welcome to MoneyMINDER AI</h3>
        <p>Get ready to master your expenses like never before!</p>
        <button onClick={() => setHidden(true)}>Let&apos;s Go</button>
      </div>
    </div>
  );
}