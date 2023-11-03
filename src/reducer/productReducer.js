const ProductReducer = (state, action) => {
    switch(action.type){
        case "SET_FOOD": 
        return {
            ...state,
            filterItem : [...state.product.filter((elem)=>(
                elem.food === action.payload
            ))]
        }

        case "SET_DATA" : 
        return {
            ...state,
            product : action.payload
        }
         
        case "SET_CART" : 
        return { 
            ...state,
            cart: [...state.cart, action.payload]
        }

        case "SET_SEARCHING" :
           return{
              ...state,
              filterItem : action.payload ?  [...state.product.filter((elem)=> (
                  elem.dish.startsWith(action.payload)
              ))]:state.product
           } 
        default : 
        return {
            ...state
        }
    }
}

export default ProductReducer;

