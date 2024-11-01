
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY; 
console.log("API Key:", API_KEY); 

const Tags = () => {
  const [tag, setTag] = useState([]);
  const {gif,loading,fetchData}=useGif(tag)
 

  return (
    <div className='w-1/2 bg-blue-600 rounded-lg border border-gray-800 flex flex-col items-center gap-y-5 mt-5 p-5 shadow-lg mb-4'>
      <h1 className='mt-5 text-2xl uppercase font-bold text-white'> Random {tag}</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-64 flex justify-center items-center overflow-hidden rounded-lg"> 
          {gif ? (
            <img src={gif} alt="Tags GIF" className="h-full object-contain" /> 
          ) : (
            <p className="text-white">No GIF available</p>
          )}
        </div>
      )}
      <input  className="w-10/12 bg-white text-lg py-2 rounded-lg mb-3 text-center" onChange={(event)=>setTag(event.target.value)} value={tag}/>
      <button onClick={()=>fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5 hover:bg-yellow-300 transition duration-300">
        Generate
      </button>
    </div>
  );
}

export default Tags;
