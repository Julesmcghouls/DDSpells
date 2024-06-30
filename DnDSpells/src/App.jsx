import { useEffect, useState } from "react";
import { getAllSpells } from "./Api";
import SpellCard from "./SpellCard";
import "./App.css";

/**
 * The App component is the main component of the application. It renders a list of spells
 * retrieved from the D&D 5th Edition API. The spells are stored in the local storage of the
 * browser. When the component is mounted, it checks if there are any spells stored in the
 * local storage and sets the state of the spells to the stored spells. Then, it calls the
 * getAllSpells function to retrieve the spells from the API and updates the state of the spells
 * with the retrieved spells. Finally, it renders a loading message if there are no spells
 * retrieved from the API, and it renders a list of spell cards if there are spells retrieved from
 * the API.
 */
export default function App() {
  // State to store the spells retrieved from the API
  const [spells, setSpells] = useState([]);

  // Effect hook to retrieve spells from the API and store them in the local storage
  useEffect(() => {
    // Check if there are any spells stored in the local storage
    const savedSpells = localStorage.getItem("spells");

    // If there are spells stored in the local storage, set the state of spells to the stored spells
    if (savedSpells) {
      setSpells(JSON.parse(savedSpells));
    }

    // Call the getAllSpells function to retrieve the spells from the API
    getAllSpells().then((retrievedSpells) => {
      // Set the state of spells to the retrieved spells
      setSpells(retrievedSpells);

      // Store the retrieved spells in the local storage
      localStorage.setItem("spells", JSON.stringify(retrievedSpells));
    });

    // The effect hook will only run once when the component is mounted
  }, []);

  // Render the loading message if there are no spells retrieved from the API
  // Otherwise, render a list of spell cards
  return (
    <div className="App">
      {spells.length === 0 && <span className="loading">Loading...</span>}
      <ul className="spell-list">
        {spells.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </ul>
    </div>
  );
}
