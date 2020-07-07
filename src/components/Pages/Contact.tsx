import React from 'react';
import Img from 'react-cool-img';
import Van from './van.jpeg'

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Art</h1>
      <h3>
        Content
      </h3>
      <Img
        src="https://media.giphy.com/media/n5GXsYKoe1F3eFcRgq/giphy.gif"
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
       <h1>
        <a href="https://n1cozw0rldz.netlify.app/index"> 
        <br/>
        <p>
          Digital Art
        </p>
        </a>
        </h1>
       <Img
        src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif"
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
       <Img
        src="https://media.giphy.com/media/U86wHVI53I3TPgLaIt/giphy.gif"
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
    </ div>
  )
};

export default Contact;