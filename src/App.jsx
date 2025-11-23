import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AccountsOverview } from "./pages/AccountsOverview";
import { AccountPage } from "./pages/AccountPage";
import { Login, Signup } from "./pages/Login";
import { AboutGovernment } from "./pages/AboutGovernment";

function App() {
  const [currentAccountId, setCurrentAccountId] = useState(null);

  return (
    <Layout currentAccountId={currentAccountId} onSelectAccount={setCurrentAccountId}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<AccountsOverview />} />
        <Route path="/accounts/:accountId" element={<AccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-government" element={<AboutGovernment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;