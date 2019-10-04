import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Page from './Page';

// pages
import LandingPage from '../Pages/LandingPage';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

// add your page name here
export interface PageNameProps {
  pageNames: 'landingpage' | 'home' | 'about' | 'contact'
}

const App: React.FC = () => {


  const [page, setPage] = React.useState<PageNameProps['pageNames']>('landingpage')

  // do not display nav if on landing page
  const navStyle = {
    opacity: `${page !== 'landingpage' ? 1 : 0}`,
    pointerEvents: `${page !== 'landingpage' ? '' : 'none'}`,
    transitionDuration: '0.5s'
  } as React.CSSProperties;

  // hide page if not current page
  const pageStyle = (pageName:PageNameProps['pageNames']) => {

    console.log(pageName, page)

    return {
      transform: `translateX(${ pageName === page ? '0' : '-100%' })`,
      opacity: `${ pageName === page ? '1' : '0' }`,
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
        <Page style={pageStyle('landingpage')}>
          <LandingPage setPage={setPage}/>
        </Page>

        <Page style={pageStyle('home')}>
          <Home />
        </Page>

        <Page style={pageStyle('about')}>
          <About />
        </Page>

        <Page style={pageStyle('contact')}>
          <Contact />
        </Page>
      </main>
    
    </div>

  );
}

export default App;
