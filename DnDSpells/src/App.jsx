import { useEffect, useState } from "react";
import { getAllSpells } from "./Api";
import SpellCard from "./SpellCard";
import "./App.css";

export default function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    getAllSpells().then(setSpells);
  }, []);

  return (
    <div className="App">
      <ul className="spell-list">
        {spells.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </ul>
    </div>
  );
}