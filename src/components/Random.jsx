import React, { useState } from 'react';

const Random = () => {
  const [gifs, setGifs] = useState(""); // Initialize state to store the GIF URL

  function clickHandler() {
    // You can add functionality to fetch a random GIF and update the state here
    setGifs("https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"); // Example GIF URL
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-4">Random GIF</h1>
      <img src={gifs} alt="Random GIF" className="w-full h-72 object-cover mb-4" />
      <button onClick={clickHandler} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate
      </button>
    </div>
  );
}

export default Random;
