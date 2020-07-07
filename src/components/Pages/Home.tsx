import React from 'react';
import Sunset from "./sunset.jpeg"
import Van from './van.jpeg'
import Hotel from './gilbert.jpeg'
import Lights from './light.jpeg'
import Img from 'react-cool-img'
const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <h3>“Some sort of pressure must exist; the artist exists because the world is not perfect. Art would be useless if the world were perfect, as man wouldn’t look for harmony but would simply live in it. Art is born out of an ill-designed world.”</h3>
      <Img
        src={Sunset}
        height="200"
        alt="React Cool Img"
        debounce={1000}
      />
      <h3>Remember that wherever your heart is, there you will find your treasure.</h3>
      <Img
        src={Van}
        height="210"
        alt="React Cool Img"
        debounce={1000}
      />
      <h3>Be yourself; everyone else is already taken.</h3>
      <Img
        src={Hotel}
        height="215"
        alt="React Cool Img"
        debounce={1000}
      />
      <h3>What doesn't kill me only makes me that much stronger</h3>
      <Img
        src={Lights}
        height="215"
        width="200"
        alt="React Cool Img"
        debounce={1000}
      />
    </div>
  )
};

export default Home;