import { Box, Container, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useProductContext } from './context/productcontex';



const CartItem = () => {
  const [total, setTotal] = useState(656)
 

  const {cart} = useProductContext()

  let pric = 0
  const fullPrice = (pricee) => {
    
    pric = pric + parseInt(pricee)
    return pric
  }
  
  console.log("Price",fullPrice)
  return (
     <Container sx={{marginTop: "40px"}}>
         <table border='1' style={{borderCollapse: "collapse"}}>
            <tr style={{background: "#8C7E65", color: "#f1f1f1"}}>
              <th>Item</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Total</th>
            </tr>
            {
               cart.map((elem) => (
                <tr style={{textAlign: "center",padding: "20px"}}>
                  <td style={{width: "28%", borderRadius: "28%"}}><img src={elem.img} width='20%' style={{borderRadius: "20px",padding: "10px"}}/></td>
                  <td>{elem.dish}</td>
                  <td>{elem.price}{fullPrice(elem.price)}</td>
                  <td>Rs 50</td>
                </tr>
               ))
            }
          </table>
          <div>
             <p>Total {total}</p> 
          </div>

     </Container>
  )
}

export default CartItem