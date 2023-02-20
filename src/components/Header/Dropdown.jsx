import MenuItems from './MenuItems';
import { scroller } from "../../helpers/scroller";
import './Dropdown.css';
import { useState } from 'react';

const Dropdown = ({ submenus, dropdown, depthLevel, expand, setExpand }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  const dropdownExpand = expand == true ? 'dropExpand' : 'dropdown';
  if (expand == true) {
    dropdown = ''
  }

  const [scroll, setScroll] = useState(false);

  const handleClickPromo1 = () => {
    setScroll(!scroll);
    scroller(".promo1", 115);
    setExpand(!expand);
  }

  const handleClickPromo2 = () => {
    setScroll(!scroll);
    scroller(".promo2", 115);
    setExpand(!expand);
  }

  const handleClickPromo3 = () => {
    setScroll(!scroll);
    scroller(".promo3", 115);
    setExpand(!expand);
  }

  return (
    <ul
      className={`${dropdownExpand} ${dropdownClass} ${dropdown ? 'show' : ''
        }`}
    >
      {submenus.map((submenu, index) => (
        <div className='subItemAlign'
          onClick={submenu.title === "PROMO 1" ? handleClickPromo1 :
            submenu.title === "PROMO 2" ?
              handleClickPromo2
              : submenu.title === "PROMO 3" ?
                handleClickPromo3 : null}>
          <span>&#10095;</span>
          <MenuItems
            items={submenu}
            key={index}
            depthLevel={depthLevel}
          />
        </div>
      ))}
    </ul>
  );
};

export default Dropdown;
