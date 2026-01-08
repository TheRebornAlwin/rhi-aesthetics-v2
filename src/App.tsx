import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PlasmaFibroblastPage from './pages/PlasmaFibroblastPage';
import SkinLesionRemovalPage from './pages/SkinLesionRemovalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/skin-lesion-removal" replace />} />
        <Route path="/skin-lesion-removal" element={<SkinLesionRemovalPage />} />
        <Route path="/plasma-fibroblast" element={<PlasmaFibroblastPage />} />
        <Route path="*" element={<Navigate to="/skin-lesion-removal" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
