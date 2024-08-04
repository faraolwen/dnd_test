// components/ImageGrid.js
"use client";

import React, { useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import axios from 'axios';

const ItemTypes = {
  IMAGE: 'image',
};

const ImageGrid = ({ imageUrls }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagePromises = imageUrls.map(async (url) => {
          const response = await axios.get(url, { responseType: 'blob' });
          return URL.createObjectURL(response.data);
        });

        const imageObjects = await Promise.all(imagePromises);
        setImages(imageObjects);
      } catch (err) {
        setError('Failed to load images.');
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, [imageUrls]);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
      update(images, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {error ? (
            <div>{error}</div>
          ) : (
            images.map((image, index) => (
              <ImageTile key={index} index={index} image={image} moveImage={moveImage} />
            ))
          )}
        </div>
      </div>
    </DndProvider>
  );
};

const containerStyle = {
  width: '60%',
  margin: '0 auto',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gap: '10px',
};

const ImageTile = ({ image, index, moveImage }) => {
  const [number, setNumber] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const ref = React.useRef(null);

  const handleNumberClick = () => {
    setIsEditing(true);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    setIsEditing(false);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.IMAGE,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.IMAGE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ ...tileStyle, opacity: isDragging ? 0.5 : 1 }}>
      <img src={image} alt={`image-${index}`} style={imageStyle} />
      <div style={numberContainerStyle} onClick={handleNumberClick}>
        {isEditing ? (
          <select value={number} onChange={handleNumberChange} onBlur={() => setIsEditing(false)} style={selectStyle}>
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        ) : (
          <span>{number}</span>
        )}
      </div>
    </div>
  );
};

const tileStyle = {
  position: 'relative',
  border: '1px solid #ddd',
  padding: '3px',
  backgroundColor: '#fff',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const numberContainerStyle = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '5px',
  borderRadius: '3px',
  cursor: 'pointer',
};

const selectStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
};

export default ImageGrid;
