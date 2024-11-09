// src/resizeHelper.js
let intervalId;

export function initiateAutoResize(interval = 500) {
  if (intervalId) return; // Prevent multiple intervals

  let prevHeight = 0;

  intervalId = setInterval(() => {
    const height = document.body.scrollHeight;

    // Only send a resize message if the height difference is greater than 5 pixels
    if (Math.abs(height - prevHeight) > 5) {
      console.log("Sending resize message with height:", height);

      window.parent.postMessage(
        {
          height: height, // Remove adjustHeight if it’s causing issues
          source: "insendi-activity-resize",
        },
        "*"
      );

      prevHeight = height;
    }
  }, interval);
}
