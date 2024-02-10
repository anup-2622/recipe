
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  const isAuthenticated = true  ;
  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/Login' element={<Login/>}/>
             {/* <PrivateRoute path='/dashboard' element={<Dashboard />}   isAuthenticated={isAuthenticated}/> */}
          </Routes>
        </div>

    </Router>
    );
}

export default App;
