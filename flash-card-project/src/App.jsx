import { useState } from 'react';
import './App.css'

const App = () => {

   const cards = [
    { question: "Hello", answer: "Hola" },
    { question: "Good morning", answer: "Buenos dias" },
    { question: "Please", answer: "Porfavor" },
    { question: "Good night", answer: "Buenas noches" },
    { question: "Thank you", answer: "Gracias" },
    { question: "Friend", answer: "Amigo" },
    { question: "Goodbye", answer: "Adios" },
    { question: "Boy", answer: "Chico" },
    { question: "Girl", answer: "Chica" },
    { question: "English", answer: "Ingles" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {

    setIsFlipped(!isFlipped);
  }

  const updateCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
      setCurrentCard(randomIndex);
      setIsFlipped(false);
  }

  return (

    <div className="App">
      <div className="header">
        <h1>Spanish Flashcards</h1>
        <p>Practice Spanish 101</p>
        <h2>Number of cards: {cards.length}</h2>
      </div>
        <div className="card" onClick={flipCard}>
          {isFlipped ? cards[currentCard].answer : cards[currentCard].question}
        </div>

        <button onClick={updateCard}>Next Card</button>
        
    </div>
  )
}
export default App
