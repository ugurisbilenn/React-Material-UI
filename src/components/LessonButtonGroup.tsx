import { Button,Stack,ButtonGroup } from '@mui/material';


export const LessonButtonGroup = () => {
  return (
    <Stack direction='row' spacing={2}>
        <ButtonGroup variant='contained'>
            <Button>Buton</Button>
            <Button>Buton</Button>
            <Button>Buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined'>
            <Button>Buton</Button>
            <Button>Buton</Button>
            <Button>Buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='text'>
            <Button>Buton</Button>
            <Button>Buton</Button>
            <Button>Buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='text' orientation='vertical'>
            <Button>Buton</Button>
            <Button>Buton</Button>
            <Button>Buton</Button>
        </ButtonGroup>
        <ButtonGroup variant='text' orientation='vertical' size='small' color='error'>
            <Button>Buton</Button>
            <Button>Buton</Button>
            <Button>Buton</Button>
        </ButtonGroup>
    </Stack>
  )
}
