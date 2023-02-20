import React, {useState} from 'react';
import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';
import './Navbar.css';

const Navbar = ({responsive, onExpand, isExpand, handleClickPack, handleClickPro}) => {
  
  return (
    <>
    <nav >
      {responsive ? (
        <div className="main-icon" onClick={() => onExpand(!isExpand)}>
          <i className={isExpand ? "gg-menu gg-close" : "gg-menu gg-open"}></i>
        </div>
      ) : 
      
      (<ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              handleClickPack={handleClickPack}
              handleClickPro={handleClickPro}
            />
          );
        })}
      </ul>)}
    </nav>
    </>
  );
};

export default Navbar;
