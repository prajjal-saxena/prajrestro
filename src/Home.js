import React, {useState } from 'react'
import Food from './Food';
import Header from './components/HeaderLi';
import allitem from './components/Allfood';
import { useProductContext } from './context/productcontex';


const Home = () => {
  //   const [item, setItem] = useState(allitem);
  //   const [filtered, setFilter] = useState(item);

  //  const {product} = useProductContext();
  //  console.log("Prod", product)
  return (
    <>
        {/* <Header item = {product   } setFilter = {setFilter}/>
        <Food filtered= {filtered}/> */}

        <Header/>
        <Food/>
    </>
  )
}

export default Home