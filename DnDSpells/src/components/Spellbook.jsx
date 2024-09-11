import { useEffect, useState } from "react";

export default function Spellbook() {
const [savedSpells, setSavedSpells] = useState([]);

useEffect(() => {
const spells = JSON.parse(localStorage.getItem("spellbook")) || [];
setSavedSpells(spells);
}, []);

return (
<div className="spellbook-page">
    <h1>Your Spellbook</h1>
    <ul className="spell-list">
    {savedSpells.length > 0 ? (
        savedSpells.map((spell) => (
        <li key={spell.index} className="spell-card">
            <hgroup>
            <h4>{spell.name}</h4>
            <small>
                {spell.level > 0 && `Level ${spell.level} `}
                {spell.school.name}
                {spell.level === 0 && " cantrip"}
            </small>
            </hgroup>
            <div className="stats">
            <p>
                <strong>Casting Time</strong>
                {spell.casting_time}
            </p>
            <p>
                <strong>Range</strong>
                {spell.range}
            </p>
            <p>
                <strong>Components</strong>
                {spell.components.join(", ")}
            </p>
            <p>
                <strong>Duration</strong>
                {spell.duration}
            </p>
            </div>
        </li>
        ))
    ) : (
        <p>No spells saved to your spellbook yet.</p>
    )}
    </ul>
</div>
);
}
