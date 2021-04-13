import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>Start</button>
    </div>
  );
}

export default App;
