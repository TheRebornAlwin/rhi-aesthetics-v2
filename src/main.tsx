import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlasmaFibroblastPage from './pages/PlasmaFibroblastPage.tsx';
import SkinLesionRemovalPage from './pages/SkinLesionRemovalPage.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import CookiePolicy from './pages/CookiePolicy.tsx';
import HampshireSkinLesionRemovalPage from './pages/HampshireSkinLesionRemovalPage.tsx';
import SandboxPage from './pages/SandboxPage.tsx';
import NewLandingPage from './pages/NewLandingPage.tsx';
import HampshireLandingPage from './pages/HampshireLandingPage.tsx';
import TestingSandboxPage from './pages/TestingSandboxPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route path="/slr" element={<SkinLesionRemovalPage />} />
        <Route path="/plasma-fibroblast" element={<PlasmaFibroblastPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/hampshire" element={<HampshireLandingPage />} />
        <Route path="/hampshire-slr" element={<HampshireSkinLesionRemovalPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
        <Route path="/testingsandbox" element={<TestingSandboxPage />} />
        <Route path="/newlp" element={<NewLandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
