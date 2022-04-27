import React from 'react';
import './App.css';
import Reviews from "./reviews"


function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underLine"></div>
          </div>
          <Reviews/>
        </section>
      </main>
    </div>
  );
}

export default App;
