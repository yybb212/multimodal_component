import React from 'react';

export default function DatePicker({ title, width }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={title}>{title}</label>
      <input type="date" id={title} style={{ width: width }} />
    </div>
  );
};