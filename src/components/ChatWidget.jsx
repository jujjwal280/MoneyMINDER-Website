import { useState } from 'react';

const responses = {
  'Tell me about features':
    'MoneyMINDER AI offers expense tracking, AI forecasting, smart categorization, and beautiful insights!',
  'How to download?':
    'Click the download button or visit our Google Drive link to get the latest version!',
  'Pricing info':
    'MoneyMINDER AI is currently free! We believe in making financial management accessible to everyone.',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm your MoneyMINDER AI assistant. How can I help you today?" },
  ]);

  const addMessage = (userMsg) => {
    setMessages((prev) => [...prev, { type: 'user', text: userMsg }]);

    setTimeout(() => {
      const botResponse = responses[userMsg] ||
        'Thanks for your question! Feel free to explore our features or contact our team.';
      setMessages((prev) => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="chat-widget">
      <div className="chat-header" onClick={() => setOpen(!open)}>
        <i className="fas fa-robot"></i>
        <span>AI Assistant</span>
        <i
          className="fas fa-chevron-down"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}
        />
      </div>
      <div className={`chat-body${open ? ' active' : ''}`}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message${msg.type === 'bot' ? ' bot-message' : ''}`}>
            <p>{msg.type === 'user' ? <><strong>You:</strong> {msg.text}</> : msg.text}</p>
          </div>
        ))}
        <div className="chat-options">
          <button className="chat-option" onClick={() => addMessage('Tell me about features')}>Features</button>
          <button className="chat-option" onClick={() => addMessage('How to download?')}>Download</button>
          <button className="chat-option" onClick={() => addMessage('Pricing info')}>Pricing</button>
        </div>
      </div>
    </div>
  );
}