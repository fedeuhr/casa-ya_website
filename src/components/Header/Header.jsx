import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import { Layout } from '../Layout/Layout';
import { Link } from 'react-router-dom';
import {goTop} from "../../helpers/goTop"
import { menuItems } from '../../menuItems';
import { scroller } from "../../helpers/scroller";
import MenuItems from './MenuItems';
import './Header.css';

const logo = "/icons/Logo blanco.svg";

const Header = () => {

  const [responsive, setResponsive] = useState((window.innerWidth <= 1000) ? true : false);
  const [menuExpand, setMenuExpand] = useState(false);
  const [scroll, setScroll] = useState(false);

  const resize = window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 1000) {
      setResponsive(true);
      setMenuExpand(false);
    } else {
      setResponsive(false);
    }
  });

  const handleClickPack = () => {
    setScroll(!scroll);
    if(responsive === true) {
      scroller("#pack", 175);
    } else {
      scroller("#pack", 100);
    }
    if(menuExpand === true) {
      setMenuExpand(!menuExpand);
    }
  };

  const handleClickPro = () => {
    setScroll(!scroll);
    if(responsive === true) {
      scroller("#pro", 175);
    } else {
      scroller("#pro", 100);
    }
    if(menuExpand === true) {
      setMenuExpand(!menuExpand);
    }
  };

  const goHome = () => {
    goTop("behanvior");
    if (menuExpand === true) {
      setMenuExpand(!menuExpand);
    }
  }

  return (
    <>
    <header>
      <Layout>
        <div className="nav-area">
          <Link onClick={goHome} to="/" className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navbar responsive={responsive} onExpand={setMenuExpand} isExpand={menuExpand} handleClickPack={handleClickPack} handleClickPro={handleClickPro}/>
        </div>
      </Layout>
      
    </header>
    {menuExpand ? 
    (<div className='menuExpand open'> 
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return (
          <MenuItems
            items={menu}
            key={index}
            depthLevel={depthLevel}
            expand={menuExpand}
            setExpand={setMenuExpand}
            handleClickPack={handleClickPack} 
            handleClickPro={handleClickPro}
          />
        );
      })}
    </div>) : 
    (<div className='menuExpand close' />) }
    </>
  );
};

export default Header;