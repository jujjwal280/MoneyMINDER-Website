export default function Testimonials() {
  const testimonials = [
    {
      text: '"MoneyMINDER AI changed the way I manage my expenses. The automatic SMS detection is a game-changer!"',
      author: 'Gourav Srivastava',
    },
    {
      text: '"I love the AI forecasts. It\'s like having a financial assistant in my pocket."',
      author: 'Vidhika Mohan',
    },
    {
      text: '"Beautiful interactive dashboard, smooth experience, and great insights into my spending habits."',
      author: 'Vasu Rohilla',
    },
  ];

  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">💬 What Users Say</h2>
      <div className="normal-cards">
        {testimonials.map((t, i) => (
          <div className="normal-card" key={i}>
            <p>{t.text}</p>
            <a href="#" target="_blank" rel="noopener noreferrer">- {t.author}</a>
          </div>
        ))}
      </div>
    </section>
  );
}