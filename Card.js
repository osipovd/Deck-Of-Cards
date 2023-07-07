import React from 'react';

function Card({ card }) {
    return (
        <div>
            {card && (
                <div>
                    <img src={card.image} alt={card.code}/>
                </div>
            )}
        </div>
    );
}

export default Card;
