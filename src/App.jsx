import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTeam from "./components/AddTeam";
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-team" element={<AddTeam />} />
      </Routes>
    </>
  )
}

export default App
