import React, { useState } from 'react';
import  './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((item) => {return item.category;})),"All"];
const Restaurant = () => {

    const [menuData,setData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);
    const filterItem = (category) =>{
        if(category === 'All') {
            setData(Menu);
             return;
            }
        const updatedList = Menu.filter((currentEle) => {
            return currentEle.category === category;
        })
        setData(updatedList);

    }
  return (
    <>
   <Navbar filterItem={filterItem} menuList={menuList} />
   <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant
