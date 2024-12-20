import React from 'react';

const DetailPopup = ({
  label = '',
  subtitle = '',
  bgColor = '#ffffff',
  color = '#000000',
}) => {
  return label && label.length ? (
    <div
      style={{
        position: 'absolute',
        padding: '12px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'cenetr',
        minWidth: '160px',
        boxShadow: '-2px 2px 8px 0 #dddddd',
        borderRadius: '4px',
        left: '50%',
        top: '-210px',
        transform: 'translateX(-50%)',
        background: bgColor || '#ffffff',
        border: `2px solid black`,
      }}
    >
      <p
        style={{
          color: color || '#000000',
          padding: '0 0 4px 0',
          margin: 0,
          fontWeight: 600,
          fontSize: '1.2rem',
          borderBottom: '1px solid black',
        }}
      >
        {label}
      </p>
      <span
        style={{
          color: color || '#000000',
          padding: 0,
          margin: 0,
          fontWeight: 600,
          fontSize: '1.2rem',
        }}
      >
        {subtitle}
      </span>
    </div>
  ) : (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 18px',
        width: '200px',
        border: '1px solid #aaaaaa',
        background: '#ffffff',
        boxShadow: '-2px 2px 8px 0 #dddddd',
        borderRadius: '4px',
        left: '-10px',
        top: '-50px',
      }}
    >
      <p style={{ color: 'red', padding: 0, margin: 0 }}>R: 5</p>
      <p style={{ color: 'orange', padding: 0, margin: 0 }}>A: 10</p>
      <p style={{ color: 'green', padding: 0, margin: 0 }}>G: 78</p>
      <p style={{ color: 'blue', padding: 0, margin: 0 }}>B: 34</p>
    </div>
  );
};

export default DetailPopup;
