import React from 'react';
import './Nav.css'
import { Menu, Close } from '@material-ui/icons';

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
    transform: `translateY(${expanded ? 'calc(100vh - (var(--space) * 4))' : '0'})`,
    top: `var(--space)`,
    right: 'var(--space)'
  }

  return (

    <div>
      
      <div 
        onClick={() => setExpanded(!expanded)}
        id={'nav-expand'}
        style={{...Props.style, ...navExpandStyle}}
      >
        { expanded ? <Close /> : <Menu /> }
      </div>

      {/* use passed setpage property to set 'page' in App.tsx */}
      <div id='nav' style={{...Props.style, ...navStyle}}>
        <h1 onClick={() => {Props.setPage('literature'); setExpanded(false)}}>Literature</h1>
        <h1 onClick={() => {Props.setPage('film'); setExpanded(false)}}>Film</h1>
        <h1 onClick={() => {Props.setPage('home'); setExpanded(false)}}>Home</h1>
        <h1 onClick={() => {Props.setPage('about'); setExpanded(false)}}>About</h1>
        <h1 onClick={() => {Props.setPage('contact'); setExpanded(false)}}>Art</h1>
        <h1 onClick={() => {Props.setPage('econ'); setExpanded(false)}}>Econ</h1>
        <h1 onClick={() => {Props.setPage('landingpage'); setExpanded(false)}}>Landing Page</h1>
      </div>
    </div>
  );
}

export default Nav;
