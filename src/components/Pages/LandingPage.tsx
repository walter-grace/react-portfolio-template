import React from 'react';

export interface LandingPageProps {
  continue: any;
}

const LandingPage: React.FC<LandingPageProps> = (Props) => {
  return (
    <div>
      <h1>LandingPage</h1>

      <div>
        <h2>Welcome to my portfolio.</h2>
        <br/><br/>
        <p>This is a template built off of the <a href="https://create-react-app.dev/">Create React App</a>.</p>
        <p>It is meant to give you a clean navigation with a few template pages to start out with.</p>
        <p>Feel free to fork this repository and use it however you wish!</p>
        <p>#happyhacking</p>
        <br/><br/>
      </div>

      {/* use passed continue property to set 'page' in App.tsx */}
      <div onClick={() => Props.continue(1)} style={{cursor: 'pointer'}}>
        <p>Continue to Home</p>
      </div>
    </div>
  )
};

export default LandingPage;