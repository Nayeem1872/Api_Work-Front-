import React, { useState } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import { Add } from '../api/Add';

const StyledContainer = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin-top: 100px;
`;
const StyledFormControl =styled(FormGroup)`
padding: 10px;

`;
const StyledTypography = styled(FormGroup)`
  margin: 5% auto 0 auto;
`;

const FormData = () => {

    const [data,setData] = useState({
        name:"",
        email:"",
        mobile:""
    })
    const [data1,setData1] = useState({
        name:"",
        email:"",
        mobile:""
    })
    const [savedData, setSavedData] = useState(null);

    const onValueChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
        
    }
    const onValueChange1 = (e)=>{
        setData1({...data1,[e.target.name]:e.target.value})
        
    }

    // console.log(data)
    // console.log(data1)


    const addData = async () => {
        const datas = [data,data1]
        
        
        await Add(datas);
        console.log(datas)
      }

    

  return (
    <>
      <StyledContainer>
        <StyledTypography>Table 1</StyledTypography>
        <StyledFormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="name" />
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="email" />
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Mobile</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="mobile" />
        </StyledFormControl>


        <StyledTypography>Table 2</StyledTypography>
        <StyledFormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValueChange1(e)} name="name" />
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onValueChange1(e)} name="email" />
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Mobile</InputLabel>
          <Input onChange={(e)=>onValueChange1(e)} name="mobile" />
        </StyledFormControl>
        <StyledFormControl>
        <Button variant="contained" onClick={()=>addData()}>Save</Button>

        </StyledFormControl>
      </StyledContainer>
    </>
  );
};

export default FormData;