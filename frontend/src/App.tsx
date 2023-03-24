import { useState } from 'react'
import {Button, Typography} from '@mui/material';
import './App.css';
import Landing from './components/Landing';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Typography variant='h1'>hi this is my app cicha....</Typography>
      <Button variant="contained">hiii</Button>
      <Landing></Landing>
    </div>
  )
}

export default App
