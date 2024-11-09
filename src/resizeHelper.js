// src/resizeHelper.js
export function startAutoResize(interval = 500) {
    let prevHeight = 0;
  
    setInterval(() => {
      const adjustHeight = 2;
      const height = document.body.scrollHeight;
  
      if (height !== prevHeight) { // Only send if height has changed
        console.log("Sending resize message with height:", height + adjustHeight); // Log the height being sent
        window.parent.postMessage(
          {
            height: height + adjustHeight,
            source: "interactive-library-resize",
          },
          "*"
        );
        prevHeight = height; // Update previous height
      }
    }, interval); // Interval is set here
  }
  