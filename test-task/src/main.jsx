import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes , Route} from "react-router";
import './index.css'
import App from './App.jsx'
import Welcome from './pages/Welcome.jsx';
import Register from './pages/Register.jsx';
import AccountSettings from './pages/AccountSettings.jsx';
import SignIn from './pages/Signin.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account-setting" element={<AccountSettings />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
