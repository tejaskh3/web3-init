import { useState } from 'react'
import {Button, Typography,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import Landing from './components/Landing/Landing';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing></Landing>
    </div>
  )
}

export default App
