
import { useContext } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { AuthContext } from './contextApi/AuthContext';

function App() {
  const {data}=useContext(AuthContext)
  return (
    <div>
      
    <Navbar/>
    
  
    
    </div>
  );
}

export default App;
