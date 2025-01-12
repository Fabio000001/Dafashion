import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Collection from './components/Collection';
import Trends from './components/Trends';
import './App.css'

function App() {
  return (
    <Router>
        <Navbar className="App" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/trends" element={<Trends />} />
        </Routes>
    </Router>
  )
}

export default App
