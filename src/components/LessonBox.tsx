import React from 'react'
import { Box } from '@mui/material';
export const LessonBox = () => {
  return (
   <Box 
   sx={{backgroundColor:'primary.main',
   color:'white',
   '&:hover':{
    backgroundColor:'primary.light'
   },
}}
   >
    Lesson
   </Box>
  )
}
