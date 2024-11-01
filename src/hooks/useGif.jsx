import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagmemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=`;

const useGif = (tag = '') => {
  const [gif, setGif] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(tag = '') {
    setLoading(true);
    const url = tag ? `${tagmemeUrl}${tag}` : randomUrl;
    try {
      const response = await axios.get(url);
      const imageSource = response?.data?.data?.images?.downsized_large?.url || response?.data?.data?.images?.original?.url;
      if (imageSource) setGif(imageSource);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, loading, fetchData };
};

export default useGif;
