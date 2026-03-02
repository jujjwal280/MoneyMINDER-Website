export default function Blog() {
  const posts = [
    {
      icon: '💡',
      title: '5 Smart Ways to Cut Monthly Expenses',
      desc: 'Learn practical methods to reduce your daily spending without sacrificing comfort.',
    },
    {
      icon: '📊',
      title: 'Behind Our AI: LSTM, ARIMA & More',
      desc: 'Explore how our ensemble of AI models provides highly accurate spending predictions.',
    },
    {
      icon: '📱',
      title: 'App v2.0 Coming Soon!',
      desc: "Major UI upgrades, savings tracking, and more. See what's next in our roadmap.",
    },
  ];

  return (
    <section id="blogs" className="section">
      <h2 className="section-title">📰 Blog &amp; Updates</h2>
      <div className="normal-cards">
        {posts.map((post, i) => (
          <div className="normal-card" key={i}>
            <h3>{post.icon} {post.title}</h3>
            <p>{post.desc}</p>
            <a href="#" target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}