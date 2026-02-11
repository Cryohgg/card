import React from 'react';
import './App.css';

function App() {
  const memories = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="app-container">
      <section className="hero">
        <h1>For My Special One</h1>
        <p>
          Dear Valencia,<br /><br />
          Halo bott!!! Hmm.. harusnya sekarang jumat malem, bener gaa?? <br />
          First of all, I MAU NGOMONG INI GA GPTT!! <br />
          I just want to say that I am very grateful to have u in my life. <br />
          You made my life much more colorful than it was.<br /><br />
          Swipe down ya bott 💕
        </p>
        <button onClick={() => alert("Keep smiling! ✨")}>
          I'll Respect Your Decision, Makasii Yaa
        </button>
      </section>

      <section className="gallery">
        <h2>Our Memories 💕</h2>
        <div className="gallery-grid">
          {memories.map((num) => (
            <img 
              key={num} 
              src={`${process.env.PUBLIC_URL}/memories/${num}.jpg`} 
              alt={`Memory ${num}`} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
