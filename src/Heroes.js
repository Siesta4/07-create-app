import React, { useState } from "react";

function Heroes() {
  const [names, setNames] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер"
  ]);

  function handleDelete(index) {
    setNames(names.filter((_, i) => i !== index));
  }

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index} onClick={() => handleDelete(index)}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default Heroes;