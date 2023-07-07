import React from 'react';

function DrawButton({ handleDraw, disabled }) {
    return (
        <button onClick={handleDraw} disabled={disabled}>Draw a card</button>
    );
}

export default DrawButton;

