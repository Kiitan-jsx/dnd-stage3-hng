import { useState, useEffect } from 'react';
import useUnsplashImages from '../../hooks/useUnsplashImages';
import GalleryImage from './GalleryImage';
import Navbar from './Navbar';
import { Pinwheel } from "@uiball/loaders";


const GalleryPage = () => {
  const { unsplashImages, isLoading, error } = useUnsplashImages();
  const [stateImages, setStateImages] = useState([]);

  useEffect(() => {
    if (unsplashImages && unsplashImages.length > 0) {
      setStateImages(unsplashImages);
    }
  }, [unsplashImages]);

  if (isLoading)
    return (
      <div 
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pinwheel speed={1.75} />
      </div>
    );


  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = [...stateImages];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setStateImages(reorderedImages);
  };

  console.log(unsplashImages)

  return (
    <div className='bg-stone-950'>
      <Navbar />
      <GalleryImage images={stateImages} onDragEnd={handleDragEnd} />
    </div>
  );
};

export default GalleryPage;