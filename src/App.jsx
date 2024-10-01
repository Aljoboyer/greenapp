import './App.css'
import Home from './pages/Home/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

