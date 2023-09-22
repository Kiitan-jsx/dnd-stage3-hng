import React, { useState, useEffect } from 'react';
import GalleryImage from './GalleryImage';
import Navbar from './Navbar';
import { Pinwheel } from "@uiball/loaders";
import { db } from '../../lib/database';

const GalleryPage = () => {
  const [stateImages, setStateImages] = useState([]);
  const [filterTag, setFilterTag] = useState(""); 
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    setStateImages(db);
  }, []);

  useEffect(() => {
    if (filterTag) {
      const filtered = stateImages.filter((image) =>
        image.tag.toLowerCase().includes(filterTag.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(stateImages);
    }
  }, [filterTag, stateImages]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = [...stateImages];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setStateImages(reorderedImages);
  };

  const handleFilterImages = (tagInput) => {
    setFilterTag(tagInput.toLowerCase());
  };

  return (
    <div className='bg-stone-950'>
      <Navbar onFilterImages={handleFilterImages} />
      {stateImages.length === 0 ? (
        <Pinwheel color="#ffffff" />
      ) : (
        <GalleryImage images={filteredImages} onDragEnd={handleDragEnd} />
      )}
    </div>
  );
};

export default GalleryPage;
