// src/resizeHelper.js
export function requestResize() {
    const adjustHeight = 2; // Adjust for any padding/borders if needed
    const height = document.body.scrollHeight; // Get the full content height
  
    window.parent.postMessage(
      {
        height: height + adjustHeight,
        source: "interactive-library-resize", // Identifier for the parent listener
      },
      "*"
    );
  }
  