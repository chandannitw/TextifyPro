// src/Components/MyComponent.js
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div>
      {isVisible && <p>This is a toggleable component</p>}
    </div>
  );
}

export default MyComponent;
