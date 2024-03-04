
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/auth/Signup';
import Recipe from './components/dashboard/Recipe';
import Viewrecipe from './components/dashboard/Viewrecipe';
import ForgotPassword from './components/auth/ForgotPassword';
import Resetpassword from './components/auth/Resetpassword';
import { AuthProviders, useAuth } from './context/AuthProviders';
import Index from './components/dashboard/Index';
import Demo from './components/dashboard/Demo';



function App() {

  return (
    <AuthProviders>

    <Router>
      
          <Routes>
            {/* <Route path='/'  element={<Dashboard auth={isAuthenticated}/>}/> */}
            <Route path='/' element={<Index/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgotPassword' element={<ForgotPassword/>}/>
            <Route path='/resetpassword/:token' element={<Resetpassword/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/demo' element={<Demo/>}/>
             {/* <PrivateRoute path='/dashboard' element={<Dashboard />}   isAuthenticated={isAuthenticated}/> */}
          </Routes>
    
    </Router>
    </AuthProviders>
    );
}

export default App;
