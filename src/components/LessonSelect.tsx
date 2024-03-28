import {Box,TextField,MenuItem} from '@mui/material';
import {useState} from 'react';

export const LessonSelect = () => {
    const [country, setCountry] = useState<string[]>([]);
    // const handleChange = () => {

    // }
    console.log(country);
  return (
    <Box width="250px">
        {/* <TextField  label="Ülke Seçiniz" select fullWidth
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        >
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="USA">ABD</MenuItem>
            <MenuItem value="FR">FRANCE</MenuItem>
        </TextField> */}

        <TextField  label="Ülke Seçiniz" 
        SelectProps={{
            multiple:true,
        }}
        select fullWidth
        value={country}
        onChange={(e) => setCountry(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
        >
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="USA">ABD</MenuItem>
            <MenuItem value="FR">FRANCE</MenuItem>
        </TextField>
    </Box>
  )
}
