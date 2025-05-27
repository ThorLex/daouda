// src/components/LazyImage.js
import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className, loading = 'lazy', ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setImageSrc(null);
    setImageError(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setImageError(true);
    };

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (imageError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500`}
        {...props}
      >
        <span role="img" aria-label="Image non disponible">📷</span>
      </div>
    );
  }

  if (!imageSrc) {
    return (
      <div 
        className={`${className} bg-gray-200 animate-pulse`}
        {...props}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt || ""}
      className={className}
      loading={loading}
      {...props}
    />
  );
};

export default React.memo(LazyImage);