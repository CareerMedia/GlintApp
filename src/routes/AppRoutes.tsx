import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Map from '../pages/Map';
import Send from '../pages/Send';
import Transfer from '../pages/Transfer';
import Success from '../pages/Success';

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Guard><Map /></Guard>} />
        <Route path="/send" element={<Guard><Send /></Guard>} />
        <Route path="/transfer" element={<Guard><Transfer /></Guard>} />
        <Route path="/success" element={<Guard><Success /></Guard>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

function Guard({ children }: { children: JSX.Element }) {
  const signedIn = typeof window !== 'undefined' && localStorage.getItem('signedIn') === 'true';
  if (!signedIn) return <Navigate to="/" replace />;
  return children;
}
