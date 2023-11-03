import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {BiSolidUserCircle} from  'react-icons/bi'
import styled from 'styled-components'


const Signup = () => {

  const [form, setForm] = useState('')
  console.log("form",form) 

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(form))
  },[form])
  return (
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
                  <TextField type='text' value={form} onChange={(e)=> setForm(e.target.value)} className='textfiel' sx={{marginBottom: '10px', border: '#fff', color: '#fff'}} id="outlined-basic" label="Email" variant="filled" />
                </Stack>
                <Stack>
                  <TextField sx={{marginBottom: '10px'}} id="outlined-basic" label="Username" variant="filled" />
                </Stack>
                <Stack>
                  <TextField sx={{marginBottom: '10px'}} id="outlined-basic" label="Password" variant="filled" />
                </Stack>
                <Button type='submit'  sx={{background: '#9b8361',color: '#fff'}}><strong>Sign up</strong></Button>
              </Stack>
            </Stack>
        </Stack>
        </Container>
    </Stack>
    </Wrapper>
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

export default Signup