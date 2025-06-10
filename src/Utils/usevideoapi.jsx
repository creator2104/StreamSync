import { useEffect, useState } from "react";
import { YouTube_Videos_Api } from "../Utils/Constant";

const useVideos = () => {
  //  This is a custom hook.
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  // Initialized as null (no error yet).
  const [loading, setLoading] = useState(true);
  // When loading === true → Show shimmer
  // When loading === false → Hide shimmer, show videos or error

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(YouTube_Videos_Api);
        const data = await res.json();
        setVideos(data.items);
        // Updates the videos state with the actual list of videos (data.items).
      } catch (err) {
        //  If there’s any error during fetch or res.json(), it jumps here.
        setError(err);
        //  Stores the error in the error state so we can show it in the UI.
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false); // stop loading in both success & error
      }
    };

    getVideos();
  }, []);

  return { videos, error, loading };
  // Imagine your custom hook is like a kitchen.
  // Inside it, you're cooking the videos and checking for any errors.
  // Now, your component is like a waiter calling the kitchen
  // Without return { videos, error }, the component would get nothing, and couldn’t show videos or errors.
};

export default useVideos;
