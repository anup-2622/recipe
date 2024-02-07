
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path='/login' Component={Login}/>
            <Route path='/dashboard' Component={Dashboard}/>
          </Routes>
        </div>

    </Router>
    );
}

export default App;
