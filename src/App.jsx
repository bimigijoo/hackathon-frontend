import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTeam from "./components/AddTeam";
import ViewTeam from "./components/ViewTeam";
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-team" element={<AddTeam />} />
          <Route path="/view-all" element={<ViewTeam />} />
      </Routes>
    </>
  )
}

export default App
