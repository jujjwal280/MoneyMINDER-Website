import { useEffect } from 'react';
import '@lottiefiles/lottie-player';

export default function AIShowcase() {
  useEffect(() => {
    // lottie-player is a web component, imported above
  }, []);

  return (
    <section id="ai-model" className="section">
      <h2 className="section-title">🧠 AI Model Showcase</h2>
      <div
        className="ai-showcase"
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}
      >
        <div className="lottie-container" style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_ktwnwv5m.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          />
        </div>
        <div className="ai-description" style={{ flex: '1 1 300px', maxWidth: '500px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Our app adapts to your unique spending behavior using a powerful ensemble of forecasting models, including{' '}
            <strong>LSTM, ARIMA, Linear Regression, and Random Forest.</strong>
            <br /><br />
            This multi-model approach ensures our predictions are not just smart, but also robust and highly accurate,
            adapting to both your stable habits and seasonal spending shifts.
          </p>
        </div>
      </div>
    </section>
  );
}