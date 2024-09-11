import { useEffect, useState } from "react";
import { getAllSpells } from "./API";
import SpellCard from "./components/SpellCard";
import loadingGif from "./loading.gif";
import "./App.css";

export default function App() {
  const [spells, setSpells] = useState(() => {
    const savedSpells = localStorage.getItem("spells");
    return savedSpells ? JSON.parse(savedSpells) : null;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");

  useEffect(() => {
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  const filteredSpells = spells
    ? spells.filter((spell) => {
        const matchesLevel =
          selectedLevel === "" || spell.level === parseInt(selectedLevel);
        const matchesSchool =
          selectedSchool === "" || spell.school.name === selectedSchool;
        const matchesName =
          spell.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLevel && matchesSchool && matchesName;
      })
    : [];

  return (
    <div className="App">
      {spells ? (
        <>
          <input
            type="text"
            placeholder="Search spells..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <select value={selectedLevel} onChange={handleLevelChange}>
            <option value="">All Levels</option>
            <option value="0">Cantrip</option>
            <option value="1">1st Level</option>
            <option value="2">2nd Level</option>
          </select>
          <select value={selectedSchool} onChange={handleSchoolChange}>
            <option value="">All Schools</option>
            <option value="Abjuration">Abjuration</option>
            <option value="Conjuration">Conjuration</option>
            <option value="Divination">Divination</option>
          </select>
          <ul className="spell-list">
            {filteredSpells.map((spell) => (
              <SpellCard key={spell.index} spell={spell} />
            ))}
          </ul>
        </>
      ) : (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." />
        </div>
      )}
    </div>
  );
}
