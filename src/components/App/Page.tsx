import React from 'react';
import './Page.css';

export interface PageProps {
  style?: any;
  onClick?: any;
}

// wraps child in 'page' class; 
// applies styling
const Page: React.FC<PageProps> = (Props) => {

  return (
    <div className={'page'} style={Props.style}>
      {Props.children}
    </div>
  );
}

export default Page;
