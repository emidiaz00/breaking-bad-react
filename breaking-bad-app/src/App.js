import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';

const initialQuote = {
  text: 'Quote',
  author: 'Author'
}

function App() {

  const [quote, setQuote] = useState(initialQuote)


  const updateQuote = async () => {
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    console.log(newQuote);

    const { quote, author } = newQuote;
    
    setQuote({
      text: quote,
      author: author,
    })
  }

  /* para poder realizar una llamada en su primera vez
    solo la primera vez que se renderiza un componente necesitamos
    pasarle un componente en su arreglo de dependencias, un arreglo vacío
  */
  useEffect( () => {
      updateQuote();
    
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateQuote() }>Get Another</button>
      <Quote quote={quote}/>
    </div>
  );
}

export default App;
