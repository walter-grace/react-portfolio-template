import React, { Dispatch, SetStateAction } from 'react';
import {PageNameProps} from '../App/App';
import Img from 'react-cool-img';
import Peace from './peace.jpeg'
import Snow from './snow.jpeg'



export interface LandingPageProps {
  setPage: Dispatch<SetStateAction<PageNameProps['pageNames']>>
}

const LandingPage: React.FC<LandingPageProps> = (Props) => {
  return (
    <div>
      <h1>n1c0$w0rld</h1>

      <div>
        <h2>personal website</h2>
        <br/><br/>
        <p>a place to store some of my thoughts</p>
        <br/><br/>
      </div>
      <div>
      <Img
        src={Peace}
        height="310"
        alt="React Cool Img"
        debounce={1000}
      />
      <Img
        src={Snow}
        height="310"
        alt="React Cool Img"
        debounce={1000}
      />
      </div>

      {/* use passed setPage property to set 'page' in App.tsx */}
      <div onClick={() => Props.setPage('home')} style={{cursor: 'pointer'}}>
        <p>Continue to Home</p>
      </div>
    </div>
  )
};

export default LandingPage;