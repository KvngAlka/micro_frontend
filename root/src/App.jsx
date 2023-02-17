import './App.css'
import { BrowserRouter as Router,  Route, Routes,   } from "react-router-dom";
import Auth from 'auth/Auth'
// import Home from 'home/Home'
import Menu from './Menu';
import { DataProvider } from './core/ContextApi';
function App() {

  return (
    <div className='App'>
      <Router>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="auth" element={<Auth/>} />
            {/* <Route path="/home" element={<Home/>} />
            <Route path="about" element={<div>About</div>} />
            <Route path="auth" element={<Auth/>} /> */}
          </Routes>
        </DataProvider>
      </Router>
    </div>
    
  )
}

export default App
