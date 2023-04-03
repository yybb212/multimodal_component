import React from 'react';

export default function TimePicker({ title, width }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={title}>{title}</label>
        <input type="time" id={title} style={{ width: width }} />
      </div>
    );
  };