// src/resizeHelper.js

export function startAutoResize(interval = 500) {
    let prevHeight = 0;
  
    setInterval(() => {
      const adjustHeight = 2;
      const height = document.body.scrollHeight;
  
      if (height !== prevHeight) {
        console.log("Setting iframe height to:", height + adjustHeight);
  
        // Attempt to set the iframe height directly
        if (window.frameElement) { // Checks if this code is running within an iframe
          window.frameElement.style.height = `${height + adjustHeight}px`;
        }
  
        prevHeight = height; // Update previous height
      }
    }, interval); // Interval for checking height changes
  }
  