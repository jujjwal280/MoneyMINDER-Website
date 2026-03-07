import "@lottiefiles/lottie-player";

export default function AIShowcase() {
  return (
    <section id="ai-model" className="section">
      <h2 className="section-title">🧠 AI Model Showcase</h2>

      <div className="ai-showcase">
        {/* Lottie Animation */}
        <div className="lottie-container">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_ktwnwv5m.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        {/* Description */}
        <div className="ai-description">
          <p>
            Our app adapts to your unique spending behavior using a powerful
            ensemble of forecasting models, including{" "}
            <strong>
              LSTM, ARIMA, Linear Regression, and Random Forest.
            </strong>
          </p>

          <p>
            This multi-model approach ensures our predictions are not just
            smart, but also robust and highly accurate — adapting to both your
            stable habits and seasonal spending shifts.
          </p>
        </div>
      </div>
    </section>
  );
}