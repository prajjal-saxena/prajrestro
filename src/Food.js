import { Box, Button, Container, Grid, Stack } from '@mui/material'
import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import style from 'styled-components';
import {NavLink } from 'react-router-dom';
import { useProductContext } from './context/productcontex';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// const Food = ({filtered}) => {
  const Food = () => {

  // console.log("filtered",filtered)
  
  const {filterItem, addItem} = useProductContext();

  

  return (  
   <Wrapper>
    <Box  sx={{background: "url('/cover.jpg')no-repeat center center/cover",
     marginTop: "25px"}}>
    <Container>
       <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {filterItem.map((elem) => (
                <Grid item xs={2} sm={4} md={4} key={elem.id}>
                    <Item>
                        <img width='100%' height='250px' src={elem.img} alt="" />
                        <Stack sx={{flexDirection: "row"}} justifyContent='space-between'>
                            <Typography variant='p'><strong>{elem.dish}</strong></Typography>
                            <Typography variant='p'><strong>{elem.price}</strong></Typography>
                        </Stack>
                        <NavLink to='/cart' onClick={()=>addItem(elem)} variant='contained' className='addBtn' sx={{background : "#8C7E65",width: "100%"}}>Add To Cart</NavLink>
                    </Item>
                </Grid>
                ))}
            </Grid>
       </Box>
    </Container>
    </Box>
    </Wrapper>
  )
}

const Wrapper = style.div`
   .btn:hover{
      background: #000;
   }
   a.addBtn {
    background: #8C7E65;
    width: 100%;
    display: block;
    padding: 8px 26px;
    color: #fff;
    text-decoration: none;
}
a.addBtn:hover{
  background: #000;
}
`
export default Food