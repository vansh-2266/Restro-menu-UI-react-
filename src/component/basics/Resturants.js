import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './menuCard.js';
import Navbar from './navbar';
import Footer from './footer';

const Resturants = () => {

  const [menuData, setMenuData] = React.useState(Menu);
  // console.log(menuData);

  const filterItem = (category) => {
    const updateList = Menu.filter((curElem) => {
      if(curElem.category === category){
        return curElem.category;
      }
      else if(curElem.restroAllItem === category){
        return curElem.restroAllItem;
      }
    })

    setMenuData(updateList);
  }


  return (
    <>
        <Navbar filterItem = {filterItem}/>

        <MenuCard menuData = {menuData}/>

        <Footer />
    </>
  )
}

export default Resturants;