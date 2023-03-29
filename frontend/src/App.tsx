import { useState } from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';
import RegisterForm from './components/register-form/RegisterForm';
import RoleRegister from './components/register-form/RoleRegister';
import UserRegister from './components/register-form/UserRegister';
import DoctorRegister from './components/register-form/DoctorResiteration';
import DoctorVerification from './components/register-form/DoctorVerification';
import User from './components/Patients/User'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Landing></Landing> */}
      {/* <Login></Login> */}
      {/* <RoleRegister></RoleRegister> */}
      {/* <UserRegister></UserRegister> */}
      {/* <DoctorRegister></DoctorRegister> */}
      {/* <DoctorVerification></DoctorVerification> */}
      <User></User>
    </div>
  );
}

export default App;
