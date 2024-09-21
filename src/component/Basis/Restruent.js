import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard"
import NavBar from './NavBar.js';


const uniqueList = [
  ...new Set(
    Menu.map((curElement)=>{
      return curElement.category;
    })
  ), "All"
];

console.log(uniqueList);

const Restruent = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem=(category)=>{

    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElement)=>{
      return curElement.category === category;
    });
    
    setMenuData(updatedList)

  };
    
      return (
      <>
        <NavBar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} /> 
      </>
    );
};
export default Restruent;
