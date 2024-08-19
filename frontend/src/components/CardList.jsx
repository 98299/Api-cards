import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/card";

import Search from '../components/search';

import '../App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:8000/projects') // Adjust the URL based on your server
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter cards based on the search term
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Search setSearchTerm={ setSearchTerm } />
      <div className="card-container">
        {filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <Card key={card._id} title={card.title} description={card.description} link={card.link} />
          ))
        ) : (
          <p>No cards found</p>
        )}
      </div>
    </div>
  );
}

export default App;