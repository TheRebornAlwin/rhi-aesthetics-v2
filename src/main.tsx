import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlasmaFibroblastPage from './pages/PlasmaFibroblastPage.tsx';
import SkinLesionRemovalPage from './pages/SkinLesionRemovalPage.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import CookiePolicy from './pages/CookiePolicy.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/slr" replace />} />
        <Route path="/slr" element={<SkinLesionRemovalPage />} />
        <Route path="/plasma-fibroblast" element={<PlasmaFibroblastPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<Navigate to="/slr" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
