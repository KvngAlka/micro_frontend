import './App.css'
import { BrowserRouter as Router,  Route, Routes,   } from "react-router-dom";
import Auth from 'auth/Auth'
import Home from 'home/Home'
import Menu from './Menu';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="auth" element={<Auth/>} />

      </Routes>
    </Router>
    
  )
}

export default App
