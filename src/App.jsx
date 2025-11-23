import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { AccountsPage } from "./pages/AccountsPage.jsx";
import { AccountDetailsPage } from "./pages/AccountDetailsPage.jsx";
import { CoreModulesPage } from "./pages/CoreModulesPage.jsx";
import { Vision2030Page } from "./pages/Vision2030Page.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/:accountId" element={<AccountDetailsPage />} />
        <Route path="/core-modules" element={<CoreModulesPage />} />
        <Route path="/vision2030" element={<Vision2030Page />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}