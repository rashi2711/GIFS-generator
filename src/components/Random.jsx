import React from 'react';
import Spinner from './Spinner'; 
import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-5 p-5">
      <h1 className="mt-5 text-2xl uppercase font-bold text-white">A Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-64 flex justify-center items-center overflow-hidden rounded-lg"> 
          {gif ? (
            <img src={gif} alt="Random GIF" className="h-full object-contain" /> 
          ) : (
            <p className="text-white">GIF could not be loaded. Please try again.</p>
          )}
        </div>
      )}
      <button 
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5 hover:bg-yellow-200 transition duration-300"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
