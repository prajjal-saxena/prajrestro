import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import {BiSolidUserCircle} from  'react-icons/bi'
import styled from 'styled-components'

const Login = () => {
  return (
    <>
    <Wrapper> 
    <Stack sx={{background: "url('/logincover.jpg') no-repeat center center/cover", height: '88vh'}}>
      <Container sx={{marginTop: "70px",}}>
        <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Stack sx={{width: '40%',background: 'rgb(118 101 76 / 47%)', padding: '60px 97px', borderRadius: "10px"}}>
              <Stack>
                <Stack sx={{marginBottom:'20px'}}>
                  <BiSolidUserCircle style={{color: '#9b8361', fontSize: '65px',display: 'block', margin: 'auto'}}/>
                </Stack>
                <Stack>
                  <TextField className='textfiel' sx={{marginBottom: '10px', border: '#fff', color: '#fff'}} id="outlined-basic" label="Username" variant="filled" />
                </Stack>
                <Stack>
                  <TextField sx={{marginBottom: '10px'}} id="outlined-basic" label="Password" variant="filled" />
                </Stack>
                <Button  sx={{background: '#9b8361',color: '#fff'}}><strong>Login</strong></Button>
              </Stack>
            </Stack>
        </Stack>
        </Container>
    </Stack>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
   label[data-shrink=false]+.MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input {
        background: #ffffffb3;
        border-radius: 10px;
    }
    .textfiel{
        color: #fff!important
    }
    input#outlined-basic {
    color: #fff;
}
`
export default Login