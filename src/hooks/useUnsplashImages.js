import { useEffect, useState } from "react";

function useUnsplashImages() { 
  const [unsplashImages, setUnsplashImages] = useState([]); 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUnsplashImages = async () => { 
      const API_KEY = "OEBxdi2l4paWRiEDPn6WChmgM9UkLPaNnDQk_wKleWA";
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=sports+cars&client_id=${API_KEY}`
        );

        if (response.status === 200) {
          const data = await response.json();
          setUnsplashImages(data.results); 
          setIsLoading(false);

        } else {
          setError(new Error("Error fetching images from Unsplash"));
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUnsplashImages(); 
  }, []);
  // console.log(unsplashImages); 

  // console.log(unsplashImages)

  return { unsplashImages, isLoading, error }; 
}

export default useUnsplashImages; 