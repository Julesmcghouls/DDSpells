import React, { useState, useEffect } from 'react';
import './App.css';
import SpellCard from './SpellCard';
import { fetchSpells } from './Api';

const App = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSpells().then((data) => {
      setSpells(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSpells = spells.filter(spell => 
    spell.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Spell List</h1>
      <input
        type="text"
        placeholder="Search spells..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="spell-list">
          {filteredSpells.map((spell) => (
            <SpellCard key={spell.id} spell={spell} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;