import { Button, Stack } from '@mui/material'
import reactLogo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <img src={reactLogo} className="logo react" alt="React logo" />

      <Button onClick={() => navigate('/counter')}>Go to counter</Button>
    </Stack>
  )
}
