import React from 'react';
import Random from './components/Random';
import Tags from './components/Tags';
import useGif from './hooks/useGif';
import Spinner from './components/Spinner';

export default function App() {
  return (
    <div 
      className="bg-cover bg-center h-auto flex flex-col items-center" 
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <h1 className="text-3xl font-bold bg-white text-black rounded-lg mt-10 w-10/12 text-center px-10 py-2 shadow-lg">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center w-full mt-8">
        <Random />
        <Tags />
      </div>
    </div>
  );
}
