import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {BsFillCartFill} from 'react-icons/bs';
import { Button, Stack } from '@mui/material';
import {FaUserCircle} from  'react-icons/fa'
import Login from './Login';
import Signup from './Signup';
import { useProductContext } from '../context/productcontex';


const Menu = () => {
  const {searchItem} = useProductContext();
  return (
    <Wrapper>
          <Stack sx={{background: "#564123cf",padding: "5px 10px"}}
             direction='row' justifyContent='space-between'>
            <Stack>
               <Link to='/'><img src="/logo.png" height='80px' width='100px' alt="" /></Link>
            </Stack>
            <Stack sx={{justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
               <input  onChange={(e)=> searchItem(e.target.value)} style={{padding: '10px', borderRadius: '20px'}} type="text" placeholder='Search.....' />
            </Stack>
            <Stack  className='shop-cart' direction='vertical'>
               <Link to='/login'><p className='signin'>Login</p></Link>
               <Link to='/sign-up'><p className='signin'>Sign up</p></Link>
               {/* <FaUserCircle style={{color: '#fff',marginRight: '20px', fontSize: '25px', cursor: 'pointer'}}/> */}
               <Link to='/cart'><BsFillCartFill color='#fff' style={{fontSize: '25px'}}/></Link>
            </Stack>
        </Stack>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .shop-cart{
        align-items: center;
        justify-content: center;
        padding-right: 21px;
        font-size: 20px;
    }
    a{
      text-decoration: none;
    }
    p.signin {
    background: #9b8361;
    padding: 12px 14px;
    margin-right: 10px;
    color: #fff;
}
`

export default Menu