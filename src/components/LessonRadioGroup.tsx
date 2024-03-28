import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText} from '@mui/material';
import {useState} from 'react';

export const LessonRadioGroup = () => {
    const [value, setValue] = useState('');

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
  return (
   <FormControl>
        <FormLabel >Maaş Beklentiniz</FormLabel>
        <RadioGroup row name='extected-salary' value={value} onChange={handleChange}>
            <FormControlLabel label="2000 $" value="2000" control={<Radio/>}/>
            <FormControlLabel label="3000 $" value="3000" control={<Radio/>}/>
            <FormControlLabel label="4000 $" value="4000" control={<Radio/>}/>
            </RadioGroup>
   </FormControl>
  )
}
