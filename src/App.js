
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';


function App() {
  const isAuthenticated = true  ;
  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
             {/* <PrivateRoute path='/dashboard' element={<Dashboard />}   isAuthenticated={isAuthenticated}/> */}
          </Routes>
        </div>

    </Router>
    );
}

export default App;
