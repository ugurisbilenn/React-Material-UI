import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup,FormHelperText} from '@mui/material';
import {useState} from 'react';
export const LessonCheckbox = () => {
    const [isAccept, setIsAccept] = useState(false);
    console.log(isAccept);
  return (
    <Box>
    <Box>
        <FormControl>
            <FormLabel>Eğitim Durumu</FormLabel>
            <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Lise"/>
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Üniversite"/>
                <FormControlLabel control={<Checkbox />} label="İlkOkul"/>
            </FormGroup>
        </FormControl>
    </Box>
    <Box>
        <FormControl>
            <FormLabel>Eğitim Durumu</FormLabel>
            <FormGroup row>
                <FormControlLabel control={<Checkbox checked={isAccept} onChange={(e) => setIsAccept(e.target.checked)}/>} label="Kullanım Koşullarını kabul ediyorum"/>
               
            </FormGroup>
        </FormControl>
    </Box>
    </Box>

  )
}
