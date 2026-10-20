import { Routes, Route } from 'react-router-dom'

import Home from './pages/user/Home'
import Explore from './pages/user/Explore'
import Profile from './pages/user/Profile'
import DetailDestination from './pages/user/DetailDestination'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detail-destination" element={<DetailDestination />} />
    </Routes>
  )
}

export default App