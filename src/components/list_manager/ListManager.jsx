import React, { useState } from 'react';

function ListManager() {
  const [items, setItems] = useState([]);
  const [nextId, setNextId] = useState(0); // For unique keys

  const addItem = () => {
    setItems([...items, { id: nextId, text: `Item ${nextId}` }]);
    setNextId(nextId + 1);
  };

  const removeItem = (idToRemove) => {
    setItems(items.filter(item => item.id !== idToRemove));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;