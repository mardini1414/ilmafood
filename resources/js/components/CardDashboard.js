import React from 'react';

function CardDashboard(props) {
  const { background, title, value } = props;
  return (
    <div
      className={`p-3 w-100 rounded d-grid ${background}`}
      style={{ height: 100 }}
    >
      <span className="text-light">{title}</span>
      <strong className="text-light" style={{ fontSize: '2rem' }}>
        {value}
      </strong>
    </div>
  );
}

export default CardDashboard;
