import React from 'react';
import './SpellCard.css';

const SpellCard = ({ spell }) => {
return (
<li className="spell-card">
    <hgroup>
    <h4>{spell.name}</h4>
    <p>{spell.description}</p>
    </hgroup>
    <div className="stats">
    <p><strong>Level</strong>: {spell.level}</p>
    <p><strong>School</strong>: {spell.school}</p>
    </div>
</li>
);
};

export default SpellCard;

// export default function SpellCard({ spell }) {
// return (
//     <li className="spell-card">
//     <hgroup>
//         <h4>{spell.name}</h4>
//         <small>
//         {spell.level > 0 && `Level ${spell.level} `}
//         {spell.school.name}
//         {spell.level === 0 && " cantrip"}
//         </small>
//     </hgroup>
//     <div className="stats">
//         <p>
//         <strong>Casting Time</strong>
//         {spell.casting_time}
//         </p>
//         <p>
//         <strong>Range</strong>
//         {spell.range}
//         </p>
//         <p>
//         <strong>Components</strong>
//         {spell.components.join(", ")}
//         </p>
//         <p>
//         <strong>Duration</strong>
//         {spell.duration}
//         </p>
//     </div>
//     </li>
// );
// }

