import { useEffect, useState } from "react";
import { getAllSpells } from "./Api";
import SpellCard from "./SpellCard";
import "./App.css";

export default function App() {
  const [spells, setSpells] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllSpells().then((data) => {
      setSpells(data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSpells = spells.filter((spell) =>
    spell.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search spells..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul className="spell-list">
        {filteredSpells.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </ul>
    </div>
  );
}