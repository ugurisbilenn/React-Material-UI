import {Box,TextField,MenuItem} from '@mui/material';
import {useState} from 'react';

export const LessonSelect = () => {
    const [country, setCountry] = useState('');
    // const handleChange = () => {

    // }
  return (
    <Box width="250px">
        <TextField  label="Ülke Seçiniz" select fullWidth
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        >
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="USA">ABD</MenuItem>
            <MenuItem value="FR">FRANCE</MenuItem>
        </TextField>
    </Box>
  )
}
