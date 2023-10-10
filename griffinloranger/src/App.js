import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <a href="#top" className="name-link">Griffin Loranger</a>
          <a href="/curriculum-vitae" className="cv-link">Curriculum Vitae</a>
      </header>

      <main>
        <section id="top" className="full-page intro-section">
          <h1>Griffin Loranger</h1>
          <p>Computer Science & Cognitive Psychology</p>
        </section>
        <section className="full-page">
          <h2>About Me</h2>
          <p>Hello, my name is Griffin. I am a 3rd year student at Northeastern University.</p>
        </section>
        <section className="full-page">
          <h2>Projects</h2>
          <p>Highlight a few of your standout projects here. Discuss the technologies used, challenges faced, and the results.</p>
        </section>
        <section className="full-page">
          <h2>Research & Publications</h2>
          <p>Share any academic research, papers, or notable projects related to your major.</p>
        </section>
        <section className="full-page">
          <h2>Contact</h2>
          <p>Provide information on how visitors can get in touch with you, such as through LinkedIn, GitHub, or email.</p>
        </section>
      </main>
      <footer>
        <p>© 2023 by Griffin Loranger. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
