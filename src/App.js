
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/auth/Signup';
import Recipe from './components/dashboard/Recipe';


function App() {
  const isAuthenticated = true  ;
  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
             {/* <PrivateRoute path='/dashboard' element={<Dashboard />}   isAuthenticated={isAuthenticated}/> */}
          </Routes>
        </div>

    </Router>
    );
}

export default App;
