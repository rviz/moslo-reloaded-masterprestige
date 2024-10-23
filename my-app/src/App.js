import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timed-page" element={<div>Timed Page Coming Soon</div>} />
      </Routes>
    </Router>
  )
}

export default App
