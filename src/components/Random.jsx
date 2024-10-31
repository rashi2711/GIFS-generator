// src/components/Random.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner'; // Correct path

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY; 
console.log("API Key:", API_KEY); 

const Random = () => {
  const [gif, setGif] = useState(null);
  const [loading, setLoading] = useState(true); 
  
  async function fetchData() {
    setLoading(true); 
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);
      console.log("API Response:", response); 

      const imageSource = response?.data?.data?.images?.downsized_large?.url || response?.data?.data?.images?.original?.url;
      
      if (imageSource) {
        setGif(imageSource);
      } else {
        console.error("Image source not found in the API response");
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    
    setLoading(false); 
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-5 p-5'>
      <h1 className='mt-5 text-2xl uppercase font-bold text-white'>A Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-64 flex justify-center items-center overflow-hidden rounded-lg"> 
          {gif ? (
            <img src={gif} alt="Random GIF" className="h-full object-contain" /> 
          ) : (
            <p className="text-white">No GIF available</p>
          )}
        </div>
      )}
      <button onClick={clickHandler}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5 hover:bg-yellow-200 transition duration-300">
        Generate
      </button>
    </div>
  );
}

export default Random;
