import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name's Portfolio</h1>
        <p>Computer Science & Cognitive Psychology Major</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            A brief introduction about yourself, your interests in computer science and cognitive psychology, and any other personal tidbits you'd like to share.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>
            Highlight a few of your standout projects here. Discuss the technologies used, challenges faced, and the results.
          </p>
        </section>
        <section>
          <h2>Research & Publications</h2>
          <p>
            Share any academic research, papers, or notable projects related to your major.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Provide information on how visitors can get in touch with you, such as through LinkedIn, GitHub, or email.
          </p>
        </section>
      </main>
      <footer>
        <p>© 2023 by Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
