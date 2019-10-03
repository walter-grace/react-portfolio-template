import React from 'react';
import { Icon } from 'antd'; //antd has cool icons

export interface PageProps {
  style?: any;
  onClick?: any;
  setPage: any
}

const Nav: React.FC<PageProps> = (Props) => {

  const [expanded, setExpanded] = React.useState(false)

  // controls up/down movement of nav
  const navStyle = {
    transform: `translateY(${ expanded ? '0' : '-100%'})`,
    transitionDuration: '0.5s',
    transitionTimingFunction: 'cubic-bezier(.68,0,.32,1)',
    transformOrigin: '50% 0'
  } as React.CSSProperties;

  // icon styling
  const navExpandStyle = {
    transform: `translateY(${expanded ? '70vh' : '0'})`,
    top: `10vh`,
    right: '10vh'
  }

  return (

    <div>
      
      <div 
        onClick={() => setExpanded(!expanded)}
        id={'nav-expand'}
        style={{...Props.style, ...navExpandStyle}}
      >
        <Icon type={`${expanded ? 'close' : 'menu'}`}/>
      </div>

      {/* use passed setpage property to set 'page' in App.tsx */}
      <div id='nav' style={{...Props.style, ...navStyle}}>
        <h1 onClick={() => {Props.setPage(0); setExpanded(false)}}>Landing Page</h1>
        <h1 onClick={() => {Props.setPage(1); setExpanded(false)}}>Home</h1>
        <h1 onClick={() => {Props.setPage(2); setExpanded(false)}}>About</h1>
        <h1 onClick={() => {Props.setPage(3); setExpanded(false)}}>Contact</h1>
      </div>
    </div>
  );
}

export default Nav;
