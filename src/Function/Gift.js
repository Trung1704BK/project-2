import React, { useState } from 'react';

const gifts = ['CPU', 'RAM 32Gb', 'RGB Keyboard'];

function Gift() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  return (
    <div>
      <h1>{gift || 'Chose gift'}</h1>
      <button onClick={() => randomGift()}>Take </button>
    </div>
  );
}

export default Gift;
