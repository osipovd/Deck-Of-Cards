import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DrawButton from './DrawButton';
import ShuffleButton from './ShuffleButton';
import Card from './Card';

function App() {
    const [deck, setDeck] = useState(null);
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchDeck();
    }, []);

    const fetchDeck = async () => {
        const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        setDeck(response.data);
        setCard(null);  // Clear the current card
    }

    const handleDraw = async () => {
        if(deck.remaining === 0) {
            alert("Error: no cards remaining!");
            return;
        }

        const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
        setCard(response.data.cards[0]);
    }

    const handleShuffle = async () => {
        setLoading(true);
        await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`);
        fetchDeck();
        setLoading(false);
    }

    return (
        <div className="App">
            <DrawButton handleDraw={handleDraw} disabled={loading}/>
            <ShuffleButton handleShuffle={handleShuffle} disabled={loading}/>
            <Card card={card}/>
        </div>
    );
}

export default App;

