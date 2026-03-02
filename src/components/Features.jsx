export default function Features() {
  const features = [
    {
      title: 'Automatic Deduction',
      desc: 'Never miss a transaction. Our app intelligently reads bank SMS to log your debits for you.',
      tooltip: 'Automatically detects and logs debit transactions from your bank SMS alerts.',
    },
    {
      title: 'Interactive Dashboard',
      desc: 'Visualize your financial health with dynamic charts and cards that respond to your touch.',
      tooltip: 'A dynamic overview of your finances.',
    },
    {
      title: 'Smart Categorization',
      desc: 'Our AI automatically sorts transactions into categories like Food, Bills, and Shopping for clear analysis.',
      tooltip: 'AI-powered sorting for ultimate clarity.',
    },
    {
      title: 'Accurate AI Insights',
      desc: 'Get highly accurate next-month spending forecasts based on your unique financial history.',
      tooltip: 'Leverages LSTM, ARIMA, and more for high accuracy.',
    },
    {
      title: 'Savings Goals',
      desc: 'Set financial goals for your next vacation or gadget and track your progress effortlessly.',
      tooltip: 'Set it, track it, achieve it.',
    },
    {
      title: 'Custom Reports',
      desc: 'Generate weekly, monthly, or custom-date reports to understand spending trends over time.',
      tooltip: 'Your data, your way.',
    },
    {
      title: 'Customizable Themes',
      desc: 'Personalize your experience with beautiful light and dark modes to suit your style.',
      tooltip: 'Light or dark, you decide.',
    },
    {
      title: 'Bank-Level Security',
      desc: "With secure login and Firebase's robust backend, your financial data is always safe and synced.",
      tooltip: 'Your data is encrypted and synced across devices.',
    },
    {
      title: 'Feedback',
      desc: 'Share thoughts, suggestions, or report issues directly to the development team.',
      tooltip: 'Send reviews or report issues.',
    },
  ];

  return (
    <section id="features" className="section">
      <h2 className="section-title">🚀 Features</h2>
      <div className="normal-cards">
        {features.map((f, i) => (
          <div className="normal-card" key={i} data-tooltip={f.tooltip}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}