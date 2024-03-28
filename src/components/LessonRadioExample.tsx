import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText,Button} from '@mui/material';
import {useState} from 'react';


export const LessonRadioExample = () => {
    const [value, setValue] = useState('');
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value);
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if(value==="Ugurisbilen"){
            setHelperText("Uğur");
            setError(false);
        }else if(value==="tabikiUgurisbilen"){
            setHelperText("TabikiUğur");
            setError(false);
        }else{
            setHelperText("Lütfen Seçim yapın");
            setError(true);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <FormControl error={error} >
            <FormLabel>En Kapsamlı</FormLabel>
            <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel value="Ugurisbilen" label="Uğur İşbilen" control={<Radio/>}/>
                <FormControlLabel value="tabikiUgurisbilen" label="Tabiki Uğur İşbilen" control={<Radio/>}/>
                   
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button type='submit' variant='contained' color='primary'>Gönder</Button>
        </FormControl>
    </form>
  )
}
