import React from 'react';

function ShuffleButton({ handleShuffle, disabled }) {
    return (
        <button onClick={handleShuffle} disabled={disabled}>Shuffle the deck</button>
    );
}

export default ShuffleButton;
