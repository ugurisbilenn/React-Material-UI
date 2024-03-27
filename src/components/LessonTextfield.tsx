import React from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material';
import {useState} from 'react';
 
export const LessonTextfield = () => {
    const [value, setValue] = useState('')
  return (
   <Stack spacing={4}>
    <Stack direction='row' spacing={2}>
        <TextField label="Ad"/>
        <TextField label="Ad" variant="outlined" />
        <TextField label="Ad" variant="filled" />
        <TextField label="Ad" variant="standard" />

        <TextField label="Ad" variant="outlined" size='small' color='error'/>

        <TextField label="Ad" variant="outlined" helperText="Lütfen isminizi giriniz"/>
        <TextField type='password' label="Ad" variant="outlined"/>
        <TextField disabled type='password' label="Ad" variant="outlined"/>
        <TextField InputProps={{readOnly:true}} type='password' label="Ad" variant="outlined"/>

        <TextField InputProps={{startAdornment:(
            <InputAdornment position='start'>TL</InputAdornment>
        )}} 
         label="Toplam" variant="outlined"/>
    </Stack>
    <Stack direction='row' >
    <TextField 
    onChange={(e) =>  setValue(e.target.value)}
    value={value}
    type='password' label="Şifre" variant="outlined"
    helperText={!value ? 'Lüfren şifrenizi giriniz' : 'Şifrenizi kimseyle paylaşmayınız'}
    />
    </Stack>
   </Stack>
  )
}
