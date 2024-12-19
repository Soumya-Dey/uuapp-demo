import React from 'react';

const DetailPopup = () => {
  return (
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
