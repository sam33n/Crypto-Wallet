import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import WalletView from './views/WalletView';
import ActivityView from './views/ActivityView';
import ProfileView from './views/ProfileView';
import SettingsView from './views/SettingsView';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-off-white">
        <div className="max-w-md mx-auto px-4 py-8 pb-24">
          <Routes>
            <Route path="/" element={<Navigate to="/wallet" replace />} />
            <Route path="/wallet" element={<WalletView />} />
            <Route path="/activity" element={<ActivityView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/settings" element={<SettingsView />} />
          </Routes>
        </div>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;