import React from 'react';
import '../App.css';

function PolaroidCard({ image, caption, children }) {
  return (
    <div className="polaroid">
      <div className="polaroid-content">
        {image ? (
          <img src={image} alt={caption} className="polaroid-image" />
        ) : (
          <div className="custom-content">{children}</div>
        )}
      </div>
      <div className="caption">{caption}</div>
    </div>
  );
}


export default PolaroidCard;
