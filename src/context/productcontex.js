import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Allfood from "../components/Allfood";
import reducer  from "../reducer/productReducer";


const AppContext = createContext();

const initialState = {
    product : [],
    filterItem : Allfood,
    cart : []
}
const AppProvider = ({children}) => {
    const [menu,  allMenu] = useState(Allfood);
    const  [state, dispatch] = useReducer(reducer, initialState)


    const getProduct = (API) => {
        dispatch({type: "SET_DATA", payload: API})
        // dispatch({type: "SET_CART" })
    }

      //All MENU ITEM BREAKFAST, LUNCH, DINNER
      const selectItem = (menulist) => {
        // console.log("menulis", menulist)
        dispatch({type : "SET_FOOD", payload : menulist})
      }

    const addItem = (item) => {
        const {id, img, dish, price} =item
        //  console.log("use",item)
         dispatch({type: "SET_CART", payload : {id, img, dish, price}})
        //  return item
    }
    
    const searchItem = (searching) => {
        // console.log("soli", searching)
        dispatch({type : "SET_SEARCHING", payload : searching})
    }

    useEffect(() => {
        getProduct(menu)
    },[])
    
    return (
        <AppContext.Provider value={{...state,selectItem, addItem, searchItem}}>
           {children}
        </AppContext.Provider>
    )
}

const useProductContext = () =>{
     return useContext(AppContext)
}

export {AppProvider, AppContext, useProductContext}