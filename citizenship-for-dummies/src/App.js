import React, { useState } from 'react'; // Import React and useState from React library
import { Parallax, ParallaxLayer } from '@react-spring/parallax'; // Import Parallax components
import logo from './logo.svg'; // Import the logo image
import './App.css'; // Import the CSS styles

// Create a reusable InteractiveBox component
function InteractiveBox({ title, content }) {
  const [showInfo, setShowInfo] = useState(false); // Define a state variable to track whether to show content

  // Function to toggle the display of content
  const toggleInfo = () => {
    setShowInfo(!showInfo); // Toggle the value of showInfo
  };

  return (
    <div
      className="interactive-box" // Set the CSS class name for styling
      onClick={toggleInfo} // Attach the toggleInfo function to the click event
      style={{
        cursor: 'pointer', // Change the cursor to a pointer on hover
        backgroundColor: showInfo ? 'lightgray' : 'white', // Change the background color when clicked
        display: 'flex', // Use flex layout for positioning
        flexDirection: 'column', // Arrange items in a column
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        padding: '20px', // Add padding to the box
        borderRadius: '10px', // Add rounded corners
        width: '70%', // Set the width (adjust as needed)
        height: '70vh', // Set the height (adjust as needed)
        margin: '0 auto', // Center horizontally
        fontSize: '24px', // Increase font size
      }}
    >
      <h2>{title}</h2> {/* Display the box title */}
      {showInfo && <p>{content}</p>} {/* Display content when showInfo is true */}
    </div>
  );
}

function App() {
  return (
    <Parallax pages={3}> {/* Create a Parallax container with 3 pages */}
      {/* Background layers */}
      <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: 'lightblue' }} /> {/* Background for page 1 */}
      <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: 'lightcoral' }} /> {/* Background for page 2 */}
      <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'lightgreen' }} /> {/* Background for page 3 */}

      {/* Home section */}
      <ParallaxLayer offset={0} speed={0.2}> {/* Content for page 1 */}
        <div className="App"> {/* Container for the home section */}
          <header className="App-header"> {/* Header section */}
            <img src={logo} className="App-logo" alt="logo" /> {/* Display the logo */}
            <h1>Welcome to My Interactive Website</h1> {/* Display a title */}
            <p>Edit <code>src/App.js</code> and save to reload.</p> {/* Display a message */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> {/* Display a link */}
          </header>
        </div>
      </ParallaxLayer>

      {/* Box 1 section */}
      <ParallaxLayer offset={1} speed={0.2}> {/* Content for page 2 */}
        <InteractiveBox title="Box 1" content="Click me for more information about Box 1" /> {/* Display the InteractiveBox component */}
      </ParallaxLayer>

      {/* Box 2 section */}
      <ParallaxLayer offset={2} speed={0.2}> {/* Content for page 3 */}
        <InteractiveBox title="Box 2" content="Click me for more information about Box 2" /> {/* Display the InteractiveBox component */}
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
