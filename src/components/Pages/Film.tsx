import React from 'react';
import Img from 'react-cool-img';
import Donut from './donut.jpeg'
import Selfie from './selfie.jpeg'
import Red from './red.jpeg'
import Bowling from './bowling.jpeg'
import Egypt from './egypt.jpeg'
import AdultSwim from './adultswim.jpeg'
import Banana from './banana.jpeg'
import Chicago from './chicago.jpeg'
import Club from './club.jpeg'
import Flower from './flower.jpeg'
import Wall from './wall.jpeg'
import Snow from './snow.jpeg'

const Film: React.FC = () => {
  return (
    <div>
      <h1>Cinema</h1>
      <Img
        src="https://media.giphy.com/media/l0Ex0TKGALACWPYKA/giphy.gif"
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src="https://media.giphy.com/media/TuC38AjhS76tq/giphy.gif"
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src="https://media.giphy.com/media/1oKWsJkxqP02s/giphy.gif"
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Banana}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={AdultSwim}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Donut}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Selfie}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Red}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Bowling}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Egypt}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Wall}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Snow}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
    </div>
  )
};

export default Film;