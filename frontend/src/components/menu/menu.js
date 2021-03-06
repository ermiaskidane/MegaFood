import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import axios from "axios"

import "./menu.scss";
import Sprite from "../../assets/images/sprite.svg";
import { detailMenus} from "../../store/actions/menusActions"

const Menu = () => {

  const [menus, setMenus] = useState([])
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchMenus = async () => {
      const { data } = await axios.get("/api/homeScreen/menus")
 
      setMenus(data)
    }
    fetchMenus()
  }, [])
 
  const addToCartHandler = (id, qty) => {
    console.log(id)
    dispatch(detailMenus(id, qty))
  }
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu__content">
      {menus.map((menu) => (
        <div className="menu__content--one"  key={menu._id}>
             <div className="menu__content--wrapper">
             <img src={menu.image} alt="BurgerTwo" />
 
             {/* ##### corner content ##### */}
 
             <div>
               <h5>New</h5>
               {menu.offer === "" ? "" : (<h5 style={{ background: "#ea8025" }}>{menu.offer}</h5>) }
               
             </div>
 
             {/* ##### icon content ##### */}
             <div className="menu__content--options">
               <div className="menu__content--detail">
                 <NavLink to="/">
                   <svg>
                     <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                   </svg>
                 </NavLink>
               </div>
               <div className="menu__content--detail">
                 <NavLink to="/">
                   <svg>
                     <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                   </svg>
                 </NavLink>
               </div>
               <div className="menu__content--detail">
                 <NavLink to="/">
                   <svg>
                     <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                   </svg>
                 </NavLink>
               </div>
             </div>
           </div>
           {/* ##### purchase Content ##### */}
          <p onClick={() => addToCartHandler(menu._id, qty)}>{menu.name}</p>
          <p>
            {
              menu.oldPrice ? (<s>${(menu.oldPrice).toFixed(2)}</s>) : null}
              <span style={{ paddingLeft: "0.3rem" }}>${(menu.price).toFixed(2)}</span>
          </p>
        </div>
          ))}
        </div>
    </div>
  ); 
};

export default Menu;
