import React from 'react';
import { useRef } from 'react';
import BackgroundExample from './images/exampleNatureImage.jpg';
import ExampleGif from './images/exampleGif.gif'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';

function App() {
  
const ref = useRef();


  return (
    <div className="App">
      
        <Parallax pages={4} ref={ref}>

          <ParallaxLayer>
            <h2>Welcome to my website</h2>
          </ParallaxLayer>

          <ParallaxLayer 
          offset={1} 
          speed={.5}>
            <h2> Mystery Dude </h2>
          </ParallaxLayer>

          <ParallaxLayer
          offset={2}
          speed={2}
          factor={1}
          style={{
            backgroundImage: `url(${BackgroundExample})`,
            backgroundSize: 'cover',
          }}/>

          <ParallaxLayer
          sticky={{start:0, end:1.5}}
          onClick={()=>ref.current.scrollTo(3)}>
            <img src={ExampleGif}/>
          </ParallaxLayer>

        </Parallax>
    </div>
  );
}

export default App;
