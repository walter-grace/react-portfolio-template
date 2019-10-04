import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Page from './Page';

// pages
import LandingPage from '../Pages/LandingPage';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';


const App: React.FC = () => {


  const [page, setPage] = React.useState(0)

  // do not display nav if on landing page
  const navStyle = {
    opacity: `${page > 0 ? 1 : 0}`,
    pointerEvents: `${page > 0 ? '' : 'none'}`,
    transitionDuration: '0.5s'
  } as React.CSSProperties;

  // hide page if not current page
  const pageStyle = (pageNumber:number) => {
    return {
      transform: `translateX(${ pageNumber === page ? '0' : '-100%' })`,
      opacity: `${ pageNumber === page ? '1' : '0' }`,
      transitionDelay: '0.25s'
    } as React.CSSProperties;
  }  


  return (
    <div id='app'>

      {/* pass in setPage function; pass in navstyle */}
      <Nav setPage={setPage} style={navStyle}/>

      <main id='main'>

        {/* pass in setPage function */}
        {/* call pageStyle() to return styling specific to each page */}
        <Page style={pageStyle(0)}>
          <LandingPage continue={setPage}/>
        </Page>

        <Page style={pageStyle(1)}>
          <Home />
        </Page>

        <Page style={pageStyle(2)}>
          <About />
        </Page>

        <Page style={pageStyle(3)}>
          <Contact />
        </Page>
      </main>
    
    </div>

  );
}

export default App;
