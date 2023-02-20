import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import './MenuItems.css';
/* import { scroller } from "../../helpers/scroller"; */
import { Link } from 'react-router-dom';
import { goTop } from '../../helpers/goTop';

const MenuItems = ({ items, depthLevel, handleClickPack, handleClickPro, expand, setExpand }) => {

  const [dropdown, setDropdown] = useState(false);
/*   const [scroll, setScroll] = useState(false); */
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const closeExpand = () => {
    goTop();
    setExpand(!expand);
  }

  return (
    <>
      <li
        className={expand ? "menu-items-dropdown" : (depthLevel === 1 ? "menu-items sub-menu-font" : "menu-items menu-items-font")}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}
      >
        {items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {window.innerWidth < 960 && depthLevel === 0 ? (
                items.title
              ) : (
                <Link className='menu-items-inactive' to={items.url}>{items.title}</Link>
              )}

              {depthLevel > 0 &&
                window.innerWidth < 960 ? null : depthLevel > 0 &&
                  window.innerWidth > 960 ? (
                <span>&raquo;</span>
              ) :
                (<span className='arrow-align'>&nbsp;<p className={expand ? ("drop-arrow disable") : ("drop-arrow")}>&#10095;</p></span>)}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              expand={expand}
              setExpand={setExpand}
            />
          </>
        ) : !items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}{' '}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              expand={expand}
            />
          </>
        ) : (
          <Link className='menu-items-inactive'
            onClick={items.title === "CASA PACK" ? handleClickPack
              : (items.title === "CASA PRO") ?
                handleClickPro
                : (items.title === "CONTACTO" || items.title === "PREGUNTAS FRECUENTES" ? closeExpand : null)
            }
            to={items.url}>
            {items.title}
          </Link>
        )}
      </li>
    </>

  );
};

export default MenuItems;
