import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Search from './Pages/Search'
import Navabar from './components/Navabar'
import NotFound from './Pages/NotFound'


function App() {

  return (
    <div>
      <Router>
        <Navabar/>

        <Routes>
          <Route path='/'  element={<Dashboard/>}/>
          <Route path='/search'  element={<Search/>}/>


          <Route element={<NotFound/>}/>
        </Routes>

      </Router>

    </div>
  )
}

export default App
