import React from 'react';
import Img from 'react-cool-img';
import Game from './gameof.png'


const Literature: React.FC = () => {
  return (
    <div>
      <h1>Interactive Knowledge</h1>
      <h3>
      Imagination is your greatest tool
      </h3>
      <div>
        <Img
          src="https://media.giphy.com/media/aQFD03XQ8Cs6c/giphy.gif"
          height="220"
        />
      </div>
      <h1>
        <a href="https://the-wonderful-book-club.netlify.app/"> 
        <br/>
        <p>
          Book Blog
          </p>
          </a>
        </h1>
        <h1>
        <a href="https://interact1vebook.netlify.app/"> 
        <br/>
        <p>
          Interactive Books
          </p>
          </a>
        </h1>    
    </div>
  )
};

export default Literature;