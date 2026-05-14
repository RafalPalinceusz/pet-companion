import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import Logowanie from "./pages/Logowanie/Logowanie.tsx";
import RegisterPage from "./pages/Rejestracja/RegisterPage.tsx";
import HomePage from "./pages/Strona_glowna/HomePage.tsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <div className="app-main">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/logowanie" element={<Logowanie />} />
            <Route path="/rejestracja" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
