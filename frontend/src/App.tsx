import { useState } from 'react'
//import {Button, Typography} from '@mui/material';
import './App.css';
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
 