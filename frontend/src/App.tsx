import { useState } from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';
import RegisterForm from './components/register-form/RegisterForm';
import Popup from './components/register-form/RoleRegister';
import UserRegister from './components/register-form/UserRegister';
import DoctorRegister from './components/register-form/DoctorResiteration';
import DoctorVerification from './components/register-form/DoctorVerification';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Landing></Landing> */}
      {/* <Login></Login> */}
      {/* <Popup></Popup> */}
      {/* <UserRegister></UserRegister>
      <DoctorRegister></DoctorRegister> */}
      <DoctorVerification></DoctorVerification>
    </div>
  );
}

export default App;
