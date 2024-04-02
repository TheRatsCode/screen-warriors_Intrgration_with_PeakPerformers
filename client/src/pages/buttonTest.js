import React, { useState } from "react";

function ColorChangingButton() {
  // Define state to store the button color
  const [buttonColor, setButtonColor] = useState('#007bff');

  // Function to generate a random color
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  // Event handler for button click
  const handleClick = () => {
    const randomColor = getRandomColor();
    setButtonColor(randomColor); // Update button color
  };

  return (
    <div>
    <button
      style={{ backgroundColor: buttonColor, color: '#ffffff' }}
      onClick={handleClick}
    >
      Change Color
    </button>
    </div>
  );
}

export default ColorChangingButton;