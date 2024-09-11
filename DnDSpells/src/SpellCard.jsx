import { useState } from "react";

export default function SpellCard({ spell }) {
const [isSaved, setIsSaved] = useState(false);

const saveSpellToBook = () => {
let savedSpells = JSON.parse(localStorage.getItem("spellbook")) || [];
if (!savedSpells.some((s) => s.index === spell.index)) {
    savedSpells.push(spell);
    localStorage.setItem("spellbook", JSON.stringify(savedSpells));
    setIsSaved(true);
}
};

return (
<li className="spell-card">
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
    <button onClick={saveSpellToBook} disabled={isSaved}>
    {isSaved ? "Saved!" : "Save to Spellbook"}
    </button>
</li>
);
}
