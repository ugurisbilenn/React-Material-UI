import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup,FormHelperText} from '@mui/material';
import {useState} from 'react';
export const LessonCheckbox = () => {
    const [isAccept, setIsAccept] = useState(false);
    const [knowlegde, setKnowlegde] = useState<string[]>([]);

    const handleKnowledgeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const index = knowlegde.indexOf(event.target.value);
        if(index === -1){
            setKnowlegde([...knowlegde,event.target.value]);
        } else {
            setKnowlegde(knowlegde.filter((item) => item !== event.target.value));
        }
    }
    console.log(knowlegde);
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
    <Box>
        <FormControl>
            <FormLabel>Frontendde neleri biliyorsun</FormLabel>
            <FormGroup row>
                <FormControlLabel value="react" control={<Checkbox checked={knowlegde.includes('react')} onChange={handleKnowledgeChange}/>} label="React Js"/>
                <FormControlLabel value="angular" control={<Checkbox checked={knowlegde.includes('angular')} onChange={handleKnowledgeChange}/>} label="Angular Js"/>
                <FormControlLabel value="vue" control={<Checkbox checked={knowlegde.includes('vue')} onChange={handleKnowledgeChange}/>} label="Vue Js"/>

            </FormGroup>
        </FormControl>
    </Box>
    </Box>

  )
}
