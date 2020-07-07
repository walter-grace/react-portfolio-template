import React from 'react';
import Img from 'react-cool-img';
import Red from './red.jpeg'
import Stop from './stop.jpeg'
import Geo from './geo.jpeg'
import loadingImage from './loading.gif'


const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <h3>
      i enjoy the economics of life as well as observing the art  
      </h3>
      <Img
        placeholder={loadingImage}
        src={Red}
        height="310"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Stop}
        height="310"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Geo}
        height="310"
        alt="React Cool Img"
        debounce={1000}
      />
    </div>
  )
};

export default About;