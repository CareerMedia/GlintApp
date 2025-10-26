import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Map from '../pages/Map'
import Send from '../pages/Send'
import Transfer from '../pages/Transfer'
import Success from '../pages/Success'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/send/:country" element={<Send />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
export { AppRoutes }
