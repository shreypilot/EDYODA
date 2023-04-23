import React, { useState } from 'react';
import './PythonLoops.css';

function PythonLoops() {
  const [selectedColumn, setSelectedColumn] = useState(null);

  const columns = [
    { id: 1, title: 'Session Plan', content: 'Session plan details...' },
    { id: 2, title: 'Pre-watch Session Recording', content: 'Pre-watch session recording details...' },
    { id: 3, title: 'Reference', content: 'Reference details...' },
  ];

  const handleColumnClick = (columnId) => {
    if (selectedColumn === columnId) {
      setSelectedColumn(null);
    } else {
      setSelectedColumn(columnId);
    }
  };

  return (
    <div className="python-loops">
      <h2 className="python-loops-heading">Python Loops</h2>
      <div className="python-loops-date">
        <span className="python-loops-date-time">9:00 AM - 10:00 AM</span>
        <span className="python-loops-date-day">Monday, April 25th</span>
      </div>
      <div className="python-loops-columns">
        {columns.map((column) => (
          <div
            key={column.id}
            className={`python-loops-column ${selectedColumn === column.id ? 'selected' : ''}`}
            onClick={() => handleColumnClick(column.id)}
          >
            <h3 className="python-loops-column-title">{column.title}</h3>
            <div className="python-loops-column-content">{column.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PythonLoops;
