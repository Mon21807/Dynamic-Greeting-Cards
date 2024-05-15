function GreetingCard({ greeting, name }) {
    return (
      <div className="greeting-card">
        <h2>{greeting}</h2>
        <p>Dear {name},</p>
        <p>Wishing you all the best!</p>
      </div>
    );
  }
  
  // App component
  function App() {
    // Array of greeting cards
    const greetingCards = [
      { greeting: "Happy Birthday", name: "John Doe" },
      { greeting: "Merry Christmas", name: "Jane Smith" },
      // Add more greeting cards as needed
    ];
  
    return (
      <div className="app">
        {greetingCards.map((card, index) => (
          <GreetingCard key={index} greeting={card.greeting} name={card.name} />
        ))}
      </div>
    );
  }
  
  // Render the App component
  ReactDOM.render(<App />, document.getElementById('root'));
  