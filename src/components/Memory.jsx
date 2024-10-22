import React, { useEffect, useState } from 'react';

function Memory() {
  const [gridsize, setGridsize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flippedcards, setFlippedcards] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  function handleGridesize(e) {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridsize(size);
  }

  const intializeGame = () => {
    const totalcards = gridsize * gridsize;
    const pairs = Math.floor(totalcards / 2);
    const numbers = [...Array(pairs).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalcards)
      .map((number, index) => ({
        id: index,
        number,
      }));
    setCards(shuffledCards);
    setFlippedcards([]);
    setSolved([]);
    setWon(false);
    setDisabled(false);
  };

  useEffect(() => {
    intializeGame();
    let hm=[1,2,3,4,5]
    console.log([...hm,...hm]);
    
  }, [gridsize]);

  function handleclick(id) {
    if (disabled || won || flippedcards.includes(id) || solved.includes(id)) return;

    if (flippedcards.length === 0) {
      setFlippedcards([id]);
      return;
    }

    if (flippedcards.length === 1) {
      setDisabled(true);
      setFlippedcards([...flippedcards, id]);
      const clickedCard = cards.find((card) => card.id === id);
      const firstFlippedCard = cards.find((card) => card.id === flippedcards[0]);

      if (clickedCard.number === firstFlippedCard.number) {
        setSolved([...solved, firstFlippedCard.id, clickedCard.id]);
        setFlippedcards([]);
        setDisabled(false);

        if (solved.length + 2 === cards.length) {
          setWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedcards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  }

  function flipped(id) {
    return flippedcards.includes(id) || solved.includes(id);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-6'>Memory Game</h1>
      <div>
        <label htmlFor='gridsize'>Grid Size: "max 10"</label>
        <input
          type='number'
          id='gridsize'
          value={gridsize}
          min={2}
          max={10}
          onChange={handleGridesize}
          className='border-2 border-gray-300 rounded px-2 py-1'
        />
      </div>
      <div className='w-[354px] flex justify-center items-center gap-3 flex-wrap mt-5'>
        {cards.map((card) => (
          <div
            className={`flex items-center justify-center w-16 h-16 rounded-lg text-xl font-bold cursor-pointer transition-all duration-300 ${
              flipped(card.id) ? 'bg-blue-400' : 'bg-gray-300'
            }`}
            key={card.id}
            onClick={() => handleclick(card.id)}
          >
            {flipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>
      {won && <p className='text-green-600 font-bold mt-4'>Congratulations! You won!</p>}
      <button
        className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600'
        onClick={intializeGame}
      >
        Reset
      </button>
    </div>
  );
}

export default Memory;
