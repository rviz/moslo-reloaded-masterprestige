import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LandingPageCreta from './components/LandingPageCreta'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/creta" element={<LandingPageCreta />} />
      </Routes>
    </Router>
  )
}

export default App
