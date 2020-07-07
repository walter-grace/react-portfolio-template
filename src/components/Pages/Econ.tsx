import React from 'react';
import Img from 'react-cool-img';
import Thomas from './thomas.png'
import Game from './gameof.png'

const Econ: React.FC = () => {
  return (
    <div>
      <h1>There's no such thing as a Free lunch.</h1>
      <Img
        src={Thomas}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <h3>
          <a href="https://www.youtube.com/watch?v=4sM5sQIZXlg">
          
          <p>
             -  Thomas Sowell's overall messages
            </p>
          </a>
      </h3>
      <h3>
          <a href="https://www.youtube.com/watch?v=V6ZPg6kOBkc">
          
          <p>
            -   Facts and Fallacies Uncommon Knowledge Thomas Sowell
            </p>
          </a>
      </h3>
      <Img
          src={Game}
          height="220"
        />
                <h1>
        <a href="https://www.youtube.com/watch?v=ZlovTtskPfY"> 
        <br/>
        <p>
          Why Nations Fail? 
          </p>
          </a>
        </h1>
    </div>
  )
};

export default Econ;