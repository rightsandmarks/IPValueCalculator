 
 import React, { useState } from 'react';

 function ExpandablePanel({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="expandable-panel">
      <button className="expandable-header" onClick={() => setOpen(!open)}>
        {title}
        <span className="expand-arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="expandable-content">
          {children}
        </div>
      )}
    </div>
  );
}


export default ExpandablePanel;