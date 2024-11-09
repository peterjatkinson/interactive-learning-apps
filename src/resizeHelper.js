// src/resizeHelper.js
let intervalId;

export function initiateAutoResize(interval = 500) {
  if (intervalId) return; // Prevent multiple intervals

  let prevHeight = 0;

  intervalId = setInterval(() => {
    const adjustHeight = 2;
    const height = document.body.scrollHeight;

    if (height !== prevHeight) {
      console.log("Sending resize message with height:", height + adjustHeight);

      // Send the resize message to the parent page
      window.parent.postMessage(
        {
          height: height + adjustHeight,
          source: "insendi-activity-resize",
        },
        "*"
      );

      prevHeight = height;
    }
  }, interval);
}
